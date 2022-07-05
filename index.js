const navLinkUl = document.querySelector(".nav-link-ul");
const hambergerMenue = document.querySelector(".hamberger-menue");

hambergerMenue.addEventListener('click',()=> {
const dataVisible =  navLinkUl.getAttribute("data-visible");
if (dataVisible === "false") {
  navLinkUl.setAttribute("data-visible", true);
} else if (dataVisible==="true") {
  navLinkUl.setAttribute("data-visible", false);
}
}) ;
