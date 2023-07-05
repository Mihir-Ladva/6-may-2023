function abc() {

    var a = document.getElementById('display1').value;
    var b = document.getElementById('display2').value;

    if (a < b) {
        document.getElementById('ans').innerHTML = b;
    }
    else{
        document.getElementById('ans').innerHTML = a;
    }
}