let hide_menu= document.querySelector('.hide_menu');
let left= document.querySelector('.left');
let show_menu=document.querySelector('.show_menu');
let new_list=document.querySelector('.new_list');
let list_titles=document.querySelector('.list_titles');
// let new_list=document.querySelector('.new_list');
// let new_list=document.querySelector('.new_list');
// let new_list=document.querySelector('.new_list');
// let new_list=document.querySelector('.new_list');
// let new_list=document.querySelector('.new_list');
// let new_list=document.querySelector('.new_list');
//hide menu
hide_menu.addEventListener('click',()=>{
    left.classList.add('hide');
    show_menu.classList.add('show')
});

// show menu
show_menu.addEventListener('click',()=>{
    left.classList.remove('hide');
    show_menu.classList.remove('show')
});

//add new list
new_list.addEventListener('click',()=>{
    let new_div=document.createElement('DIV');
    new_div.setAttribute("class", "title");
    new_div.innerHTML=`<h5>new</h5>`;
    list_titles.appendChild(new_div);
})