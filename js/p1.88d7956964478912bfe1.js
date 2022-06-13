(()=>{"use strict";const e=[{name:"Jennifer",img:"./assets/images/jennifer.png",type:"Dog",breed:"Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",age:"2 months",inoculations:["none"],diseases:["none"],parasites:["none"]},{name:"Sophia",img:"./assets/images/sophia.png",type:"Dog",breed:"Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",age:"1 month",inoculations:["parvovirus"],diseases:["none"],parasites:["none"]},{name:"Woody",img:"./assets/images/woody.png",type:"Dog",breed:"Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",age:"3 years 6 months",inoculations:["adenovirus","distemper"],diseases:["right back leg mobility reduced"],parasites:["none"]},{name:"Scarlett",img:"./assets/images/scarlett.png",type:"Dog",breed:"Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:"3 months",inoculations:["parainfluenza"],diseases:["none"],parasites:["none"]},{name:"Katrine",img:"./assets/images/katrine.png",type:"Cat",breed:"British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",age:"6 months",inoculations:["panleukopenia"],diseases:["none"],parasites:["none"]},{name:"Timmy",img:"./assets/images/timmy.png",type:"Cat",breed:"British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",age:"2 years 3 months",inoculations:["calicivirus","viral rhinotracheitis"],diseases:["kidney stones"],parasites:["none"]},{name:"Freddie",img:"./assets/images/freddie.png",type:"Cat",breed:"British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",age:"2 months",inoculations:["rabies"],diseases:["none"],parasites:["none"]},{name:"Charly",img:"./assets/images/charly.png",type:"Dog",breed:"Jack Russell Terrier",description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:"8 years",inoculations:["bordetella bronchiseptica","leptospirosis"],diseases:["deafness","blindness"],parasites:["lice","fleas"]}],i=document.querySelector(".burger"),s=document.querySelector(".burger-logo"),t=document.querySelector(".header-inner__nav"),n=document.querySelector(".overlay"),a=document.querySelectorAll(".nav-line");function o(){i.classList.toggle("active"),s.classList.toggle("active-logo"),t.classList.toggle("active-menu"),n.classList.toggle("active"),n.classList.contains("active")?document.body.style.overflow="hidden":document.body.style.overflow="visible"}i.addEventListener("click",o),n.addEventListener("click",o),a.forEach((e=>e.addEventListener("click",o)));const l=document.querySelector(".pets-slider__cards"),r=document.querySelector(".modal");let d=[];function c(){return Math.floor(8*Math.random())}function h(){let i=c();for(;d.includes(i);)i=c();d.push(i);let s=`\n                <div class="pets-slider__pet" data-modal="${i}">\n                    <div>\n                        <img src="${e[i].img}" alt="${e[i].name}">\n                    </div>\n                    <p>${e[i].name}</p>\n                    <button class="pets-button">Learn more</button>\n                </div>\n                `;l.innerHTML+=s,document.querySelectorAll(".pets-slider__pet").forEach((i=>{i.addEventListener("click",(()=>{!function(i){r.innerHTML=`\n  <div class="modal-window">\n    <div class="cancel">\n      <div class="cross"></div>\n    </div>\n    <div class="modal-window__window-left">\n        <img class="window-left__img" src="${e[i].img}" alt="${e[i].name}">\n    </div>\n    <div class="modal-window__window-right">\n        <div class="window-right__content-title">\n            <h3 class="window-right__title">${e[i].name}</h3>\n            <p class="window-right__subtitle">${e[i].type} - ${e[i].breed}</p>\n        </div>\n        <p class="window-right__text">${e[i].description}</p>\n        <ul class="window-right__list">\n            <li class="window-right__list-item list-age"><b>Age</b>: ${e[i].age}</li>\n            <li class="window-right__list-item list-inoculations"><b>Inoculations</b>: ${e[i].inoculations.join()}</li>\n            <li class="window-right__list-item list-diseases"><b>Diseases</b>: ${e[i].diseases.join()}</li>\n            <li class="window-right__list-item list-parasites"><b>Parasites</b>: ${e[i].parasites.join()}</li>\n        </ul>\n    </div>\n  </div>\n`,r.classList.add("display"),document.body.style.overflow="hidden",r.addEventListener("click",(e=>{e.target.classList.contains("modal")&&u()})),document.querySelector(".cancel").addEventListener("click",u)}(i.dataset.modal)}))}))}function m(){let e=6;p>=1280&&(e=6),p<1280&&p>=768&&(e=2),p<=768&&(e=1);for(let i=0;i<e;i++)h()}function u(){r.innerHTML="",r.classList.remove("display"),document.body.style.overflow="visible"}document.addEventListener("DOMContentLoaded",m);const g=document.querySelector(".pets-slider__left"),y=document.querySelector(".pets-slider__right");let p=window.screen.width;g.addEventListener("click",(()=>{d=[],l.innerHTML="",m(),l.style.position="relative",function(){let e=l.offsetWidth,i=setInterval((function(){0==e?clearInterval(i):(e-=10,l.style.left=e+"px")}),5)}()})),y.addEventListener("click",(()=>{d=[],l.innerHTML="",m(),l.style.position="relative",function(){let e=-l.offsetWidth,i=setInterval((function(){0==e?clearInterval(i):(e+=10,l.style.left=e+"px")}),5)}()}))})();