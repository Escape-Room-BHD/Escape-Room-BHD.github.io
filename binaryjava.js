window.onload = function () {

    var BINARYSANSWER = "neuron";

    var Binarytest = document.getElementById("binary-test");

    Binarytest.addEventListener('submit', checkTestAnswer, false);

    function checkTestAnswer(e) {
        e.preventDefault();
        console.log(e.target)
        var textInput = e.target.elements[0]
        if (textInput.value === BINARYANSWER) {
            alert("Correct")
            window.location.href = "Final.html";
        }
        else alert("wrong hehe")
    }

}
