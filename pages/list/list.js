// pages/list/list.js
import {
  formatTime
} from '../../utils/util.js'
import API from '../../index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    total: 0,
  },
  seeDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let _this = this;
    let res = await API.get('http://localhost:3000/posts');
    if (res && res.data.status == 200) {
      wx.setNavigationBarTitle({
        title: '文章列表'
      });
      res.data.data.data.forEach(i => {
        if (i && i.created) {
          i.created = formatTime(i.created)
        }
      })
      _this.setData({
        list: res.data.data.data,
        total: res.data.data.total
      })
    }
    // wx.request({
    //   url: 'http://localhost:3000/posts',
    //   type: 'get',
    //   success(res) {
    //     console.log(res.data.data)
    //     if (res && res.data.status ==200) {
    //       wx.setNavigationBarTitle({
    //         title: '文章列表'
    //       })
    //       res.data.data.data.forEach(i => {
    //         if(i && i.created){
    //           i.created = formatTime(i.created)
    //         }
    //       })
    //       _this.setData({
    //         list: res.data.data.data,
    //         total: res.data.data.total
    //       })
    //       console.log(_this.data.list)
    //       console.log(_this.data.total)
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
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