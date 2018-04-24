$(function () {
  $(".form_btn").click(function(){
    var obj = {
      user: '',
      password: ''
    };
    $(".love_form_center").find('input').map(function(index, data) {
      obj[$(data).attr('name')] = $(data).val();
    });
    if (obj.user != '' && obj.password != '') {
      // 发送登陆请求
    } else {
      $('.form_err').html('请输入完整的信息!');
    }
  });
  $('.love_form_center').find('input').focus(function() {
    $('.form_err').html('');
  })
})