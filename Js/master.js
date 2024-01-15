// Check if there,s in local Storage "Color options 
let mainColor = localStorage.getItem("color-options");

if(mainColor !==  null){
document.documentElement.style.setProperty("--main-color",mainColor);

// Remove Active class For All Items colors
document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");

// Add Active Class on Element with data-color == lccal Storage Item
if(element.dataset.color === mainColor){
    // Add active class on element
element.classList.add("active");
} 
});
}

// #################################################################################


//Toggle class spin on icon
let toggle =document.querySelector('.toggle'); 
let move = document.querySelector('.settings-box');
toggle.onclick=function(){
    this.classList.toggle('fa-spin');
    move.classList.toggle('open');
};




// Switch color
let colorsLi = document.querySelectorAll(".colors-list li");
//loop on All List Items.
colorsLi.forEach(li =>{
    //Click on every List Items  
li.addEventListener('click',(e)=>{
    //  Set color on root
document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

//set color in local Storage 
localStorage.setItem("color-options",e.target.dataset.color);
//Remove Class active
// e.target.parentElement.querySelectorAll(".active").forEach(ele =>{
//     ele.classList.remove("active");
//     //Add class nactive
//     e.target.classList.add("active")
// });


//function to Handele Active Class 
    handleActine(e); 
});
    });
    // ###############################################################################


    // Random Background Options
    let backgroundOption = true;

    // Variable to Control The Interval
    let backgroundInterval;

    // if there is local stotage Random Background
    let backgroundLocalItem = localStorage.getItem("background_option");
    // check if Random background localStorage is not Empty
    if(backgroundLocalItem !== null){
        if(backgroundLocalItem === 'true'){
           backgroundOption = true;
        }else{
            backgroundOption = false;
        }
          
        // Remove Active Class from All Span
let spanBackground = document.querySelectorAll(".random-backgrounds span");

 spanBackground.forEach(element=>{
            element.classList.remove("active");
        });
  
        if(backgroundLocalItem === 'true'){
     document.querySelector(".options-box .random-backgrounds .yes").classList.add("active");
      console.log( document.querySelector(".options-box .random-backgrounds .yes"));  
        }else{
            document.querySelector(".options-box .random-backgrounds .no").classList.add("active");
        }
    };

 //Swich Random Background Option
let randomBackel = document.querySelectorAll(".random-backgrounds span");
randomBackel.forEach(span => {
span.addEventListener('click',(e)=>{
   handleActine(e); 

if(e.target.dataset.background === "yes"){
    backgroundOption = true;
    RandomizeImgs();
    localStorage.setItem("background_option",true);
}else{
    backgroundOption = false;
    clearInterval(backgroundInterval); 
 localStorage.setItem("background_option",false);
}


});
});

// #################################################################################



//start  change background whithin 10 seconds:-

let landingPage = document.querySelector(".landung-page");
let imagesArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];


 // Function to Randomize BackgroundImgs
 function RandomizeImgs(){
  if(backgroundOption === true){
    backgroundInterval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imagesArray.length);
    landingPage.style.backgroundImage = 'url("/imgs/'+imagesArray[randomNumber]+'")'
}, 10000);
  }  
}
RandomizeImgs();
// #################################################################################
// Start Our skills

// Select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll=function(){

    //Skills offSet top
 let skillsOffSetTop = ourSkills.offsetTop;
//  console.log(skillsOffSetTop);

// outer Height
let skillsOuterHeight = ourSkills.offsetHeight;
// this.console.log(skillsOuterHeight);

// Window Height
let windowHeight = this.innerHeight;
// this.console.log(windowHeight)

// Window Scroll Top
let windowScrollTop = this.pageYOffset;
// this.console.log(windowScrollTop);
if(windowScrollTop > (skillsOffSetTop + skillsOuterHeight - windowHeight)){

    let allSkills = document.querySelectorAll(".skills .skill-box span");
              allSkills.forEach(skill => {
                skill.style.width = skill.dataset.progress;
});
};
};


// #################################################################################
// Start Our Galary
let ourGalary = document.querySelectorAll(".galary .imgs-box img");
ourGalary.forEach(img =>{
    img.addEventListener('click',(e) =>{
     
        // Create OverLay Element
        let overLay = document.createElement("div");

        // Add class to overlay
        overLay.className='popup-overlay';

        // Append overlay to body
        document.body.appendChild(overLay);

        // Create popup box
        let popupBox = document.createElement("div");

        // Add class to popupBox
        popupBox.className='popup-box';

        if(img.alt !== null){

            // Create heading
            let headingimg = document.createElement("h3");

            //Create TextHeading
            let TextHeading = document.createTextNode(img.alt);

            // Add TextHeading To headingimg
            headingimg.appendChild(TextHeading);

            // Add  headingimg To popup box
            popupBox.appendChild(headingimg);
        }
        // Create the image
        let popupImg = document.createElement("img");
        // Set Image Source
        popupImg.src = img.src;

        // Add img to popup
        popupBox.appendChild( popupImg);

        // Add popupBox to Body
        document.body.appendChild(popupBox);

       // Create the Close Span
       let closeButton = document.createElement("span");

       // Add Class To closeButton
       closeButton.className='close-button';

       // Create the Close button text
       let closeButtonText = document.createTextNode("X");

       // Add closeButtonText To closeButton
      closeButton.appendChild(closeButtonText);

       // Add closeButton To popupBox
       popupBox.appendChild( closeButton);

    })
});
 // Close PopUp
 document.addEventListener('click', function(e){
    
    if(e.target.className == 'close-button' ){

        // Remove popup
        // e.target.parentNode.remove();
        document.querySelector(".popup-box").remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }
 });


 //// #################################################################################
 // Sellect All Bullets
 let AllBullets = document.querySelectorAll(".nav-bullets .bullet");
//  AllBullets.forEach(bullet =>{

//     bullet.addEventListener('click',function(e){

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//          behavior:'smooth'
//         })
//         })
//  });


//  //Select All Links
  let Alllinks = document.querySelectorAll(".links a");
 
//  Alllinks.forEach(link =>{

//     link.addEventListener('click',function(e){
//          e.preventDefault();
//         document.querySelector(e.target.dataset.link).scrollIntoView({

//          behavior:'smooth'
//         })
//         })
//  });


 // function To Scroll Any Section (from links or bullets)
 function scrollTo(elemnts){
    elemnts.forEach(ele =>{

       ele.addEventListener('click',function(e){
             e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
             behavior:'smooth'
            })
            })
     });  
 };
 scrollTo(AllBullets);
 scrollTo(Alllinks);

 // Handelle active state
 function handleActine(ev){
  ev.target.parentElement.querySelectorAll(".active").forEach(elemnt => {
    elemnt.classList.remove("active");
  })
  ev.target.classList.add("active");
 } 
  // ###############################################################################

   let bulletsoption = document.querySelectorAll(".bullets-option span");
   
   let bulletsContainer = document.querySelector(".nav-bullets");
   let bulletsLocalItem = localStorage.getItem("bullets-option");
   if(bulletsLocalItem !== null){
     bulletsoption.forEach(span => {

        span.classList.remove("active");
     })
      if(bulletsLocalItem === 'block'){

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");
     }
     else{
        bulletsContainer.style.display = 'none';

       document.querySelector(".bullets-option .no").classList.add("active");
     }
   }
   

   bulletsoption.forEach(span => {

    span.addEventListener("click", (e) => {

        if(span.dataset.display === 'show'){

         bulletsContainer.style.display = 'block';
         localStorage.setItem("bullets-option",'block');

        }else{

           bulletsContainer.style.display = 'none';
           localStorage.setItem("bullets-option",'none');
        }
        handleActine(e);
    });
   })
   
   
  
  // ###############################################################################
// Rest Button
 document.querySelector(".reset-option").onclick = function() {
localStorage.clear();
    // localStorage.removeItem("color-options");
//     localStorage.removeItem("background_option");  
//     localStorage.removeItem("bullets-option");

// // Reload Window
 window.location.reload();
 }

 // ############################################################################### 
// Toggle  Menu
let toggleBtn =document.querySelector(".toggle-menu");
let theLinks = document.querySelector(".header-area .links");

toggleBtn.onclick = function(e){

    // Stop Propagation for button
    e.stopPropagation();
    // // toggle Class "Menu-active" on button
    this.classList.toggle("menu-active");

// toggle Class "open" on links
    theLinks.classList.toggle("open");
};


document.addEventListener('click', (e) => {

    if(e.target !== toggleBtn && e.target !== theLinks){
        // Check Menu Is Open
        if(theLinks.classList.contains("open")){

    // // toggle Class "Menu-active" on button
    toggleBtn.classList.toggle("menu-active");

    // toggle Class "open" on links
        theLinks.classList.toggle("open");

        }




    }
});

//   // Stop Propagation for Menu
theLinks.onclick = function(e){
  e.stopPropagation();
};













// toggleBtn.onclick = function(e){

// // Stop Propagation
// e.stopPropagation();

// // toggle Class "Menu-active" on button
//     this.classList.toggle("menu-active");

// // toggle Class "open" on links
//     theLinks.classList.toggle("open");
// };

// // Click Anywhere OutSide Toggle Menu And button
 
// document.addEventListener('click', (e) => {
//   if(e.target !== toggleBtn && e.target !== theLinks ){
//    if(theLinks.classList.contains("open")){
//     toggleBtn.classList.toggle("menu-active");

// // toggle Class "open" on links
//     theLinks.classList.toggle("open");

//     // theLinks.classList.remove("open");
//    }


//     theLinks.classList.remove("menu-active")
//   }
// });


// // Stop Propagation on Menu
// theLinks.onclick = function(e){
//    e.stopPropagation();
// }



