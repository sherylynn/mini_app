Page({
  data:{
    check:false
  },
  onLoad:function(){
    wx.showModal({
      title: '模态对话框',
      content: '用户须知内容',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) {
          this.setData({
            check:true
          })
        }else if(result.cacel){
          this.setData({
            check:false
          })
        }
      },
      fail: () => {},
      complete: () => {}
    });
      
  }

})