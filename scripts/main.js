console.log("scripts loaded");

document.addEventListener('DOMContentLoaded', () => {
  setBodyBgVar();
  const questions = document.querySelectorAll('.question-item');

  questions.forEach(question => {
    const plus = question.querySelector('.toggle-asset.plus');
    const minus = question.querySelector('.toggle-asset.minus');
    question.addEventListener('toggle', (e) => {
      if (question.open) {
        plus.classList.add('hidden');
        minus.classList.remove('hidden');
      } else {
        minus.classList.add('hidden');
        plus.classList.remove('hidden');
      }
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    const sticky = document.querySelector('.splash-topbar.sticky');
    if (!entries[0].isIntersecting) {
      sticky.classList.remove('hidden')
    }
    else {
      sticky.classList.add('hidden')

    }
});

  observer.observe(document.querySelector(".splash"))

});


function setBodyBgVar () {
  const options = [
    "var(--bright-green_lightest)",
    "var(--teal_lightest)",
    "var(--blush_lightest)",
    "var(--yellow_lightest)"
  ];
  newBG = options[Math.floor(Math.random() * options.length)];
  document.documentElement.style.setProperty("--body_bg", newBG);
}
