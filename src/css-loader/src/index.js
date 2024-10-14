import style from "./index.css"; // style is only name we can use any name.
import "./clearButton";


const btn = document.getElementById("button1");
btn.classList.add([style.button]);
btn.addEventListener("click",()=> {
    const el = document.getElementById("header");
    el.innerHTML = "I update the code";

    const shopplingList = ["Potato", "Tomato", "LadyFinger", "Onion", "Spinach", "chilly"]
    const ul = document.getElementById("shoppingList");

    shopplingList.forEach(item => {
        const tempElement = document.createElement("li");
        tempElement.innerHTML = item;
        ul.appendChild(tempElement);
    })
})