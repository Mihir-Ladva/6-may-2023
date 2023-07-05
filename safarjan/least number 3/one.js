function abc() {
    var a = document.getElementById('display1').value;
    var b = document.getElementById('display2').value;
    var c = document.getElementById('display3').value;

    console.log(a);
    console.log(b);
    console.log(c);

    if (a <= b && a <= c) {
        document.getElementById('ans').innerHTML = a;
    }
    else if(b<=a && b<=c){
        document.getElementById('ans').innerHTML = b;
    }
    else{
        document.getElementById('ans').innerHTML = c;
    }

}