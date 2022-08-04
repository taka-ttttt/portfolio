'use strict'
{
    /* ------------------------------ */
    /* header hamburger menu*/
    /* ------------------------------ */
    const hamBtn = document.getElementById('ham-btn');
    var scrollPos;
  
    hamBtn.addEventListener('click', function(){
      if(!this.classList.contains('active')) {
        // add active
        this.classList.add('active');
        document.getElementById('header-nav').classList.add('active');
        // スクロール位置を保存
        // scrollPos = $(window).scrollTop();
        // スクロール停止
        // document.querySelector('html').classList.add('body-scroll-stop');
      }
      else {
        // remove active
        this.classList.remove('active');
        document.getElementById('header-nav').classList.remove('active');
        // スクロール停止を解除
        // document.querySelector('html').classList.remove('body-scroll-stop');
        // スクロール位置まで移動
        // $(window).scrollTop(scrollPos);
      }
  
    });
  

}