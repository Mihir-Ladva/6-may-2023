function abc() {
    var a = document.getElementById('display').value;
   

    if (a < 1000) {
        document.getElementById('ans').innerHTML = "Three Digit";
        if (a < 100) {
            document.getElementById('ans').innerHTML = "Two Digit";
        }
        if (a < 10) {
            document.getElementById('ans').innerHTML = "One Digit";
        }
    }
}