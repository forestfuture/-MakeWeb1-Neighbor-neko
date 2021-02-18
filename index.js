// navbar
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
    let collapse = document.getElementsByClassName("collapse");
    let navbarIcon = document.getElementsByClassName("navbarIcon");
    if(collapse[0].classList.contains("show") == false){
       navbarIcon[0].setAttribute("transform", "rotate(180)");
    }
    else if(collapse[0].classList.contains("show") == true){
        navbarIcon[0].removeAttribute("transform", "rotate(180)");  
    };
      
});


// navItem
window.addEventListener("load", function(){
    let navLink = document.getElementsByClassName("nav-link");
    let navLinkIcon = document.getElementsByClassName("nav-linkIcon");
    for(var i = 0; i < navLink.length; i++){
        navLinkAction(navLink[i],i);
    }

    function navLinkAction(navLinkDOM,navLinkId){
        navLinkDOM.addEventListener("mouseover", function(){ 
            navLinkIcon[navLinkId].setAttribute("transform", "rotate(-30)"); 
        });
        navLinkDOM.addEventListener("mouseleave", function(){
            navLinkIcon[navLinkId].removeAttribute("transform", "rotate(-30)"); 
        })    
    }
});


// imgセレクト
window.addEventListener("load", function(){
    let img_select1 = document.getElementsByClassName("img_select1");
    let img_select2 = document.getElementsByClassName("img_select2");
    let img_select3 = document.getElementsByClassName("img_select3");
    let img_select4 = document.getElementsByClassName("img_select4");
    let img_select5 = document.getElementsByClassName("img_select5");
    let img1 = document.getElementsByClassName("img1");
    let img2 = document.getElementsByClassName("img2");
    let img3 = document.getElementsByClassName("img3");
    let img4 = document.getElementsByClassName("img4");
    let img5 = document.getElementsByClassName("img5");

    for(var i = 0; i < img_select1.length; i++){
        btnAction1(img_select1[i],i);
    }
    function btnAction1(img_select1DOM,img_select1Id){
        img_select1DOM.addEventListener("click", function(){
            this.classList.add("img_border");
            for(var i = 0; i < img1.length; i++){
                if(i == img_select1Id){
                    img1[i].classList.remove("d-none");
                }else if(i != img_select1Id){
                    img1[i].classList.add("d-none");
                }
            }
            for(var i = 0; i < img_select1.length; i++){
                if(img_select1Id !== i){
                    img_select1[i].classList.remove("img_border");
                }   
            }
        });
    }


    for(var i = 0; i < img_select2.length; i++){
        btnAction2(img_select2[i],i);
    }
    function btnAction2(img_select2DOM,img_select2Id){
        img_select2DOM.addEventListener("click", function(){
            this.classList.add("img_border");
            for(var i = 0; i < img2.length; i++){
                if(i == img_select2Id){
                    img2[i].classList.remove("d-none");
                }else if(i != img_select2Id){
                    img2[i].classList.add("d-none");
                }
            }
            for(var i = 0; i < img_select2.length; i++){
                if(img_select2Id !== i){
                    img_select2[i].classList.remove("img_border");
                }   
            }
        });
    }


    for(var i = 0; i < img_select3.length; i++){
        btnAction3(img_select3[i],i);
    }
    function btnAction3(img_select3DOM,img_select3Id){
        img_select3DOM.addEventListener("click", function(){
            this.classList.add("img_border");
            for(var i = 0; i < img3.length; i++){
                if(i == img_select3Id){
                    img3[i].classList.remove("d-none");
                }else if(i != img_select3Id){
                    img3[i].classList.add("d-none");
                }
            }
            for(var i = 0; i < img_select3.length; i++){
                if(img_select3Id !== i){
                    img_select3[i].classList.remove("img_border");
                }   
            }
        });
    }

    for(var i = 0; i < img_select4.length; i++){
        btnAction4(img_select4[i],i);
    }
    function btnAction4(img_select4DOM,img_select4Id){
        img_select4DOM.addEventListener("click", function(){
            this.classList.add("img_border");
            for(var i = 0; i < img4.length; i++){
                if(i == img_select4Id){
                    img4[i].classList.remove("d-none");
                }else if(i != img_select4Id){
                    img4[i].classList.add("d-none");
                }
            }
            for(var i = 0; i < img_select4.length; i++){
                if(img_select4Id !== i){
                    img_select4[i].classList.remove("img_border");
                }   
            }
        });
    }

    for(var i = 0; i < img_select5.length; i++){
        btnAction5(img_select5[i],i);
    }
    function btnAction5(img_select5DOM,img_select5Id){
        img_select5DOM.addEventListener("click", function(){
            this.classList.add("img_border");
            for(var i = 0; i < img5.length; i++){
                if(i == img_select5Id){
                    img5[i].classList.remove("d-none");
                }else if(i != img_select5Id){
                    img5[i].classList.add("d-none");
                }
            }
            for(var i = 0; i < img_select5.length; i++){
                if(img_select5Id !== i){
                    img_select5[i].classList.remove("img_border");
                }   
            }
        });
    }
});


// TOPに戻るボタン
window.addEventListener("scroll", function(){
    const demoScrollTop = document.getElementById("demoScrollTop");
    if(window.scrollY > 1500){
        demoScrollTop.style.bottom = "20px";
    }else{
        demoScrollTop.style.bottom = "-45px";
    }   
});







