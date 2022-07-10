$(document).click(function (e) {
  if (e.target.id != "success-outlined1") {
    document.getElementById("changeClass1").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined2") {
    document.getElementById("changeClass2").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined3") {
    document.getElementById("changeClass3").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined4") {
    document.getElementById("changeClass4").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined5") {
    document.getElementById("changeClass5").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined6") {
    document.getElementById("changeClass6").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined7") {
    document.getElementById("changeClass7").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined8") {
    document.getElementById("changeClass8").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined9") {
    document.getElementById("changeClass9").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

$(document).click(function (e) {
  if (e.target.id != "success-outlined10") {
    document.getElementById("changeClass10").classList.remove("customred");
    console.log(e.target.id);
  }
  console.log("outside if");
});

mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
