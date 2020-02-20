var globalData=getApp()
console.log(globalData.globalData)
Page({
  data:{
    button_label:"未点击"
  },
  onLoad:(options)=>{
    console.log("index is loaded"),
    console.log("is jump from pages "+options.id )
  },
  //下面不能用箭头函数，会把this给覆盖掉
  jumpToSecond:function(){
    console.log("click button"),
    this.setData({
      button_label:"已经点击"
    })
    wx.switchTab({
      /*不能没有 根路径 /
        太坑了，app.json就不能加 /
        不然会跳转到 pages/index/pages/secondPage/second
      */
      url: '/pages/secondPage/second',
      success: (result) => {
        console.log(已经切换)
      },
      fail: (result) => {
        console.log(result)
      },
      complete: () => {}
    });
      
    //应该是切换tab
    /*
    wx.navigateTo({
      url: 'pages/secondPage/second?id=2',
    });
    */
  },
  onShareAppMessage:()=>{
    return{
      title:"转发标题",
      path:"/pages/index/index"
    }
  }
})