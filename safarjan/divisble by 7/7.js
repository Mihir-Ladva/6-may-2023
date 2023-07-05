function check(){
    var value=document.getElementById('display').value
    if(value % 7 == 0){
        document.getElementById('ans').innerHTML="divisble"
    }
    else{
        document.getElementById('ans').innerHTML="not divisble"
    }
}