function abc() {
    var a = document.getElementById('display').value;
   
    if (a % 3 == 0) {
        document.getElementById('ans').innerHTML = a;
        document.getElementById('ans1').innerHTML = '';
    }
    else {
        document.getElementById('ans').innerHTML = a;
        document.getElementById('ans1').innerHTML = "not";
    }
}