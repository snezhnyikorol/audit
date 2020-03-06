
let $root = $('html, body');
$('a[href^="#"]').click(function () {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});


let myRange = document.querySelector('#myRange');
let myValue = document.querySelector('#myValue');
let off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
let px =  ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

myValue.parentElement.style.left = px + 'px';
// myValue.parentElement.style.top = myRange.offsetHeight + 40 + 'px';
myValue.innerHTML = myRange.value;

myRange.oninput =function(){
  let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2);
  myValue.innerHTML = myRange.value;
  myValue.parentElement.style.left = px + 'px';
};

$('[name="phone"]').mask("+375 (99) 999-99-99");
$('[name="phone"]').attr('placeholder', '+375 (__) ___-__-__');