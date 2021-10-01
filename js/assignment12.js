var str = "Himanshu";
var mystr = str.split("");

document.getElementById("name").innerHTML = str;
function myFunction(){
    document.getElementById("split_name").innerHTML = mystr; 
}

// for(var i=0; i<str.length; i++){
//     document.getElementById("split_name").innerHTML = split.push(str.charAt(i));
// }