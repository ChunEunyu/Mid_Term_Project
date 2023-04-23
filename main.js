const clock = document.querySelector('.clock');


function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    //clock.innerHTML = hour +":" + minutes + ":"+seconds;
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}


function init(){
    setInterval(getTime, 1000);
}

init();

const button1 = document.getElementById('button1');
const section1 = document.getElementById('main');

button1.addEventListener('click', () => {
    window.scrollBy({top: section1.getBoundingClientRect().top, behavior: 'smooth'});
});