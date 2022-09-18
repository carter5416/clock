const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/index.html'
const Newpath =  path.basename(fpath,'.html')
console.log(Newpath)

