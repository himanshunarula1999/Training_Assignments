var emp = '<form><fieldset><legend>Employee Form</legend>';

emp += '<label>Employee Name :</label><br />';
emp += '<input type="text" placeholder="Enter your name"/><br />';
emp += '<label>Employee Email :</label><br />';
emp += '<input type="email" placeholder="Enter your email"/><br />';
emp += '<label>Employee Contact No. :</label><br />';
emp += '<input type="text" placeholder="Enter your Number"/><br />';
emp += '</fieldset></form>';

function empFunction(){
    var el = document.getElementById("form");
    el.innerHTML = emp;

    document.getElementById("button").style.display="none";

}

