
const fs = require('fs')

const path = require('path')

// 定义正则表达式
// 匹配scri和style
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf-8', function (err, dataStr) {
  if (err) {
    //读取失败
    return console.log('读取HTML文件失败' + err.message)
  }
  //成功后，拆解
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)

})


// 3.1  定义处理css样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // console.log(r1)
  // 3.2 将提取出来的样式字符串，进行字符串replace替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // console.log(newCSS)
  // 3.4 调用fs.writeFile()方法，将提取出的的newCSS写入到clock的index.css中
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
    if (err) return console.log('写入css样式失败', err.message)
    console.log('CSS写入成功')
  })

}
function resolveJS(htmlStr) {

  const r2 = regScript.exec(htmlStr)
  // console.log(r2)

  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
    if (err) return console.log('js写入失败' + err.message)
    console.log('JS写入成功')
  })
}


// 5.1 定义处理HTML结构的方法
function resolveHTML(htmlStr) {
  // 5.2 将字符串调用 repla 方法
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
    if (err) return console.log('html写入失败' + err.message)
    console.log('HTML写入成功')

  })
}
