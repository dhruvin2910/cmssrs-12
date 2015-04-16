function randomResult() {
  var enroll = document.getElementById('enroll');
  alert("Student : " + enroll.value + " scored " + (Math.floor(Math.random() * 1000) / 100) + " SPI.");
}