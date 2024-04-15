// header stick up

document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  const navbar = document.getElementById('customNavbar'); // Ensure this matches your navbar's ID

  window.addEventListener('scroll', function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // When at the top, make the navbar non-fixed
      if (currentScroll <= 0) {
          navbar.classList.remove('sticky');
      } else {
          navbar.classList.add('sticky');

          // Rest of your scroll logic...
          if (currentScroll > lastScrollTop) {
              navbar.style.top = '-100px'; // Adjust for your navbar's height
          } else {
              navbar.style.top = '0';
          }
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll position
  }, false);
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

if (typeof currentPage !== 'undefined' && currentPage === 'index') {
  // Your index page-specific JavaScript here


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




var myMockupSwiper = new Swiper('.myMockupSwiper', {
  loop: true,
  grabCursor: false,
  effect: 'fade', // Use the fade effect for smoother transitions
  fadeEffect: {
      crossFade: true
  },
  speed: 600, // Adjust the speed of the fade effect
  pagination: {
      el: '.swiper-phone-pagination',
      clickable: true, // Make sure this is set to enable clicking on pagination bullets

  },

  on: {
    slideChange: function () {
        var activeSlide = this.slides[this.activeIndex];
        var content = activeSlide.querySelector('.slide-content').innerHTML; // Get the HTML content

        var infoSection = document.getElementById('carouselInfo');
        infoSection.innerHTML = content; // Replace the inner HTML of the info section with the slide's content
    }
}
});

// Manually update the info section with the first slide's content
var initialContent = myMockupSwiper.slides[myMockupSwiper.activeIndex].querySelector('.slide-content').innerHTML;
document.getElementById('carouselInfo').innerHTML = initialContent;


document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('imageOverlay');
  const overlayImage = document.getElementById('overlayImage');
  const closeOverlay = document.getElementById('closeOverlay');

  // Adding click event to each image in the swiper
  document.querySelectorAll('.myMockupSwiper .swiper-slide img').forEach(item => {
    item.addEventListener('click', function() {
      overlayImage.src = this.src; // Set the clicked image source to the overlay image
      overlay.style.display = 'flex'; // Show the overlay
    });
  });

  // Closing the overlay by clicking the close icon
  closeOverlay.addEventListener('click', function() {
    overlay.style.display = 'none'; // Hide the overlay
  });

  // Closing the overlay by clicking anywhere on the overlay except the image
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay || event.target === closeOverlay) {
      overlay.style.display = 'none'; // Hide the overlay
    }
  });

  // Prevent closing when clicking on the image
  overlayImage.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop the click from bubbling up to the overlay
  });
});



var diplomaSwiper = new Swiper('.diplomaSwiper', {
  // Swiper configuration...
  loop: true,
  grabCursor: true,
    autoHeight: true, // Enable auto height feature

  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-100%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
      el: '.swiper-diploma-pagination',
      clickable: true,
  },
  on: {
      slideChange: function () {
          var activeSlide = this.slides[this.activeIndex];
          var content = activeSlide.querySelector('.slide-content').innerHTML;

          var detailsSection = document.getElementById('diplomaDetails');
          detailsSection.innerHTML = content;
      }
  }
});

// Update the diploma details for the initial slide
var initialContent = diplomaSwiper.slides[diplomaSwiper.activeIndex].querySelector('.slide-content').innerHTML;
document.getElementById('diplomaDetails').innerHTML = initialContent;

document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.diplomaSwiper .swiper-slide img');
  var overlay = document.getElementById('diplomaImageOverlay');
  var overlayImage = document.getElementById('diplomaOverlayImage');

  images.forEach(function(img) {
    img.addEventListener('click', function(event) {
      overlayImage.src = this.src; // Sets the source of the overlay image to the clicked image
      overlay.style.display = 'flex'; // Shows the overlay
      event.stopPropagation(); // Stops the click event from propagating to higher elements
    });
  });

  // Add event listener to overlay to close it when clicking anywhere on the overlay
  overlay.addEventListener('click', function() {
    this.style.display = 'none';
  });

  // Prevent overlay close when clicking on the image
  overlayImage.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click from closing the overlay
  });
});



// BLOG POSTS SWIPËR

var postsSwiper = new Swiper('.postsSwiper', {
  loop: true,
    slidesPerView: 1, // Default to 1 slide per view for mobile
    spaceBetween: 20, // Space between slides
    pagination: {
        el: '.swiper-posts-pagination',
        clickable: true,
    },
    
    // Using Coverflow effect
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 12, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 25, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multiplier
        slideShadows: false, // Enables shadows
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 3, // Show 3 slides per view on desktop
        },
    }
});



// Issues Swiper 1

document.addEventListener('DOMContentLoaded', function() {
  var issuesSwiper = new Swiper('.swiper-issues', {
      loop: false,
      init: true,

      centeredSlides: true,
      slidesPerView: 'auto', // or try 1.5, 2.5, etc., depending on the desired effect
      loopedSlides: 3, // Specify the number of slides to duplicate for looping
      loopAdditionalSlides: 2, // Additional slides to clone at the end
      pagination: {
          el: '.swiper-issues-pagination',
          clickable: true, // Makes the dots clickable
        },
      spaceBetween: 0,
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var issuesSwiper1 = new Swiper('.swiper-issues1', {
      loop: false,
      init: true,

      centeredSlides: true,
      slidesPerView: 'auto', // or try 1.5, 2.5, etc., depending on the desired effect
      loopedSlides: 3, // Specify the number of slides to duplicate for looping
      loopAdditionalSlides: 2, // Additional slides to clone at the end
      pagination: {
        el: '.swiper-issues-pagination1',
        clickable: true, // Makes the dots clickable
      },
      spaceBetween: 0,
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var issuesSwiper2 = new Swiper('.swiper-issues2', {
      loop: false,
      init: true,

      centeredSlides: true,
      slidesPerView: 'auto', // or try 1.5, 2.5, etc., depending on the desired effect
      loopedSlides: 3, // Specify the number of slides to duplicate for looping
      loopAdditionalSlides: 2, // Additional slides to clone at the end
      pagination: {
          el: '.swiper-issues-pagination2',
          clickable: true, // Makes the dots clickable
        },
      spaceBetween: 0,
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var mobileNavSelector = document.getElementById('mobile-nav-selector');
  
  mobileNavSelector.addEventListener('change', function() {
      var selectedTabId = this.value;
      new bootstrap.Tab(document.querySelector(`[data-bs-target="${selectedTabId}"]`)).show();
  });
});


function equalizeSwiperSlidesHeight(swiperSelector) {
  var maxHeight = 0;

  // Find the tallest slide
  document.querySelectorAll(swiperSelector + ' .swiper-slide').forEach(function(slide) {
      var slideHeight = slide.offsetHeight;
      maxHeight = Math.max(maxHeight, slideHeight);
  });

  // Set all slides to the height of the tallest slide
  document.querySelectorAll(swiperSelector + ' .swiper-slide').forEach(function(slide) {
      slide.style.height = maxHeight + 'px';

      // Additionally, set the height of the cards within the slides
      var cards = slide.querySelectorAll('.card');
      cards.forEach(function(card) {
          card.style.height = maxHeight + 'px';
      });
  });
}

// Run the function for your swiper container, adjust the selector as needed
// Consider running this function after Swiper initialization and on window resize
equalizeSwiperSlidesHeight('#issues-reforged .swiper-container');


function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

// Debounced resize function
var debouncedResize = debounce(function() {
    equalizeSwiperSlidesHeight('#issues-reforged .swiper-container');
}, 250);

window.addEventListener('resize', debouncedResize);




}


if (typeof currentPage !== 'undefined' && currentPage === 'article') {
  // Your index page-specific JavaScript here

  document.querySelectorAll('article img').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', event => {
        const imageSrc = event.currentTarget.src;
        const imageTitle = event.currentTarget.title;
        const imageDescription = event.currentTarget.alt;
  
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('imageModalLabel');
        const modalDescription = document.querySelector('.image-description');
  
        modalImage.src = imageSrc;
        modalTitle.textContent = imageTitle;
        modalDescription.textContent = imageDescription;
  
        const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
        imageModal.show();
    });
  });


  

}

if (typeof currentPage !== 'undefined' && currentPage === 'podcasts') {
  // Your index page-specific JavaScript here

  document.querySelectorAll('article img').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', event => {
        const imageSrc = event.currentTarget.src;
        const imageTitle = event.currentTarget.title;
        const imageDescription = event.currentTarget.alt;
  
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('imageModalLabel');
        const modalDescription = document.querySelector('.image-description');
  
        modalImage.src = imageSrc;
        modalTitle.textContent = imageTitle;
        modalDescription.textContent = imageDescription;
  
        const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
        imageModal.show();
    });
  });


  

}