//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    plain: false,
    username:'',
    password:''
  },
  //事件处理函数
  inputName(e) {
    this.username = e.detail.value.trim();
  },
  inputPass(e) {
    this.password = e.detail.value.trim();
  },
  login() {
    if(!this.username){
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!this.password) {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    wx.request({
      url: 'http://localhost:3000/auth/login',
      method: 'post',
      data: {
        username:this.username,
        password: this.password
      },
      success(res){
        if(res && res.data &&res.data.data){
          wx.setStorageSync('userinfo', JSON.stringify(res.data.data))
          wx.setStorageSync('token', JSON.stringify(res.data.data.token))
          wx.navigateTo({
            url: '../list/list'
          })
        }
      },
      fail(err){
        console.log(err)
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
