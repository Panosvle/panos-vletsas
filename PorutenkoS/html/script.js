let offset=0; //shift from left side
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){ 
offset = offset + 402;
if (offset > 1608){
    offset = 0;
}
sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 402;
    if (offset < 0){
        offset = 1608;
    }
    sliderLine.style.left = -offset + 'px';
    });