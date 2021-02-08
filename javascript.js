let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let instances1 = document.querySelector('.instances1');
let instances2 = document.querySelector('.instances2');
let instances3 = document.querySelector('.instances3');
let instances4 = document.querySelector('.instances4');

btn1.addEventListener('click', function(){
    this.classList.add('iActive')
    instances1.classList.add('iBoxActive')
    if (btn2.classList.contains('iActive') || btn3.classList.contains('iActive') || btn4.classList.contains('iActive')){
        btn2.classList.remove('iActive')
        btn3.classList.remove('iActive')
        btn4.classList.remove('iActive')
        instances2.classList.remove('iBoxActive')
        instances3.classList.remove('iBoxActive')
        instances4.classList.remove('iBoxActive')
    }
}); 
btn2.addEventListener('click', function(){
    this.classList.add('iActive')
    instances2.classList.add('iBoxActive')
    if (btn1.classList.contains('iActive') || btn3.classList.contains('iActive') || btn4.classList.contains('iActive')){
        btn1.classList.remove('iActive')
        btn3.classList.remove('iActive')
        btn4.classList.remove('iActive')
        instances1.classList.remove('iBoxActive')
        instances3.classList.remove('iBoxActive')
        instances4.classList.remove('iBoxActive')
    }
}); 
btn3.addEventListener('click', function(){
    this.classList.add('iActive')
    instances3.classList.add('iBoxActive')
    if (btn1.classList.contains('iActive') || btn3.classList.contains('iActive') || btn4.classList.contains('iActive')){
        btn1.classList.remove('iActive')
        btn2.classList.remove('iActive')
        btn4.classList.remove('iActive')
        instances1.classList.remove('iBoxActive')
        instances2.classList.remove('iBoxActive')
        instances4.classList.remove('iBoxActive')
    }
}); 
btn4.addEventListener('click', function(){
    this.classList.add('iActive')
    instances4.classList.add('iBoxActive')
    if (btn1.classList.contains('iActive') || btn2.classList.contains('iActive') || btn3.classList.contains('iActive')){
        btn1.classList.remove('iActive')
        btn2.classList.remove('iActive')
        btn3.classList.remove('iActive')
        instances1.classList.remove('iBoxActive')
        instances2.classList.remove('iBoxActive')
        instances3.classList.remove('iBoxActive')
    }
}); 