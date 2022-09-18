// 1导入fs模块
const fs = require('fs')

// 2 使用readFile()读取文件的内容
fs.readFile('../素材/成绩.txt','utf-8',function(err,dataStr){
  // 3 判断是否读取成功
  if(err){
    return console.log('文件读取失败'+err.message)
  }
  // console.log('文件读取成功'+dataStr)
  
  //4.1先把成绩的数据，按照空格进行分割 
  const arrOld = dataStr.split('!')
  // console.log(arrOld)

  //4.2循环分割后的数组,对每一项数据,进行字符串拼接
const arrNew = []

arrOld.forEach(item=>{
  arrNew.push(item.replace('=','==>'))
})
  
  //4.3把新数组中的每一项,进行合并,得到一个新的字符串
  
  const newStr = arrNew.join('\r\n')
  console.log(newStr)
  
  fs.writeFile('./files/成绩-ok.txt',newStr,function(err){
    if(err){
      return console.log('写入失败'+err.message)
    }
    console.log('写入成功')
    
  })
})