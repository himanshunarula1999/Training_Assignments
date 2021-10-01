function FirstName(){
    var elMsg = document.getElementById('firstname');

    if(this.value.length<10){
        elMsg.textContent = "FirstName must be more than 10 Characters";
    }
    else{
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById("first");
elUsername.onblur = FirstName;

function LastName(){
    var elMsg = document.getElementById('lastname');

    if(this.value.length<10){
        elMsg.textContent = "LastName must be more than 10 Characters";
    }
    else{
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById("last");
elUsername.onblur = LastName;

function PhNumber(){
    var elMsg = document.getElementById('number');

    if(this.value.length < 10 || this.value.length > 10){
        elMsg.textContent = "Phone No. must be equal to 10 Characters";
    }
    else{
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById("num");
elUsername.onblur = PhNumber;

function Email(){
    var elMsg = document.getElementById('email');
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;

    if(this.value.match(valid)){
        elMsg.textContent = "";
    }
    else{
        elMsg.textContent = "Email should be in right format";
    }
}

var elUsername = document.getElementById("Email1");
elUsername.onblur = Email;