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

document.addEventListener('DOMContentLoaded', () => {
  // ===== Hero Scroll Zoom =====
  const bg = document.querySelector('.hero-bg');
  if (bg) {
    let ticking = false;
    const zoomFactor = 0.0025; // Adjust zoom intensity

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          if (window.innerWidth >= 768) {
            bg.style.transform = `scale(${1 + scrollPos * zoomFactor})`;
          } else {
            bg.style.transform = 'scale(1)';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ===== Spatial Audio Slides Fade-In =====
  const spatialSlides = document.querySelectorAll('.spatial-slide');
  if (spatialSlides.length > 0) {
    const spatialObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.3 });

    spatialSlides.forEach(slide => spatialObserver.observe(slide));
  }

  // ===== High Definition Calls Slides Fade-In =====
  const callSlides = document.querySelectorAll('.call-slide');
  if (callSlides.length > 0) {
    const callObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.3 });

    callSlides.forEach(slide => callObserver.observe(slide));
  }

  // ===== Entertainment Content Fade-In =====
  const entertainmentContent = document.querySelector('.entertainment-content');
  if (entertainmentContent) {
    let tickingContent = false;

    window.addEventListener('scroll', () => {
      if (!tickingContent) {
        window.requestAnimationFrame(() => {
          const sectionTop = entertainmentContent.getBoundingClientRect().top;
          const triggerPoint = window.innerHeight * 0.8;
          if (sectionTop < triggerPoint) {
            entertainmentContent.classList.add('visible');
          }
          tickingContent = false;
        });
        tickingContent = true;
      }
    });
  }

  // ===== Specs Popup =====
  const specsBtn = document.querySelector('.specs-btn');
  const specsPopup = document.querySelector('.specs-popup');
  const closePopup = document.querySelector('.close-popup');

  if (specsBtn && specsPopup && closePopup) {
    specsBtn.addEventListener('click', () => {
      specsPopup.classList.add('active');
    });

    closePopup.addEventListener('click', () => {
      specsPopup.classList.remove('active');
    });

    // Close popup if clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === specsPopup) {
        specsPopup.classList.remove('active');
      }
    });
  }
});
