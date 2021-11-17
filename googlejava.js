window.onload = function () {

    var GOOGLEANSWER = "328069";

    var Googletest = document.getElementById("google-test");

    Googletest.addEventListener('submit', checkTestAnswer, false);

    function checkTestAnswer(e) {
        e.preventDefault();
        console.log(e.target)
        var textInput = e.target.elements[0]
        if (textInput.value === GOOGLEANSWER) {
            alert("Correct")
            window.location.href = "Binary.html";
        }
        else alert("wrong hehe")
    }

}
