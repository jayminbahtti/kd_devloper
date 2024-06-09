
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

// ------------------------------------------------

window.addEventListener('load', function () {
  var mobNav = document.getElementById('mobile-nav');
  mobNav.addEventListener('click', function () {
    this.classList.toggle('opened');
  }, false);
}, false);


// ----------------------

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("active");
}