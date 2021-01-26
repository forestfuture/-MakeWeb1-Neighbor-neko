document.querySelector(".img_select1-1").onclick = function(){
    document.querySelector(".img1-1").classList.remove("d-none");
    document.querySelector(".img1-2").classList.add("d-none");
    document.querySelector(".img1-3").classList.add("d-none");
    document.querySelector(".img_select1-1").classList.add("img_border");
    document.querySelector(".img_select1-2").classList.remove("img_border");
    document.querySelector(".img_select1-3").classList.remove("img_border");
};
document.querySelector(".img_select1-2").onclick = function(){
    document.querySelector(".img1-1").classList.add("d-none");
    document.querySelector(".img1-2").classList.remove("d-none");
    document.querySelector(".img1-3").classList.add("d-none");
    document.querySelector(".img_select1-1").classList.remove("img_border");
    document.querySelector(".img_select1-2").classList.add("img_border");
    document.querySelector(".img_select1-3").classList.remove("img_border");
};
document.querySelector(".img_select1-3").onclick = function(){
    document.querySelector(".img1-1").classList.add("d-none");
    document.querySelector(".img1-2").classList.add("d-none");
    document.querySelector(".img1-3").classList.remove("d-none");
    document.querySelector(".img_select1-1").classList.remove("img_border");
    document.querySelector(".img_select1-2").classList.remove("img_border");
    document.querySelector(".img_select1-3").classList.add("img_border");
};

document.querySelector(".img_select2-1").onclick = function(){
    document.querySelector(".img2-1").classList.remove("d-none");
    document.querySelector(".img2-2").classList.add("d-none");
    document.querySelector(".img_select2-1").classList.add("img_border");
    document.querySelector(".img_select2-2").classList.remove("img_border");

};
document.querySelector(".img_select2-2").onclick = function(){
    document.querySelector(".img2-1").classList.add("d-none");
    document.querySelector(".img2-2").classList.remove("d-none");
    document.querySelector(".img_select2-1").classList.remove("img_border");
    document.querySelector(".img_select2-2").classList.add("img_border");
};

document.querySelector(".img_select3-1").onclick = function(){
    document.querySelector(".img3-1").classList.remove("d-none");
    document.querySelector(".img3-2").classList.add("d-none");
    document.querySelector(".img3-3").classList.add("d-none");
    document.querySelector(".img_select3-1").classList.add("img_border");
    document.querySelector(".img_select3-2").classList.remove("img_border");
    document.querySelector(".img_select3-3").classList.remove("img_border");
};
document.querySelector(".img_select3-2").onclick = function(){
    document.querySelector(".img3-1").classList.add("d-none");
    document.querySelector(".img3-2").classList.remove("d-none");
    document.querySelector(".img3-3").classList.add("d-none");
    document.querySelector(".img_select3-1").classList.remove("img_border");
    document.querySelector(".img_select3-2").classList.add("img_border");
    document.querySelector(".img_select3-3").classList.remove("img_border");
};
document.querySelector(".img_select3-3").onclick = function(){
    document.querySelector(".img3-1").classList.add("d-none");
    document.querySelector(".img3-2").classList.add("d-none");
    document.querySelector(".img3-3").classList.remove("d-none");
    document.querySelector(".img_select3-1").classList.remove("img_border");
    document.querySelector(".img_select3-2").classList.remove("img_border");
    document.querySelector(".img_select3-3").classList.add("img_border");
};