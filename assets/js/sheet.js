// navbar scroll
var nav = document.querySelector('nav');

window.addEventListener('scroll',function() {
        if (window.pageYOffset > 100) {
            nav.classList.add('bg-dark');
        }
        else {
            nav.classList.remove('bg-dark');
        }
    });

//progress-bar scroll
var Bar1 = document.querySelector('.bar1');

window.addEventListener('scroll',function(){
    if (window.pageYOffset > 150){
       Bar1.classList.add('progress-bar-scroll1');
    }
    else{
       Bar1.classList.remove('progress-bar-scroll1');
    }
});

var Bar2 = document.querySelector('.bar2');

window.addEventListener('scroll',function(){
    if (window.pageYOffset > 150){
       Bar2.classList.add('progress-bar-scroll2');
    }
    else{
       Bar2.classList.remove('progress-bar-scroll2');
    }
});

var Bar3 = document.querySelector('.bar3');

window.addEventListener('scroll',function(){
    if (window.pageYOffset > 150){
       Bar3.classList.add('progress-bar-scroll3');
    }
    else{
       Bar3.classList.remove('progress-bar-scroll3');
    }
});


var Bar4 = document.querySelector('.bar4');

window.addEventListener('scroll',function(){
    if (window.pageYOffset > 150){
       Bar4.classList.add('progress-bar-scroll4');
    }
    else{
       Bar4.classList.remove('progress-bar-scroll4');
    }
});

var Bar5 = document.querySelector('.bar5');

window.addEventListener('scroll',function(){
    if (window.pageYOffset > 150){
       Bar5.classList.add('progress-bar-scroll5');
    }
    else{
       Bar5.classList.remove('progress-bar-scroll5');
    }
});

var Bar6 = document.querySelector('.bar6');

window.addEventListener('scroll',function(){
    if (window.pageYOffset > 150){
       Bar6.classList.add('progress-bar-scroll6');
    }
    else{
       Bar6.classList.remove('progress-bar-scroll6');
    }
});