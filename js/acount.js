$(".btn-forget-password").click(function(){
    console.log('abc')
    $(".login-content").hide();
    $(".forget-password").show();
})


$(".exit-forget-pasword").click(function(){
    $(".login-content").show();
    $(".forget-password").hide();
})