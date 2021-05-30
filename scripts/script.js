// const menuIcon = document.querySelector(".burger");
// const arrow = document.querySelector(".arrow");
// const transformMenu = document.querySelector(".transform_menu");

// menuIcon.addEventListener("click", function() {
// 	transformMenu.classList.add("menu_shown");
// })

// arrow.addEventListener("click", function() {
// 	transformMenu.classList.remove("menu_shown");
// })


// ---------------------------
// BACK TO THE TOP
// ---------------------------

var back_top = document.getElementById("back_top");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = scrollFunction();

// function scrollFunction() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     back_top.style.display = "block";

//   } else {
//     back_top.style.display = "none";
//   }
// }


// const backTop = document.querySelector("#back_top");

// backTop.click(function() {
// 	document.body.animate({
// 		scrollTop:0}, "fast");
// });


// Header change after scroll

const changeHeader = (e) => {
  console.log(window.innerHeight,window.scrollY);
  const header = document.querySelector("header");

  if (window.scrollY > 100) {
    header.classList.add("scrolled-header");
  }
  else {
    header.classList.remove("scrolled-header");
  }
}


document.addEventListener("scroll", changeHeader);

