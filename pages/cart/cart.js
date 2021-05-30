// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "carts": [{
                "id": "102",
                "num": "4",
                "photo_little": "cloud://cloud-test-0govni141f2dc556.636c-cloud-test-0govni141f2dc556-1305944833/images/product_images/iP12pm/12pm.jpg",
                "pid": "8",
                "price": "10099.00",
                "pro_name": "Apple iPhone 12 Pro Max (A2412) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机"
            },
            {
                "uid": "5",
                "id": "103",
                "num": "1",
                "photo_little": "cloud://cloud-test-0govni141f2dc556.636c-cloud-test-0govni141f2dc556-1305944833/images/product_images/laptop/laptop1.jpg",
                "pid": "6",
                "price": "6899.00",
                "pro_name": "联想(Lenovo)YOGA 14S锐龙R7 2021八核2.8K屏超轻薄笔记本电脑 设计游戏超极本 标配：8核R7 5800H 16G+512G固态 100%sRGB高色域 轻奢灰",
                "uid": "5"
            },
            {
                "id": "104",
                "num": "1",
                "photo_little": "cloud://cloud-test-0govni141f2dc556.636c-cloud-test-0govni141f2dc556-1305944833/images/product_images/daikin/daikin1.jpg",
                "pid": "324",
                "price": "4299.00",
                "pro_name": "大金空调 14-19㎡适用 新三级能效 大1.5匹 变频 制冷 家用 壁挂式 以旧换新 FTXJ336WC-W",
                "uid": "5"
            }
        ],
    },

    bindCheckbox: function(e) {
        var _index = parseInt(e.currentTarget.dataset.index);
        var _selected = this.data.carts[_index].selected;
        var carts = this.data.carts;
        carts[_index].selected = !_selected;

        this.setData({
            carts: carts
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(this.data.carts)
        this.setData({
            carts: this.data.carts
        })
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