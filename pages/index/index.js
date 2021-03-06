var globalData=getApp()
console.log(globalData.globalData)
Page({
  data:{
    button_label:"未点击",
    detail_label:"详情页面",
    list_label:"列表页面",
    loading:false

  },
  onLoad:(options)=>{
    console.log("index is loaded"),
    console.log("is jump from pages "+options.id )
  },
  //下面不能用箭头函数，会把this给覆盖掉
  jumpToSecond:function(){
    console.log(this),
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
        console.log("已经切换")
        console.log(this)
      },
      fail: (result) => {
        console.log(result)
      },
      complete: () => {}
    });
      
    //应该是切换tab
    /*
    
    */
  },
  toDetail:function(){
    this.setData({loading:true})
    wx.navigateTo({
      url: '/pages/detail/detail?name=lin&intro= is good man',
      success:(result)=>{
        this.setData({loading:false})
        console.log("go to detail")
      },
      fail:(result)=>{
        console.log(result)
      }
    });
  },
  toList:function(){
    wx.navigateTo({
      url: '/pages/list/list?name=lin&intro= is good man',
    })
  },
  onShareAppMessage:()=>{
    return{
      title:"转发标题",
      path:"/pages/index/index"
    }
  }
})