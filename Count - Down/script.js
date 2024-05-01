const newYear = "1 january 2025";

function countDown(){
    const currentDate = new Date();
    const newYearTotal = new Date(newYear);
    const delay = (newYearTotal - currentDate) /1000;
    
    const date = Math.floor(delay /3600/24) ;
    const hours = Math.floor(delay / 3600)% 24 ;
    const minutes = Math.floor(delay /60) % 60;   
    const second = Math.floor(delay)% 60;
       
    document.getElementById('secondCount').innerHTML = second;
    document.getElementById('minutesCount').innerHTML = minutes;
    document.getElementById('hoursCount').innerHTML = hours;
    document.getElementById('daysCount').innerHTML = date;
}

setInterval(countDown,1000);




