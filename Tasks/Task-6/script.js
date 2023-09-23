function validate(e,divid) {
    if(e.value == "") {
        document.getElementById(divid).innerText = "This Filed is Required"
    } else{
        document.getElementById(divid).innerText = ""
    }
}

function show() {
    document.getElementById("display1").innerText = document.getElementById("uname").value;
    document.getElementById("display2").innerText = document.getElementById("email").value;
    document.getElementById("display3").innerText = document.getElementById("pno").value;
    document.getElementById("display4").innerText = document.getElementById("pass").value;
}