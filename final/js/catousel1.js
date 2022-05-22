// querySelector方法返回指定选择器的第一个元素
let left = document.querySelector('.button-left');
let right = document.querySelector('.button-right');
let min = document.querySelectorAll('.min');
let images = document.querySelector('.images');

let index = 0;//用以计算和控制图片位置
let time;//作为定时器

//结合index定位当前图片位置
function position() {
    images.style.left = (index * -100) + "%";
}

function add() {
    //当index位置大于当前图片数量-1，回0位
    if (index >= min.length - 1) {
        index = 0;
    } else {
        index++;
    }
}

function desc() {
    //当index位置小于1（在0位），去图片数量-1位
    if (index < 1) {
        index = min.length - 1;
    } else {
        index--;
    }
}

function timer() {
    //每隔3秒index+1（即每隔三秒切图）
    time = setInterval(() => {
        index++;
        desc();
        add();
        position();
    }, 3000)
}
// dom相关（去看这个相关的！）
left.addEventListener('click', () => {
    //点击时图片反方向倒退，所以用desc
    desc();
    position();
    clearInterval(time);//停止定时器并重新执行
    timer();//再执行time
})
right.addEventListener('click', () => {
    //点击时图片前进，所以用add
    add();
    position();
    clearInterval(time);//停止定时器并重新执行
    timer();//再执行time
})

//下方小图片
for (let i = 0; i < min.length; i++) {//遍历并获取当前小图片的值给index
    min[i].addEventListener('click', () => {
        index = i;
        position();
        clearInterval(time);
        timer();
    })
}

//开启定时器，图片自动划
timer();

