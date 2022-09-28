setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotations = 30 * htime + mtime / 2;
    mrotations = 6 * mtime;
    srotations = 6 * stime;

    hour.style.transform = `rotate(${hrotations}deg)`;
    minute.style.transform = `rotate(${mrotations}deg)`;
    second.style.transform = `rotate(${srotations}deg)`;
}, 1000);
