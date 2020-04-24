//  ELEMENTS
//////////////////////////single//////////////
let hide_menu = document.querySelector(".hide_menu");
let left = document.querySelector(".left");
let show_menu = document.querySelector(".show_menu");
let new_list = document.querySelector(".new_list"); //left
let new_task = document.querySelector(".task_button"); //right
let list_item = document.querySelector(".list_item"); //right
let focus_mainTitle; //// right title focus
let counter=0;
let z=1;


///////////////////multiple/////////////////
let list_titles = document.querySelectorAll(".list_titles"); //left
let tasks = document.querySelectorAll(".task"); //right
let h5;
let title_imput; 

// let =document.querySelector('.');
// let =document.querySelector('.');
// let =document.querySelector('.');

///////////////////////////// on page loaded///////////////////////////////

/*console.log(tasks['length']);
console.log(new_task);*/

if (tasks["length"] == 0) {
  if (list_titles[0]["children"]["length"] == 0) {
    new_task.style.cssText = "visibility: hidden;";
  }
}

//////////////////////////////////////////menu////////////////

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

///////////////////////new list left side///////////////////
new_list.addEventListener("click", () => {
    for (let i = counter; i < z; i++) {
        if (counter==0) {
            i=counter;
            z=1; 
        }else{

        }
    }
  });





new_list.addEventListener("click", () => {
  new_task.style.cssText = "visibility: visible;";
  new_task.addEventListener("click",to_do);
  let new_div = document.createElement("DIV");
  new_div.setAttribute("class", "title");
  new_div.innerHTML = `<h5 class="h5" role="button" >Untitled</h5>`;
  list_titles[0].insertBefore(new_div, list_titles[0].childNodes[0]);
  h5 = document.querySelectorAll(".h5"); //left
  counter++;
  z++;
});

//left
new_list.addEventListener("click", () => {
  let new_divTask = document.createElement("DIV");
  new_divTask.setAttribute("class", "task");
  // new_divTask.innerHTML = ` <div class=""></div> `;
  list_item.appendChild(new_divTask);
  tasks = document.querySelectorAll(".task"); //right
  title_imput = document.querySelectorAll(".main_title"); //right

});

////////////////////new list + tasks right side////////////

//right
new_list.addEventListener("click", () => {
  let task_new_div = document.createElement("DIV");
  task_new_div.setAttribute("class", "title");
  task_new_div.innerHTML = `<input type="text" name="list" class="main_title" placeholder="Untitled">`;
  list_item.insertBefore(task_new_div, list_item.childNodes[0]);
  focus_mainTitle = document.querySelectorAll(".main_title");
  focus_mainTitle[0].focus();
  tasks = document.querySelectorAll(".task");

  console.log(h5);
  console.log(tasks);
  console.log(focus_mainTitle);
  console.log(z);
  console.log(counter);
  focus_mainTitle[0].addEventListener("blur", function blur() {
    if (focus_mainTitle[0].value == "") {
      h5[0].innerHTML = "Untitled";
    } else {
      h5[0].innerHTML = focus_mainTitle[0].value;
    };
    to_do();
  });
  
});











function to_do() {
 

  
    let new_div = document.createElement("ul");
    new_div.setAttribute("class", "lista");

    new_div.innerHTML = `<li><input type="checkbox"> <input type="text" class="ts"></li>`;
    tasks[counter-1].insertBefore(new_div, tasks[counter-1].childNodes[0]);
    focus = document.querySelectorAll(".ts");
    focus[0].focus();
    focus[0].addEventListener("blur", () => {
      if (focus[0].value == "") {
        tasks[counter-1].removeChild(tasks[counter-1].childNodes[0]);
      }
      // console.log(focus);
    });
  
}
