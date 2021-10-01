var a = Math.floor((Math.random()*99)+1);
document.getElementById("num1").innerHTML = a;
function myFunction(){
    if(a%2==0){
        document.getElementById("type1").innerHTML = "Even";
    }else{
        document.getElementById("type1").innerHTML = "Odd";
    }
}