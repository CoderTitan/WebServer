/* express的中间件 */

//1. 导入express
var express = require('express')

//2. 创建express服务器
var server = express()

//4. 访问服务器(get或者post)
//参数一: 请求根路径
//4.1 get请求
server.get('/home', function (request, response) {
    // console.log(request)
    console.log(request)
    console.log(request.query.page)
    response.send('get参数请求成功')
})


//5. 绑定端口
server.listen(4040)
console.log('启动4040')


