let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds');


const countDown = setInterval(() => {
let futureDate = new Date('april 1, 2023 00:00:00').getTime();
let today = new Date().getTime()
let distance = futureDate - today;

    let s = 1000
    let m = 1000 * 60
    let h = 1000 * 60 * 60
    let d = 1000 * 60 * 60 * 24
 
    let daysLeft = Math.floor(distance / d) 
    let hoursLeft = Math.floor((distance % d) / h)
    let minutesLeft = Math.floor((distance % h) / m)
    let secondsLeft = Math.floor((distance % m) / s)
    
    if(minutesLeft <= 0 && secondsLeft <= 0) {
        clearInterval(countDown)
        alert('finish')
        return
    }else

    secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
    daysLeft = daysLeft < 10 ? '0' + daysLeft : daysLeft
    hoursLeft = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
    minutesLeft = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
    
    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;

},1000)







