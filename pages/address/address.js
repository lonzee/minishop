// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.352714,
    latitude: 22.125424,
    markers: [
      {
        iconPath: '/images/navi.png',
        id: 0,
        latitude: 22.125424,
        longitude: 113.352714,
        width: 50,
        height: 50
      }
    ]
  },

  markertap: function(){
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: '广科教学楼-3',
      address: '广东省珠海市金湾区湖滨路'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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