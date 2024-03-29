// pages/detail/detail.js
import {
  formatTime
} from '../../utils/util.js';
import API from '../../index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let _this = this;
    let res = await API.get({
      url: 'http://localhost:3000/posts/' + options.id
    });
    if (res && res.data.status == 200) {
      if (res.data.data) {
        res.data.data.created = formatTime(res.data.data.created)
      }
      _this.setData({
        detail: res.data.data
      })
      wx.setNavigationBarTitle({
        title: res.data.data.title
      })
    }
    // wx.request({
    //   url: 'http://localhost:3000/posts/'+options.id,
    //   methods: 'get',
    //   success(res) {
    //     if(res.data.status ==200){
    //       if (res.data.data){
    //         res.data.data.created = formatTime(res.data.data.created)
    //       }
    //       _this.setData({
    //         detail: res.data.data
    //       })
    //       wx.setNavigationBarTitle({
    //         title: res.data.data.title
    //       })
    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})