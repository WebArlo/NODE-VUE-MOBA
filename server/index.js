const express = require('express')

const app = express()

//跨域记得加括号
app.use(require('cors')())
app.use(express.json())
//托管静态文件
app.use('/uploads',express.static(__dirname + '/uploads'))


require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})