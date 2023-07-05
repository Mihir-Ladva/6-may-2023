function abc(){
    var a = document.getElementById('display').value;
    var ststring = String(a)[0];


    console.log(ststring)
    
    if(ststring == 4){
        document.getElementById('ans').innerHTML="starts with 4"
    }
    else{
        document.getElementById('ans').innerHTML="x"
    }
}