document.getElementById("button").addEventListener("click", myfn)

let add =0;

let arr= JSON.parse(localStorage.getItem("myloc"))
function myfn(){
    let email1 = document.getElementById("email").value;
    let pass = document.getElementById("password").value;


    if(email == email1 && password == pass ){
        add++
    }


}
if(add >=1)
{
    alert("login succefull")
}else{
    alert("login page")
}