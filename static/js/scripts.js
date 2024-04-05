document.querySelectorAll('.therapy-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.therapy-content').forEach(content => {
            content.classList.add('d-none');
        });
        document.querySelector(this.getAttribute('data-bs-target')).classList.remove('d-none');
    });
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["вільним", "в гармонії", "зрілим","собою","спокійним ","впевненим","в здорових стосунках","реалізованим","у прийнятті","відповідальним"]; // Add more words as needed
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between words
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


function copyToClipboard() {
  var copyText = document.getElementById("helpText");
  var successMessage = document.getElementById("copySuccess");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  // Show the success message
  successMessage.style.display = "block";
  successMessage.style.opacity = "1";

  // Fade out the success message after 2 seconds
  setTimeout(function() {
      var fadeEffect = setInterval(function () {
          if (!successMessage.style.opacity) {
              successMessage.style.opacity = "1";
          }
          if (successMessage.style.opacity > "0") {
              successMessage.style.opacity -= "0.1";
          } else {
              clearInterval(fadeEffect);
              successMessage.style.display = "none";
          }
      }, 100);
  }, 2000);
}


var myMockupSwiper = new Swiper('.myMockupSwiper', {
  loop: true,
  effect: 'fade', // Use the fade effect for smoother transitions
  fadeEffect: {
      crossFade: true
  },
  speed: 600, // Adjust the speed of the fade effect
  pagination: {
      el: '.swiper-phone-pagination',
  },

  on: {
    slideChange: function () {
        var activeSlide = this.slides[this.activeIndex];
        var title = activeSlide.getAttribute('data-title');
        var description = activeSlide.getAttribute('data-description');

        document.getElementById('infoTitle').textContent = title;
        document.getElementById('infoDescription').textContent = description;
    }
}
});


document.querySelectorAll('.myMockupSwiper .swiper-slide img').forEach(item => {
  item.addEventListener('click', event => {
    const imageSrc = event.currentTarget.src; // Get the src of the clicked image
    const modalImage = document.getElementById('modalImage'); // Get the modal image element
    modalImage.src = imageSrc; // Set the modal image src to the clicked image src
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal')); // Initialize the modal
    imageModal.show(); // Show the modal
  });
});