/**
 * 创建Post请求
 * */

//1. 导入express
var express = require('express')

//2. 加载模块
var bodyParse = require('body-parser')

//3. 创建服务器
var server = express()

//4. 生成解析器
// application/x-www-form-urlencoded
var urlencoded = bodyParse.urlencoded({ extends:true })

// application/json
var jsonParser = bodyParse.json()

//5. 中间件: 把请求体参数 存放到request.body
server.use('./home', jsonParser)

//6. 请求数据
// request:request请求头,请求体
server.post('./home', function (request, response) {
    //解析post请求参数
    console.log(request.body)
    response.send(request.body)
})

//7. 绑定端口
server.listen(5050)