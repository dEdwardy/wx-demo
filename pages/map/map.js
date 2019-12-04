// pages/map/map.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0,
    latitude: 0
  },
  seeLogs(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  chooseLocation(){
    let _this = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
        let { latitude, longitude} = res;
        _this.setData({
          latitude,
          longitude
        })
      },
      fail(err) {
        console.warn(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.getLocation({
      altitude: true,
      isHighAccuracy: true,
      success(res) {
        if(res){
          _this.setData({
            longitude: res.longitude,
            latitude: res.latitude
          })
        }
      },
      fail(err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})