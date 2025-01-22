let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(() => {
    let d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    let hrotation =  30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);

