let API = `https://fakestoreapi.com/products`;

let getProduct = async() => {
    try{
        let res = await fetch("https://fakestoreapi.com/products");

        let data = await res.json();
    
        renderDOM(data);
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
   
}
getProduct();

let renderDOM = (data) => {

    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach (function (el){
       let div = document.createElement("div");
       let div1 = document.createElement("div");
       let div2 = document.createElement("div");
       let image = document.createElement("img");
       let name = document.createElement("h4");
       let price = document.createElement("p");
       let rating = document.createElement("p");
       let button = document.createElement("button");

       image.src =el.image;
       name.innerText = el.title;
       price.innerText = el.price;
       rating.innerText = `Rating: ${el.rating.rate}/ ${el.rating.count}`;
       button.innerText = "Add item";
       
       div.setAttribute("class", "items_div");
       div1.setAttribute("class", "product_image")
       div2.setAttribute("class", "product_detail")
       button.addEventListener("click", function(){
           localStorage.setItem("product",JSON.stringify(el));
       })

       div1.append(image);
       div2.append(name,price,rating,button);
       div.append(div1,div2);
       container.append(div);

    })


}