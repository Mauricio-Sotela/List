//  ELEMENTS
let hide_menu = document.querySelector(".hide_menu");
let left = document.querySelector(".left");
let show_menu = document.querySelector(".show_menu");
let new_list = document.querySelector(".new_list");
let list_titles = document.querySelectorAll(".list_titles");
let list_items = document.querySelectorAll(".list_items");
let new_task = document.querySelectorAll(".task_button");
let task=document.querySelector('.task');
let task1=document.querySelectorAll('.task');

// let =document.querySelector('.');
// let =document.querySelector('.');
// let =document.querySelector('.');

// on page loaded
if(new_task['length']>0){
   if(list_titles[0]['children']['length']==0){
    new_task[0].style.cssText='visibility: hidden;' 
};
 
}


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
        new_task[0].style.cssText='visibility: visible;'
    let new_div = document.createElement("DIV");
    new_div.setAttribute("class", "title");
    new_div.innerHTML = `<h5 class="h5" role="button" >Untitled</h5>`;
    list_titles[0].insertBefore(new_div, list_titles[0].childNodes[0]);
});

////new list block
new_list.addEventListener("click", () => {
     let new_divTask = document.createElement("DIV");
    new_divTask.setAttribute("class", "task");
    // new_divTask.innerHTML = ` <div class=""></div> `;
     list_items[0].appendChild(new_divTask);

     

   let new_div = document.createElement("DIV");
   new_div.setAttribute("class", "title");
   new_div.innerHTML = `<input type="text" name="list" class="main_title" placeholder="Untitled">`;
    list_items[0].insertBefore(new_div, list_items[0].childNodes[0]);

   


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
    title_imput[0].addEventListener("blur",to_do );
    // if(list_items[0]["children"]["length"]>=3){
    //    list_items[0]["children"][1].style.cssText='display: none;' ;
    //    list_items[0]["children"][2]["children"][1].style.cssText='display: none;' 

    // } 
    
    // console.log(new_task);
    list_titles = document.querySelectorAll(".list_titles");
    
    //right array
    arr2=list_items[0]['children'];
    let bb = Array.from(arr2);
    console.log(bb);

    //left array
   arr1=list_titles[0]['children'];
   let aa = Array.from(arr1);
   console.log(aa);
   console.log(task);
   
   
   for (let i = 1; i < aa.length; i++) {
      aa[i].addEventListener('click',()=>{
        aa[i].style.cssText='color:red;' 
        });
         } ;
         for (let j = 1; j < aa.length; j++){
            aa[j].addEventListener('click',()=>{
                 bb[j].style.cssText='display:none;'
                });

            
        }

/////////////////////////////////////////////////////////////////

       
            new_task[0].addEventListener('click',to_do);
       
       function to_do(){
       let task=document.querySelectorAll('.task');
              
           let new_div = document.createElement("ul");
           new_div.setAttribute("class", "lista");
       
           new_div.innerHTML = `<li><input type="checkbox"> <input type="text" class="ts"></li>`;

          // task=document.querySelector('.task');

           for (let i = 0; i < task.length; i++) {
               console.log(list_items[0]);
               
                console.log(task[i]);
                console.log(task);
                 task=task 
               task[i].insertBefore(new_div, task[i].childNodes[i]);
           focus=document.querySelectorAll('.ts');
           focus[0].focus();
          focus[0].addEventListener('blur',()=>{
          
           if(focus[0].value==""){
               task[i].removeChild(task[i].childNodes[0]);
             
           }
        
       
       }); 
           }

          
           
         
       }

       ///////////////////////////////
}); 



// ///new task











// if(new_task){
//      new_task[0].addEventListener('click',to_do);
// }
// function to_do(){
// let task=document.querySelectorAll('.task');
        
        
//     if(task){
         
//     let new_div = document.createElement("ul");
//     new_div.setAttribute("class", "lista");

//     new_div.innerHTML = `<li><input type="checkbox"> <input type="text" class="ts"></li>`;
//     task[1].insertBefore(new_div, task[1].childNodes[0]);
//     focus=document.querySelectorAll('.ts');
//     focus[0].focus();
//    focus[0].addEventListener('blur',()=>{
   
//     if(focus[0].value==""){
//         task[1].removeChild(task[1].childNodes[0]);
      
//     }
// // console.log(focus);

// });
//     }
  
// }

