const valueOfInput = document.querySelector("input");
const clickButton = document.querySelector("button");
const uList = document.querySelector("ul")

clickButton.addEventListener("click", function(){

    
    if(valueOfInput.value.trim().length !== 0){
        uList.innerHTML += `<li><span><i class="fa-solid fa-check fa-lg" style="color: #17f906;"></i></span>${valueOfInput.value}<span><i class="fa-solid fa-xmark fa-lg" style="color: #ff0000;"></i></span></li>`
        valueOfInput.value = "";
        const spanElement = document.querySelectorAll("span");
      spanElement.forEach((SpanElement) =>{
        SpanElement.addEventListener("click", function(){
            const deleteElement = document.querySelector(".uList ul")
            deleteElement.innerHTML = "";
       })
      })
    }
    
})

