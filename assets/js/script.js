//Task1
// let text = document.querySelector(".text-input");

// console.log(text.getAttribute("type"));



// if(text.hasAttribute("type")){
//     console.log("Var")
// }else{
//     console.log("Yoxdur");
// }



// text.setAttribute("type","password");

// if(text.getAttribute("type") === "text"){
//     console.log("Var")
// }else{
//     console.log("Yoxdur");
// }


// document.querySelector(".buttonss").addEventListener("mouseover",function(){
//     console.log("Salam");

// })


// document.querySelector(".buttonss").addEventListener("mouseleave",function(){
//     console.log("Salam");

// })
//////////////////////////////////////////////////
// let headers = document.querySelectorAll(".tab-menu .tab-header div");
// let contents = document.querySelectorAll(".tab-menu .tab-body div")

// headers.forEach(header => {
//     header.addEventListener("click",function(){
//         let button = document.querySelector(".active");
//         button.classList.remove("active");
//         this.classList.add("active");
//         contents.forEach(content => {
//             if(this.getAttribute("data-id") == content.getAttribute("data-id")){
//                 content.classList.remove("d-none")
//             }else{
//                 content.classList.add("d-none")
//             }
//         });
//     })
// });
let rightIcon = document.querySelector("#slide-area .slider .icons .right i");

let leftIcon = document.querySelector("#slide-area .slider .icons .left i");


rightIcon.addEventListener("click",function(){
   let activeImg = document.querySelector("#slide-area .slider .img .active");
   if(activeImg.nextElementSibling != null){
    activeImg.classList.remove("active");
    activeImg.nextElementSibling.classList.add("active");
   }else{
    activeImg.classList.remove("active")
    activeImg.parentNode.firstElementChild.classList.add("active")
   }
})
leftIcon.addEventListener("click",function(){
   let activeImg = document.querySelector("#slide-area .slider .img .active");
   if(activeImg.nextElementSibling != null){
    activeImg.classList.remove("active");
    activeImg.nextElementSibling.classList.add("active");
   }else{
    activeImg.classList.remove("active")
    activeImg.parentNode.firstElementChild.classList.add("active")
   }
})




// leftIcon.addEventListener("click",function(){
//    let activeImg = document.querySelector("##slide-area .slider .img .active");
//    if(activeImg.lastElementChild != null){
//       activeImg.classList.remove("active");
//       activeImg.lastElementChild.classList.add("active");
//    }else{
//       activeImg.classList.remove("active");
//       activeImg.parentNode.firstElementChild.classList.add(:active)
//    }
// })


