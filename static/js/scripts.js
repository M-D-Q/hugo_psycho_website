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




if (typeof currentPage !== 'undefined' && currentPage === 'index') {
  // Your index page-specific JavaScript here


  document.addEventListener("DOMContentLoaded", function() {
    // Initialize the Swiper
    const swiper = new Swiper('#intro .featured-swiper', { // Ensure swiper is targeted within the #intro section
        loop: true,
        grabCursor: true,
        effect: "cards",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function() {
                equalizeSwiperSlidesHeight('#intro .featured-swiper'); // Adjust the function call to target the intro section specifically
            },
            resize: function() {
                equalizeSwiperSlidesHeight('#intro .featured-swiper');
            },
            slideChangeTransitionEnd: function() {
                equalizeSwiperSlidesHeight('#intro .featured-swiper');
            }
        }
    });

    // Function to equalize slide heights
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
            // Additionally, set the height of the content within the slides if necessary
            var contents = slide.querySelectorAll('.feat-content'); // Check for .feat-content within each slide
            contents.forEach(function(content) {
                content.style.height = maxHeight + 'px'; // This ensures that the content div also matches the slide height
            });
        });
    }

    window.addEventListener('resize', function() {
        equalizeSwiperSlidesHeight('#intro .featured-swiper');
    });
});


    //ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

document.querySelectorAll('.therapy-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.therapy-content').forEach(content => {
            content.classList.add('d-none');
        });
        document.querySelector(this.getAttribute('data-bs-target')).classList.remove('d-none');
    });
});

// Define the text arrays for each language
const textArrays = {
  "ua": ["вільним", "в гармонії", "зрілим", "собою", "спокійним", "впевненим", "в здорових стосунках", "реалізованим", "у прийнятті", "відповідальним"],
  "fr": ["être brave", "ne pas accumuler les regrets", "être content de se lever le matin", "souhaiter le meilleur pour soi-même", "être dur à déstabiliser", "connaitre et croire en ses qualités", "entretenir des relations saines", "être apte à être responsable"]
};

// Utility function to determine the current language from the URL
function getLanguage() {
  const path = window.location.pathname;
  if (path.includes("fr")) return "fr";
  return "ua"; // Default to Ukrainian
}

// Get elements from the DOM
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

// Set typing speeds
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between words

// Initialize typing state variables
let textArrayIndex = 0;
let charIndex = 0;

// Typing effect functions
function type() {
  const textArray = textArrays[getLanguage()]; // Get text array based on current language
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
  const textArray = textArrays[getLanguage()]; // Get text array based on current language
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

// Initialize typing effect when the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  if(textArrays[getLanguage()].length) setTimeout(type, newTextDelay + 250);
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
    spaceBetween: 25, // Space between slides
    pagination: {
        el: '.swiper-posts-pagination',
        clickable: true,
    },
    
    // Using Coverflow effect
    effect: 'coverflow',
    coverflowEffect: {
        
        rotate: 13, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 3, // Depth offset in px (slides translate in Z axis)
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
  var swipers = [
    { 
      selector: '.swiper-issues', 
      pagination: '.swiper-issues-pagination',
      initialSlide: 1 
    },
    { 
      selector: '.swiper-issues1', 
      pagination: '.swiper-issues-pagination1', 
      initialSlide: 1 
    },
    { 
      selector: '.swiper-issues2', 
      pagination: '.swiper-issues-pagination2', 
      initialSlide: 1 
    }
  ];

  swipers.forEach(function(swiperConfig) {
    var swiperInstance = new Swiper(swiperConfig.selector, {
      loop: true,
      init: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      pagination: {
        el: swiperConfig.pagination,
        clickable: true,
      },
      spaceBetween: 0,
    });

    // Simulate interaction to move to the initialSlide
    swiperInstance.slideTo(swiperConfig.initialSlide, 0, false);
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