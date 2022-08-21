const modalBtn = document.querySelector(".modal-button");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".fa-solid");

modalBtn.addEventListener("click", function(){
    modal.classList.remove("hide");
    modalBtn.classList.add("hide");
});

closeBtn.addEventListener("click", function(){
    modal.classList.add("hide");
    modalBtn.classList.remove("hide");
});