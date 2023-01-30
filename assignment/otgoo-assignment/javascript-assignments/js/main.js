console.log("hello")
function digitalTimer() {
    let dateTime = new Date()
    let hour = dateTime.getHours()
    let minutes = dateTime.getMinutes()
    let second = dateTime.getSeconds()
    let session = document.getElementById("session")
    if(hour < 12) {
        session.innerHTML = "AM"
    } else {
        session.innerHTML = "PM"
    }
    if(hour > 12) {
        hour = hour - 12
    }

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = second;
}
setInterval(digitalTimer, 10)