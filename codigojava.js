window.onload = function () {

    var RAMON_CAJAL_ANSWER = "513212";

    var ramonCajalTest = document.getElementById("ramon-cajal-test");

    ramonCajalTest.addEventListener('submit', checkTestAnswer, false);

    function checkTestAnswer(e) {
        e.preventDefault();
        console.log(e.target)
        var textInput = e.target.elements[0]
        if (textInput.value === RAMON_CAJAL_ANSWER) {
            alert("Correct")
            window.location.href = "Nonograms.html";
        }
        else alert("wrong hehe")
    }

}
