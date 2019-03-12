	var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true,
      on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        } 
      },
  });
  var title = document.querySelectorAll('.title');
  var swiperPaginationBullet = document.querySelectorAll('.swiper-pagination-bullet');
  for (var i = 0; i < title.length; i++) {
      title[i].onclick = function(z){
          return function(){
            for (var j = 0; j < title.length; j++) {
               swiperPaginationBullet[j].classList.remove('swiper-pagination-bullet-active')
            };
             swiperPaginationBullet[z].className = 'swiper-pagination-bullet-active swiper-pagination-bullet';
             swiper.slideTo(z);
          }
      }(i);
  };
  console.log('Hello! 朋友，感谢您愿意调试简历代码。');
  console.log('本简历采用html+css+swiper+ainimat开发构建。');
  console.log('源码已开源在（https://github.com/xiaoguo525),喜欢请点个star吧！');
  console.log('如果您有什么建议或者想交流前端，欢迎您联系我,我们互相学习，共同进步^_^ ');
  console.log('QQ：438797254；电话：15959219308');


