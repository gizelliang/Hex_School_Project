$(document).on("click",function(){
    // 開起選單
$('.dropdown-btn').on("click",function(e) {
    $('.dropdown-menu').toggleClass('show');
  });
  
  // 切換按鈕文字
  $('.new-to-old').on("click",function(e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('show');
   $('.dropdown-btnText').text($('.new-to-old').text());
  });
  
  $('.old-to-new').on("click",function(e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('show');
    $('.dropdown-btnText').text($('.old-to-new').text());
  });
  
  // .text() 運用：https://www.w3schools.com/jquery/html_text.asp
})
