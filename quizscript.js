let button = document.querySelector(".guess-btn")
let input = document.querySelector(".input-quiz")
let quiz = document.querySelector(".container-quiz")
let title = document.querySelector(".quiz-title")
let countdown = document.querySelector(".countdown")
let ans = "16-05-2002"
button.addEventListener('click', function(){
    let isi = input.value
    console.log (isi)
    if (isi==ans){
        console.log("Granted")
        input.style.display = "none";
        countdown.style.display = "block";
        title.style.display = "none";
        button.style.display = "none"
    } else{
        console.log("Denied")
        input.value = '';
    }
})
// Set the date we're counting down to
var countDownDate = new Date("May 16, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HAPPY BIRTHDAY!";
  }
}, 1000);