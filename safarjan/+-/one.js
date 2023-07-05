function abc(){
    var value=document.getElementById('display').value
    if(value < 0 ){
        document.getElementById('ans').innerHTML="negative"
    }
    else{
        document.getElementById('ans').innerHTML="positive"
    }
}