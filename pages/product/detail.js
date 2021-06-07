// pages/product/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['http://182.42.107.160:3000/images/iP12pm/12pm.jpg',
      'http://182.42.107.160:3000/images/iP12pm/1.jpg',
      'http://182.42.107.160:3000/images/iP12pm/2.jpg',
      'http://182.42.107.160:3000/images/iP12pm/3.jpg',
      'http://182.42.107.160:3000/images/iP12pm/4.jpg',
      'http://182.42.107.160:3000/images/iP12pm/5.jpg',
      'http://182.42.107.160:3000/images/iP12pm/6.jpg',
      'http://182.42.107.160:3000/images/iP12pm/7.jpg'],
    display: '',
    isRuleTrue: false,
    num: 1 //
  },

  goToOrderPage: function () {
    wx.navigateTo({
      url: '../order/pay?value=' + this.data.num,
    })
  },

  showRule: function () {
    console.log('click success!')
    this.setData({
      isRuleTrue: true,
      display: "block"
    })
  },

  // 减号
  bindMinus: function (e) {
    var _num = this.data.num;
    if (_num > 1) {
      _num--;
    }
    this.setData({
      num: _num
    })
  },

  // 加号
  bindPlus: function (e) {
    var _num = this.data.num;
    _num++
    this.setData({
      num: _num
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var content = '<p style="margin: 1.12em 0px; padding: 0px; line-height: 1.4; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; text-align: center;"><img src="http://182.42.107.160:3000/images/iP12pm/Details1.jpg" alt="" width="100%" /><img src="http://182.42.107.160:3000/images/iP12pm/Details2.jpg" alt="" width="100%" /><br /></p>';
    WxParse.wxParse('content', 'html', content, this, 0);
  },

  buy: function () {

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