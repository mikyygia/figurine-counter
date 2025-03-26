let count_element = document.getElementById("count");
let save_element = document.getElementById("save-el")

let count = 0;

function increment() {
    count++;
    count_element.innerText = count;
}

function save() {
    save_element.innerText += " " + count + " - ";
    count = 0;
    count_element.innerText = count;
}