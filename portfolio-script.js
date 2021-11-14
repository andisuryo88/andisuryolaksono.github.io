$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 20) {
      $(".navbar").addClass("stay");
    } else {
      $(".navbar").removeClass("stay");
    }
  });

  $(".menu-bar").click(() => {
    $(".navbar .menu").toggleClass("appear");
    $(".menu-bar i").toggleClass("appear");
  });

  let typing = new Typed(".type", {
    strings: ["Hello There!", "Welcome!", "Nice to see you :)", "Have a nice day!"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
  });
});
