// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'http://localhost:3000/static/poster_太冲动的我.jpg',
    name: '太冲动的我',
    author: 'JandZ',
    src: 'http://localhost:3000/static/JandZ - 太冲动的我.mp3',
    bfSrc:'http://localhost:3000/static/bf.jpg',
    ztSrc:'http://localhost:3000/static/zt.jpg',
    isPlay:false,
    current:0,
    duration: 0,
    flag :false,
  },
  sliderChange(e){
    console.log(e)
    let num = e.detail.value;

    this.audioCtx.seek(num)
    this.setData({
      current:e.detail.value
    })
  },
  tiemUpdate(info){
    if(!this.data.flag){
      let { detail } = info;
      let { currentTime, duration } = detail;
      this.setData({
        current: currentTime,
        flag: true,
        duration
      })
    }else{
      let { detail } = info;
      let { currentTime } = detail;
      this.setData({
        current: currentTime
      })
    }
     
  },

  audioPlay: function (e) {
    this.setData({
      isPlay: true
    })
    this.audioCtx.play()
  },
  audioPause: function () {
    this.setData({
      isPlay: false
    })
    this.audioCtx.pause()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
    console.log(this.audioCtx)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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