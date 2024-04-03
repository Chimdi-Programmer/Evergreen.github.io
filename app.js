
const Menuicon = document.querySelector('.Menu-icon');
const Menuiconimage  = document.querySelector('.menu-icon img');
const dropdownmenu = document.querySelector('.dropdown_menu');
Menuicon.onclick = function(){
  dropdownmenu.classList.toggle('open')
}

/*Automatic navigation*/

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter>3){
        counter = 1;
    }
},5000)


