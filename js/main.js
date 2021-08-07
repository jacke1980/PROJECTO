const collapsibles = document.querySelectorAll(".collapsible");
const item = document.querySelector(".nav__toggler");
collapsibles.forEach((item)=>
item.addEventListener("click", function(){
    this.classList.toggle("collapsible--expanded");
} )
);
