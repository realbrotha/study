let box = document.querySelectorAll('.box');

box.forEach( function (box, index) {
   console.log("this : " +box.textContent);

   box.textContent = "?????????";

});
let test = "hehe".split('').reverse().join();
console.log(test);
