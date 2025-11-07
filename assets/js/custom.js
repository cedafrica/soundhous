$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
	AOS.init({
		once: true,
	});

});

const slides = document.querySelectorAll(".banner-slide");
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 8500);
// Parallax Zoom Out
window.addEventListener("scroll", () => {
  const section = document.querySelector(".premium-sound-section");
  let offset = window.pageYOffset;
  section.style.backgroundSize = 100 + offset / 20 + "%";
});

// Fade-in on scroll
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

elements.forEach(el => observer.observe(el));

// Scroll Zoom Effect
document.addEventListener('DOMContentLoaded', function () {
  const bg = document.querySelector('.hero-bg');

  window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;
    const zoomFactor = 0.0025; // Increase for more dramatic zoom
    if (window.innerWidth >= 768) {
      bg.style.transform = `scale(${1 + scrollPos * zoomFactor})`;
    } else {
      bg.style.transform = 'scale(1)';
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.spatial-slide');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); // fade in
      } 
      // optional: remove fade when out of view
      // else entry.target.classList.remove('in-view');
    });
  }, { threshold: 0.3 }); // 30% of slide in viewport triggers

  slides.forEach(slide => observer.observe(slide));
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.call-slide');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); // fade in
      } 
      // optional: remove fade when out of view
      // else entry.target.classList.remove('in-view');
    });
  }, { threshold: 0.3 });

  slides.forEach(slide => observer.observe(slide));
});

// Fade in text when scrolling
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.entertainment-content');

  window.addEventListener('scroll', () => {
    const sectionTop = content.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8; // start fade when section is 80% in viewport

    if (sectionTop < triggerPoint) {
      content.classList.add('visible');
    }
  });
});
// Open and Close Specs Popup
document.addEventListener('DOMContentLoaded', () => {
  const specsBtn = document.querySelector('.specs-btn');
  const specsPopup = document.querySelector('.specs-popup');
  const closePopup = document.querySelector('.close-popup');
  const bookBtn = document.querySelector('.book-btn');

  // Open Popup
  if (specsBtn) {
    specsBtn.addEventListener('click', () => {
      specsPopup.classList.add('active');
    });
  }

  // Close Popup (X icon)
  if (closePopup) {
    closePopup.addEventListener('click', () => {
      specsPopup.classList.remove('active');
    });
  }

  // Close when clicking outside popup
  window.addEventListener('click', (e) => {
    if (e.target === specsPopup) {
      specsPopup.classList.remove('active');
    }
  });

  // Book a Listening Experience: Close popup + Smooth Scroll
  if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor jump
      specsPopup.classList.remove('active'); // Close modal

      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
