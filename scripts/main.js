//  ELEMENTS
//////////////////////////single//////////////
let hide_menu = document.querySelector(".hide_menu");
let left = document.querySelector(".left");
let show_menu = document.querySelector(".show_menu");
let new_list = document.querySelector(".new_list"); //left
let new_task = document.querySelector(".task_button"); //right
let list_item = document.querySelector(".list_item"); //right
let list_parent = document.querySelector(".list_parent"); //right
let block = document.querySelector(".block1"); //right
let focus_mainTitle; //// right title focus
let counter = 0;
let z = 1;
let focus=0;
let eliminar=document.querySelectorAll('.delete')

///////////////////multiple/////////////////
let list_titles = document.querySelectorAll(".list_titles"); //left
let tasks = document.querySelectorAll(".task"); //right
let h5 = 0;
let title_imput;


//////////////////page load************
if (list_parent.childNodes.length ==3) {
  block.style.cssText='display:none'
  
}
block.classList.toggle('block')

//////////////////////////**************///////////////// */
new_list.addEventListener("click", function () {
  block.style.cssText='display:initial'
  let new_div = document.createElement("DIV");
  new_div.setAttribute("class", "title");
  new_div.innerHTML = `<h5 class="h5" role="button" >Untitled</h5>`;
  list_titles[0].insertBefore(new_div, list_titles[0].childNodes[0]);
  h5 = document.querySelectorAll(".h5"); //left

  let task_new_div = document.createElement("DIV");
  task_new_div.setAttribute("class", "title");
  task_new_div.innerHTML = ` <div class="list_item">
  <input type="text" class="main_title" placeholder="Untitled">

 <div class="task"></div> 
</div>`;
  block.insertBefore(task_new_div, block.childNodes[0]);
  focus_mainTitle = document.querySelectorAll(".main_title");
  focus_mainTitle[0].focus();
  tasks = document.querySelectorAll(".task");


  focus_mainTitle[0].addEventListener("blur", action);
  focus_mainTitle[0].addEventListener("keypress", enterKey);

  function enterKey(e){
    if(e.code=='Enter'){
      action()
    }
  }
  
  function action() {
    // to_do();
    for (let i = 0; i < h5.length; i++) {
      
      if (focus_mainTitle[i].value == "") {
        h5[i].innerHTML = "Untitled";
      } else {
        h5[i].innerHTML = focus_mainTitle[i].value;
      };
      
      //block.childNodes[4].focus();
    }
  };
  
});

  






class Task {
  constructor(task) {
    const field = document.createElement("li");
    field.innerHTML = `<input type="checkbox"> <input type="text" class="ts" value=${task}> <button class="delete">x</button>`;
    const taskList = document.querySelector("#tasks");
    taskList.insertBefore(field, taskList.firstChild);
  }
}

var li = document.querySelectorAll("li");
class ListGenerator {
  constructor() {
    const btn = document.querySelector("button");
    let user = document.querySelector(".user");
    btn.addEventListener("click", this.main.bind(this));
    user.addEventListener("blur", this.main.bind(this));
    user.addEventListener("keypress", this.runScript.bind(this));
  }

  runScript(e) {
    //// on enter key press
    if (e.code == "Enter") {
    
      this.main();
    }
  }

  main() {
   let user = document.querySelector(".user");
    //console.log(user.value);
    this.tasks = user;
    this.addTask();
    li = document.querySelectorAll("li");
    //console.log(li);
    new RemoveTask();
    user.value = "";
    eliminar=document.querySelectorAll('.delete');
    eliminar.forEach(element => {element.style.cssText='display:none;'
      
    });
  
  }

  addTask() {
    //console.log(this.tasks);
    if (this.tasks.value.length > 0) {
      const task = new Task(this.tasks.value);
      this.tasks.focus();
      return;
    } else {
      // alert("Introduce a task");
      //this.tasks.focus();
      return;
    }
  }
}

class RemoveTask {
  constructor() {
    if (li.length > 0) {
      for (let i = 0; i < li.length; i++) {
        
        li[i].addEventListener("click", function () {
          if (this.firstElementChild.checked == true){
            this.lastElementChild.previousElementSibling.style.cssText='color: rgba(124, 124, 125, 0.76);text-decoration-line: line-through;background-color: rgba(0, 255, 78, 0.09)';
            this.lastElementChild.previousElementSibling.setAttribute("readonly", true);
            this.lastElementChild.style.cssText='display:inline;';
            this.lastElementChild.addEventListener('click',function (){
              this.parentElement.remove();
            })
          } else if(this.firstElementChild.checked == false) {
            
            this.lastElementChild.previousElementSibling.style.cssText='color: black;text-decoration-line: none;rgba(248, 248, 248, 0.246), 0.09)';
            this.lastElementChild.previousElementSibling.removeAttribute("readonly");
            this.lastElementChild.previousElementSibling.focus();
            this.lastElementChild.style.cssText='display:none;';
            
          }
          // this.lastElementChild.style.cssText='color: rgba(124, 124, 125, 0.76);text-decoration-line: line-through;background-color: rgba(0, 255, 78, 0.09)'

        });
      }
    }
  }
}

const gen = new ListGenerator();
//const gen2 = new RemoveTask()


