const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('bar');
const amOrPm = document.getElementById('day')

const timeUpdate = () =>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr <=9 ?( '0' + hr) : hr;
    min = min <= 9 ?( '0' + min) : min; 
    sec = sec <= 9 ?( '0' + sec) : sec;
    hr >= 12 ? (amOrPm.textContent = 'pm'):(amOrPm.textContent = 'am')

   hour.textContent = hr;
   minute.textContent = min;
   second.textContent = sec;

   progress.style.transition = '.2s'
   progress.style.width = (sec / 60) * 100 + '%';

}

timeUpdate();

const id = setInterval(timeUpdate, 1000);
// clearInterval(id)