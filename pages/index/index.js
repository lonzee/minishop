Page({

  /**
   * 页面的初始数据
   */
  data: {
    resCode: '',
    isPlayingMusic: false,
    bgm: null,
    music_url: 'http://182.42.107.160:3000/public/music/Reality.flac',
    background: ['http://182.42.107.160:3000/images/ad/ad1.jpg',
    'http://182.42.107.160:3000/images/ad/ad2.jpg',
    'http://182.42.107.160:3000/images/ad/ad3.jpg',
    'http://182.42.107.160:3000/images/ad/ad4.jpg'],
  },

  play: function () {
    if (this.data.isPlayingMusic){
      this.bgm.pause()
    } else{
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },

  goToSearch:function(){
    wx.navigateTo({
      url: '../search/search?value=' + this.data.resCode,
    })
  },

  scanCode: function(){
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        this.setData({ resCode: res.result })
      }
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
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title = 'Reality'
    this.bgm.epname = 'Reality'
    this.bgm.singer = 'Lost Frequencies/Janieck Devy'
    this.bgm.src = this.data.music_url
    this.bgm.play()
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