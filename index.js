let img_select1 = document.getElementsByClassName("img_select1");
let img_select2 = document.getElementsByClassName("img_select2");
let img_select3 = document.getElementsByClassName("img_select3");
let img1 = document.getElementsByClassName("img1");
let img2 = document.getElementsByClassName("img2");
let img3 = document.getElementsByClassName("img3");


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



