function abc() {
    var stnum = document.getElementById('display1').value;
    var ndnum = document.getElementById('display2').value;
    var rdnum = document.getElementById('display3').value;

    if (stnum >= ndnum && stnum >= rdnum) {
        document.getElementById('ans').innerHTML = document.getElementById('display1').value
    }
    else if (ndnum >= stnum && ndnum >= rdnum) {
        document.getElementById('ans').innerHTML = document.getElementById('display2').value 
    }
    else {
        document.getElementById('ans').innerHTML = document.getElementById('display3').value
    }
}