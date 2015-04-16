function validate() {
  var enroll = document.getElementById('enroll'), password = document.getElementById('password');

  if (enroll.value == "") {
    alert("Enrollment No. can not be empty");
    return false;
  }

  if (password.value == "") {
    alert("Password can not be empty");
    return false;
  }

  if (password.value.length < 8) {
    alert("Password is too short. Minimum 8 characters are required.");
    return false;
  }

  return true;
}