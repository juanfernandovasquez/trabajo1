let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".slide")

let contador = 1;
let width = sliderIndividual[0].clientWidth
let intervalo = 7000


window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth
})


setInterval(function(){
slides()
}, intervalo)

function slides(){
    slider.style.transform = "translate(" + (-width*contador) + "px)"
    slider.style.transition = "transform 1.7s"
    contador++

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)"
            slider.style.transition = "transform 0s"
            contador = 1
        },1400)
    }
}