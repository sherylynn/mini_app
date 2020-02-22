Page({
  data:{
    who:{
      name:"default_name",
      intro:"default_intro"
    }
  },
  onLoad:function(options){
    console.log(options)
    this.setData({
      who:{
        name:options.name,
        intro:options.intro
      }
    })
    wx.showToast({
      title: 'detail_page',
      icon: 'success',
      image: '',
      duration: 1500,
      mask: false,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  }
})