window.onload = function () {

    var MATHSANSWER = "798";

    var Mathstest = document.getElementById("maths-test");

    Mathstest.addEventListener('submit', checkTestAnswer, false);

    function checkTestAnswer(e) {
        e.preventDefault();
        console.log(e.target)
        var textInput = e.target.elements[0]
        if (textInput.value === MATHSANSWER) {
            alert("Correct")
            window.location.href = "GoogleMaps.html";
        }
        else alert("wrong hehe")
    }

}
