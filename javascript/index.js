const modalBtn = document.querySelector(".modal-button");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".fa-solid");

const outsideModel = document.querySelector("main");

modalBtn.addEventListener("click", function(){
    modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", function(){
    modal.classList.remove("show-modal");
});

window.addEventListener("click", function(event){
    if(event.target == outsideModel){
        modal.classList.remove("show-modal");
    }
});