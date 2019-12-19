$(function () {
  // 加载header
  $('header').load("header.html", "", function (response, status, request) {
    $(this).html(response);
    $('.nav-ul li').hover(function () {
        // over
        $('.sub-menu').stop().slideUp();
        $(this).addClass('cur');
        $(this).find('.sub-menu').stop().slideDown();
        
      }, function () {
        // out
        $('.sub-menu').stop().slideUp();
        $(this).removeClass('cur');
      }
    );

    //移动端导航
  });


  //加载footer
  $('footer').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
  });

  new WOW().init();


  $(document).ready(function () {
    $("header").on("click", ".hamburger", function () {
      $(this).toggleClass("is-active");
      $('.navbar-collapse').toggleClass('active');
    });

    $(window).scroll(function () {
      //创建一个变量存储当前窗口下移的高度
      var scroTop = $(window).scrollTop();
      //如果大于100，则显示顶部元素，否则隐藏顶部元素
      if (scroTop > 100) {
        $('header').addClass('active')
      } else {
        $('header').removeClass('active')
      }
    }
    );


  })


 
})

