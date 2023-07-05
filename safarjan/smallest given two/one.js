function abc(){
    var first_num =document.getElementById('number_1').value;
    var second_num=document.getElementById('number_2').value;
    if(first_num < second_num){
        document.getElementById ('ans').innerHTML="1st number is smallest"
    }
    else{
        document.getElementById ('ans').innerHTML="2nd number is smallest"
    }
}