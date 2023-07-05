function abc() {
    var a = document.getElementById('display1').value;
    var b = document.getElementById('display2').value;
    var c = document.getElementById('display3').value;

    if ((a < c) && (b < c)) {
        document.getElementById('ans1').innerHTML = c;
        if (b < a) {
            document.getElementById('ans2').innerHTML = a;
            document.getElementById('ans3').innerHTML = b;
        }
        else {
            document.getElementById('ans2').innerHTML = b;
            document.getElementById('ans3').innerHTML =a;
        }
    }
    else if ((a < b) && (c < b)) {
        document.getElementById('ans1').innerHTML = b;
        if (a < c) {
            document.getElementById('ans2').innerHTML = c;
            document.getElementById('ans3').innerHTML = a;
        }
        else {
            document.getElementById('ans2').innerHTML = a;
            document.getElementById('ans3').innerHTML = c;
        }
    }
    else if ((b < a) && (c < a)) {
        document.getElementById('ans1').innerHTML = a;
        if (b < c) {
            document.getElementById('ans2').innerHTML = c;
            document.getElementById('ans3').innerHTML = b;
        }
        else {
            document.getElementById('ans2').innerHTML = b;
            document.getElementById('ans3').innerHTML = c;
        }
    }
}