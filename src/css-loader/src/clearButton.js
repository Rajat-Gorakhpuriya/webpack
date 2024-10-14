import style2 from "./clearButton.css";

const el = document.createElement("button");
el.innerHTML = "Clear"; // innerHTML is property we have to use =
el.classList.add([style2.button]);
el.onclick = () => {    // onclick is property we have to use = 
    alert("Clear clicked");
};
document.body.appendChild(el);