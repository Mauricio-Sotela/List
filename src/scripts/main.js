let hide_menu= document.querySelector('.hide_menu');
let left= document.querySelector('.left');
let show_menu=document.querySelector('.show_menu');

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