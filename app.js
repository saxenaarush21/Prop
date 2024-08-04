const yes = document.getElementById("yes");
const no = document.getElementById("no");

const moving_screen = document.getElementById("main");

const btn_wdth = no.offsetWidth;
const btn_hgth = no.offsetHeight;
const main_wdth = moving_screen.offsetWidth;
const main_hgth = moving_screen.offsetHeight;

let counter = 0;

const head = document.getElementById("head")
const gif = document.getElementById("gif")

no.addEventListener('click', function(){
    counter++
    if(counter>=3){
        const rndX = Math.floor(Math.random() * (main_wdth - btn_wdth + 1) + btn_wdth)
        const rndY = Math.floor(Math.random() * (main_hgth - btn_hgth + 1) + btn_hgth)

        no.style.right = `${rndX}px`;
        no.style.bottom = `${rndY}px`;
    } else if(counter==1){
        head.innerHTML = "Soch Le!!";
        gif.src = "GIFs/gif2.gif";
    } else if (counter>=2){
        head.innerHTML = "Man Ja Na";
        gif.src = "GIFs/gif3.gif";
    };
    console.log(counter)
});

yes.addEventListener('click', function(){
    counter = 0;

    no.style.right = "20%";
    no.style.bottom = "0";

    head.innerHTML = "Mujhe Pta Tha";

    gif.src = "GIFs/gif4.gif";
})