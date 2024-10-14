
const btn = document.getElementById("button1");
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