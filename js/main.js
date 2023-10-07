let icon =  document.querySelector("header i.icon-header");
let ul = document.querySelector("header ul");
icon.onclick = function (){
    ul.classList.toggle("active");
    document.getElementsByClassName("close")[0].classList.add("active")
}
document.getElementsByClassName("close")[0].onclick = ()=>{
    ul.classList.remove("active");
}