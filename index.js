let StartTotal=0;
function AddtoCard(element){
    let card=element.closest(".single-item");
    let ProductName=card.querySelector("#name").innerText;
    let ProductQuantityDescription=card.querySelector("label").innerText;
    let ProductQuantity=card.querySelector("input").value;
    ProductQuantity=Number(ProductQuantity);
    let ProductPrice=card.querySelector("#price").innerText;
    let Product=document.querySelector("#shop");
    
    if(Number(ProductQuantity)===0){
        alert("Odaberite kolicinu...");
    }else{
        let aT=ProductPrice.indexOf(":");
        let E=ProductPrice.indexOf("€");
        let finalProductPrice=ProductPrice.substring(aT+1,E);
        finalProductPrice=Number(finalProductPrice);
        let Total=ProductQuantity*finalProductPrice;
        StartTotal+=Total;
        Product.innerHTML+=ProductName+"<br>"+ProductQuantityDescription+ ProductQuantity+"<br>"+ProductPrice+"<br>";
        let TotalParagraph=document.querySelector("#total").innerHTML="Total:"+ StartTotal +" € ";
        element.innerText="Added";
        element.setAttribute("disabled","true");
    }
    
}
function DeleteAll(){
    let Mainel=document.querySelectorAll(".single-item");
    let paragraph=document.querySelector("#shop");
    paragraph.innerHTML="";
    if(StartTotal>0){   
        StartTotal=0;
        let TotalParagraph=document.querySelector("#total").innerHTML="Total:"+ StartTotal +" € ";
    }else{
    }   
Mainel.forEach(function(el) {
        let ProductQuantity=el.querySelector("input").value=0;
        let btn=el.querySelector(".btn-primary");
        btn.removeAttribute("disabled");
        btn.innerHTML="Buy"; 
    });
}