const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    // 使密码只加密一次，不会出现加密后再次加密，false不显示密码
    select: false,
    // 加密
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  }
})
module.exports = mongoose.model('AdminUser', schema)