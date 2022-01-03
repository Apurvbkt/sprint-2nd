let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
async function get(){
  
   let res = await fetch(url);

   let data = await res.json();

   let data1 = data.meals
   console.log(data1);
   disply(data1)
}
get()

function disply(aa){
  
    let main = document.createElement("div");
  aa.map(function(elem){
    
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.strMealThumb;
    // console.log(img);

    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.addEventListener("click", cart)

    let name = document.createElement("h3");
    name.innerText = elem.strMeal;

    let rs = document.createElement("h4")
    rs.innerText = Math.floor(Math.random()*500+100)

    div.append(img, name, rs,btn)

    document.querySelector("body").append(main)
     main.append(div)
  })

  function cart(){
      alert("add to cart ")

      setTimeout(function(){
window.location.href = "checkout.html"
alert("Move to payment section")
      }, 3000)
  }











}