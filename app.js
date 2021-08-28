function digitalClock() {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let secound = date.getSeconds()
    let amPm = 'AM'

    if(hour>12){
        hour = hour-12
        amPm = 'PM'
    }
    hour = hour < 10 ? '0' + hour : hour
    minutes = minutes < 10 ? '0' + minutes : minutes
    secound = secound < 10 ? '0' + secound : secound
  

    document.getElementById('clock').innerHTML = `${hour}:${minutes}:${secound}`
    document.getElementById('amPm').innerHTML = `${amPm}`

    setInterval(digitalClock, 1000);
}
digitalClock()
