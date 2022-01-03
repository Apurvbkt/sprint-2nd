function data(){
    let card = document.getElementById("card").value;
    let cvv = document.getElementById("cvv").value;


    setTimeout(function(){
        if(card ==7894561230&& cvv==799){
            alert("paument succesfull ")
        }else{
            alert("invalid Card or cvv")
        }
    }, 3000)
}