var a;
var ans = [513212];
// var ans = [513212];
function getVal() {
    a = document.getElementById("n1");
}
function onClick() {
    if (a.value == ans){
        alert("Correct")
        window.location.href = "../Nonograms";
    }
  else alert("wrong hehe")
}
