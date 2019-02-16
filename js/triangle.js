function findOut() {
  var hair = document.getElementById('brain').value;
  var eye = document.getElementById('nose').value;
  var teeth = document.getElementById('tounge').value;
  alert(hair);
  var one = parseInt(hair);
  var two = parseInt(eye);
  var three = parseInt(teeth);
  alert(one);
  if (one + two <= three || two + three <= three || one + three <= three) {
    alert("not a triangle at all");
  } else if (one === two && two === three && one === three) {
    alert("equilateral triangle");
  } else if (one != two && two != three && one != three) {
    alert("scalene triangle");
  } else {
    alert("isosles triangle");
  }
}
