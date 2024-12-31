// Access To Element We Will Use

let allBackgroundBox= Array.from(document.querySelectorAll(".my-page .background-box"));
let allColorWhiteText= Array.from(document.querySelectorAll(".page-content .color-white"));
let headr= document.querySelector(".headr");
let logo= document.querySelector(".logo");
let allProfileImg= Array.from(document.querySelectorAll(".my-page .profile-img"));
let allLeftLinks= Array.from(document.querySelectorAll(".links li"));
let notificationLink= document.querySelector(".notifications");
let notificationBox= document.querySelector(".notific-box");
let postInput= document.querySelector(".post input");
let messageLink= document.querySelector(".message");
let messsagePart= document.querySelector(".message-part");
let themeLink= document.querySelector(".theme");
let themeBox= document.querySelector(".theme-box");
let themeBoxClose= document.querySelector(".theme-box .close");
let allColor= Array.from(document.querySelectorAll(".color li"));
let allBackground= Array.from(document.querySelectorAll(".background li"));
let content= document.querySelector(".content");
let allButtons= Array.from(document.querySelectorAll(".my-page .buttons"));
let allStoryImg= Array.from(document.querySelectorAll(".swiper-wrapper .profile-img"));
let allPartLink= Array.from(document.querySelectorAll(".parts li"));
let messageInput= document.querySelector(".message-part input");
let messageBox= Array.from(document.querySelectorAll(".messages .box"));
let messageBoxName= Array.from(document.querySelectorAll(".messages .name"));
let allHeart= Array.from(document.querySelectorAll(".my-page .fa-heart"));


// Part Of Variables

let color= "",fontSize="",backgroundColor="white";

// Start Main Code

changeColor();

allLeftLinks.forEach((link) => {
  link.addEventListener("click", (eve) => {
    allLeftLinks.forEach((link) => {
      link.classList.remove("active");
    })
    eve.currentTarget.classList.add("active");

    let beforeActiveLink= document.querySelector(".active .before");
    beforeActiveLink.style.cssText= `background-color: ${color}`;

    if (eve.currentTarget.classList.contains("notifications")){
      content.style.cssText= "z-index: -1";
      notificationBox.style.cssText= `display: block ; background-color: ${backgroundColor}`;
      messsagePart.style.cssText= `box-shadow: none ; background-color: ${backgroundColor}`;
      themeBox.style.cssText= "display: none";
    }
    else if (eve.currentTarget.classList.contains("message")){
      content.style.cssText= "z-index: 0";
      notificationBox.style.cssText= "display: none";
      themeBox.style.cssText= "display: none";
      messsagePart.style.cssText= `box-shadow: 0px 0px 5px 2px ${color} ; background-color: ${backgroundColor}`;
    }
    else if (eve.currentTarget.classList.contains("theme")){
      content.style.cssText= "z-index: -1";
      themeBox.style.cssText= "display: block";
      notificationBox.style.cssText= "display: none";
      messsagePart.style.cssText= `box-shadow: none ; background-color: ${backgroundColor}`;
    }
    else{
      content.style.cssText= "z-index: 0";
      messsagePart.style.cssText= `box-shadow: none ; background-color: ${backgroundColor}`;
      notificationBox.style.cssText= "display: none";
      themeBox.style.cssText= "display: none";
    }
  })
})

controlSwiper();
window.addEventListener("resize", controlSwiper());

allHeart.forEach((heart) => {
  heart.addEventListener("click", (eve) => {
    if (eve.currentTarget.classList.contains("fa-regular")){
      eve.currentTarget.classList.remove("fa-regular");
      eve.currentTarget.classList.add("fa-solid");
      eve.currentTarget.style.cssText= "color: red";
    }
    else {
      eve.currentTarget.classList.remove("fa-solid");
      eve.currentTarget.classList.add("fa-regular");
      if (backgroundColor === "#1f1b32"){
        eve.currentTarget.style.cssText= "color: white";
      }
      else {
        eve.currentTarget.style.cssText= "color: #110e16";
      }
    }
  })
})

allPartLink.forEach((ele) => {
  ele.addEventListener("click", (eve) => {
    allPartLink.forEach((ele) => {
      ele.classList.remove("active2");
    })
    eve.currentTarget.classList.add("active2");

    let afterActive2Link= document.querySelector(".active2 .after");
    afterActive2Link.style.cssText= `background-color: ${color}`;
  })
})

messageInput.oninput= function (){
  messageBox.forEach((box) => {
    box.style.cssText= "display: none";
  })
  for (let x=0 ; x<messageBoxName.length ; x++){
    if (messageBoxName[x].innerHTML.toLowerCase().startsWith(`${messageInput.value}`) || messageBoxName[x].innerHTML.toUpperCase().startsWith(`${messageInput.value}`)){
      messageBox[x].style.cssText= "display: flex";
    }
  }
}
messageInput.onblur= function (){
  messageBox.forEach((box) => {
    box.style.cssText= "display: flex";
  })
}

themeBoxClose.onclick= function (){
  themeBox.style.cssText= "display: none";
  content.style.cssText= "z-index: 0";
}

// Click Event For Color Theme

allColor.forEach((color) => {
  color.addEventListener("click", (eve) => {
    allColor.forEach((color) => {
      color.classList.remove("color-active");
    })
    color.classList.add("color-active");
    changeColor();
  })
})

// Click Event For Background Theme

allBackground.forEach((background) => {
  background.addEventListener("click", (eve) => {
    allBackground.forEach((background) => {
      background.classList.remove("background-active");
    })
    eve.currentTarget.classList.add("background-active");
    changeBackgroundColor();
  })
})

// Part Of Functions

function changeColor(){
  for (let x=0 ; x<allColor.length ; x++){
    if (allColor[x].classList.contains("color-active")){
      color= allColor[x].dataset.color;
      break;
    }
  }
  for (let x=0 ; x<allButtons.length ; x++){
    if (allButtons[x].classList.contains("buttons") && !allButtons[x].classList.contains("another-button")){
      allButtons[x].style.cssText= `background-color: ${color}`;
    }
  }
  for (let x=0 ; x<allLeftLinks.length ; x++){
    allLeftLinks[x].style.cssText= `color: ${color}`;
  }
  for (let x=0 ; x<allStoryImg.length ; x++){
    allStoryImg[x].style.cssText= `border-color: ${color}`;
  }
  let beforeActiveLink= document.querySelector(".active .before");
  beforeActiveLink.style.cssText= `background-color: ${color}`;

  let afterActive2Link= document.querySelector(".active2 .after");
  afterActive2Link.style.cssText= `background-color: ${color}`;
}

function changeBackgroundColor(){
  for (let x=0 ; x<allBackground.length ; x++){
    if (allBackground[x].classList.contains("background-active")){
      backgroundColor= allBackground[x].dataset.background;
    }
  }
  if (backgroundColor === "dark"){
    backgroundColor= "#1f1b32";
    document.body.style.cssText= "background-color: #1f1b32";
    headr.style.cssText= "background-color: #231f35 ; box-shadow: 0 0 10px #110e1b";
    logo.style.cssText= "color: white";
    allBackgroundBox.forEach((box) => {
      box.style.cssText= "background-color: #231f35 ; box-shadow: 0 0 10px #110e1b"
    });
    allColorWhiteText.forEach((ele) => {
      ele.style.cssText= "color: white";
    });
    postInput.style.cssText= "color: white";
  }
  else if (backgroundColor === "light") {
    backgroundColor= "white";
    document.body.style.cssText= "background-color: #e1deed";
    headr.style.cssText= "background-color: white ; box-shadow: none";
    logo.style.cssText= "color: #110e1b";
    allBackgroundBox.forEach((box) => {
      box.style.cssText= "background-color: white ; box-shadow: none"
    });
    allColorWhiteText.forEach((ele) => {
      ele.style.cssText= "color: #110e1b";
    });
    postInput.style.cssText= "color: #110e1b";
  }
}

function controlSwiper(){
  if (window.innerWidth >= 1030){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 10,
      freeMode: true,
    });
    
  }
  else if (window.innerWidth < 1030 && window.innerWidth > 992 || window.innerWidth <= 500 && window.innerWidth > 400){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
    });
  }
  
  else if (window.innerWidth <= 992 && window.innerWidth > 500){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      freeMode: true,
    });
  }
  else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true,
    });
  }
}