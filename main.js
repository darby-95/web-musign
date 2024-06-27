// 메인 메뉴 움직이는 bar
// 아래 문법은 jquery 문법이다.

$('.gnb a').mouseenter(function(){
    let bar = $(this).position().left;
    // : bar 는 마우스 올린 그것(.gnb a)의 왼쪽
    // position() : 요소의 위치 정보(top, left, ...) 를 반환한다.

    // console.log(bar) : 요소의 위치 정보 좌표가 뜬다.

    let widnum=$(this).width();
    // 마우스 올린 것의 너비값을 받는다.

    // jquery animate 문법 : $('.bar').animate({옵션},시간)
    $('.bar').animate({
        'left':bar + "px",
        'width':widnum + "px",
    },200)
})

// scrolla : animate 라는 클래스명을 넣으면 애니메이션을 줄 수 있다.
$('.animate').scrolla({
    // default
    mobile: false, // disable animation on mobiles
    once: false, // true : 한번만, false : 반복(화면을 떠났다가 다시 접근해도)
    animateCssVersion: 4 // used animate.css version (3 or 4)
});

// menuOpen
// jquery 문법
let open=$('.menuOpen .open')
let menuWrap=$('.menuWrap')
let close=$('.menuWrap .close')
open.click(function(){
    menuWrap.addClass('on')
})
close.click(function(){
    menuWrap.removeClass('on')
})

// path 의 총 길이 구하는 방법
let path=document.querySelector('.path1')
let pathHeight=path.getTotalLength()
console.log(pathHeight) // : path 의 총 길이 : 1740.50830078125


//service영역시 배경 칼라 바꾸기

// 스크롤을 움직이면 어떤 일이 일어난다.
$(window).scroll(function(){ 
    // $(this) : $(window) 이다.
    let scrollTop = $(this).scrollTop(); // : 문서 전체에서의 스크롤 기준 top의 높이 값
    // offset().top : 전체 문서의 top에서 'service영역의 top' 까지의 높이값
    let offset = $('.service').offset().top;
    if (scrollTop>offset){
        $('body').addClass("on")
    }else{
        $('body').removeClass("on")
    }
    // service영역에 진입하면 'on'이라는 클래스가 생기고 벗어나면 없어진다.
})