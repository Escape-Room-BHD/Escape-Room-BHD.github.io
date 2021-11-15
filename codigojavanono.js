window.onload = function () {

    var NONOGRAMSANSWER = "brain";

    var Nonogramtest = document.getElementById("nonogram-test");

    Nonogramtest.addEventListener('submit', checkTestAnswer, false);

    function checkTestAnswer(e) {
        e.preventDefault();
        console.log(e.target)
        var textInput = e.target.elements[0]
        if (textInput.value === NONOGRAMSANSWER) {
            alert("Correct")
            window.location.href = "hemispheres.html";
        }
        else alert("wrong hehe")
    }

}
