document.addEventListener("DOMContentLoaded", function() {

  var all_li = document.querySelectorAll('nav>ul>li');
  for (i = 0; i < all_li.length; i++) {
    all_li[i].addEventListener('mouseover', function() {
      var sec_list = this.querySelectorAll("ul>li");
      if (sec_list.length > 0) {
        this.firstElementChild.style.display = "block";
      }


    })
  }
  for (i = 0; i < all_li.length; i++) {
    all_li[i].addEventListener('mouseout', function() {

      var sec_list = this.querySelectorAll("ul>li");
      if (sec_list.length > 0) {
        this.firstElementChild.style.display = "none";
      }

    })
  }

  var next = document.getElementById('nextPicture');
  var prev = document.getElementById('prevPicture');
  var list = document.querySelectorAll('li.pic');
  var picture = 0;

  console.log(next, prev, list);
  console.log(list[0]);

  list[picture].classList.add("visible");

  next.addEventListener("click", function() {
    console.log("działa");
    list[picture].classList.remove("visible");
    picture++;
    console.log(picture);
    if (picture >= list.length) {
      console.log('blokada');
      picture = list.length - 1;
    }
    list[picture].classList.add("visible");
  });
  prev.addEventListener("click", function() {
    console.log("działa");
    list[picture].classList.remove("visible");
    picture--;
    console.log(picture);
    if (picture < 0) {
      console.log('blokada');
      picture = 0;
    }
    list[picture].classList.add("visible");
  })

var box1 = document.querySelector('.box1');
console.log(box1);
var box2 = document.querySelector('.box2');
console.log(box2);
var description = document.querySelectorAll(".description");
console.log(description);

box1.addEventListener("mouseover",function(){
  description[0].style.visibility = "hidden";
})
box1.addEventListener("mouseout",function(){
  description[0].style.visibility = "visible";
})
box2.addEventListener("mouseover",function(){
  description[1].style.visibility = "hidden";
})
box2.addEventListener("mouseout",function(){
  description[1].style.visibility = "visible";
})



})
