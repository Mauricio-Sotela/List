//  ELEMENTS
let hide_menu = document.querySelector(".hide_menu");
let left = document.querySelector(".left");
let show_menu = document.querySelector(".show_menu");
let new_list = document.querySelector(".new_list");
let list_titles = document.querySelector(".list_titles");
let list_items = document.querySelector(".list_items");
let new_task = document.querySelector(".new_task");
// let =document.querySelector('.');
// let =document.querySelector('.');
// let =document.querySelector('.');
// let =document.querySelector('.');

//hide menu
hide_menu.addEventListener("click", () => {
    left.classList.add("hide");
    show_menu.classList.add("show");
});

// show menu
show_menu.addEventListener("click", () => {
    left.classList.remove("hide");
    show_menu.classList.remove("show");
});

//add new list title
new_list.addEventListener("click", () => {
    let new_div = document.createElement("DIV");
    new_div.setAttribute("class", "title");
    new_div.innerHTML = `<h5 class="h5" >Untitled</h5>`;
    list_titles.insertBefore(new_div, list_titles.childNodes[0]);
});

////new list block
new_list.addEventListener("click", () => {
    let new_div = document.createElement("DIV");
    new_div.setAttribute("class", "title");
    new_div.innerHTML = `<div class="list_parent">
    <input type="text" name="list" class="main_title" placeholder="Untitled">

    <div class="tasks">
        <button class="new_task">
            <i class="fas fa-plus"></i>
        </button>
    </div>
    
</div> `;
    list_items.insertBefore(new_div, list_items.childNodes[0]);
    let focus = document.querySelectorAll(".main_title");
    focus[0].focus();

    let h5 = document.querySelectorAll(".h5");
    let title_imput = document.querySelectorAll(".main_title");

    title_imput[0].addEventListener("blur", function blur() {
        if (title_imput[0].value == "") {
            h5[0].innerHTML = "Untitled";
        } else {
            h5[0].innerHTML = title_imput[0].value;
        }
    });
    blur();
    new_div.focus();
});


///new task