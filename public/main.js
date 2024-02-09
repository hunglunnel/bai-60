const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
(function () {
  let mobileNav = document.getElementById("mobile-nav-content");
  let btnOpenNav = document.getElementById("open-nav");

  let btnNext = document.getElementById("btn-next");
  let btnPrev = document.getElementById("btn-prev");
  let slideContainer = document.getElementById("slide-container");

  let min = 3;
  let itemWidth =
    document.querySelectorAll(".project-item")[0].offsetWidth + 40;
  let max = document.querySelectorAll(".project-item").length;

  const getMin = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 939) {
      min = 2;
    }
    if (windowWidth <= 657) {
      min = 1;
    }
    if (windowWidth > 1660) {
      min = 3;
    }
  };

  getMin();
  let actived = min;
  document.body.addEventListener("click", (e) => {
    if (
      mobileNav.classList.contains("mobile-nav-display") &&
      !mobileNav.contains(e.target) &&
      !btnOpenNav.contains(e.target)
    ) {
      mobileNav.classList.remove("mobile-nav-display");
    }
  });

  btnOpenNav.addEventListener("click", (e) => {
    mobileNav.classList.toggle("mobile-nav-display");
  });

  btnNext.addEventListener("click", (e) => {
    getMin();
    if (actived + 1 <= max) {
      actived += 1;
      slideContainer.style.marginLeft = -(itemWidth * (actived - min)) + "px";
    } else {
      actived = min;
      slideContainer.style.marginLeft = 0;
    }
  });

  btnPrev.addEventListener("click", (e) => {
    getMin();
    if (actived - 1 >= 3) {
      actived -= 1;
      slideContainer.style.marginLeft = -(itemWidth * (actived - min)) + "px";
    } else {
      actived = max;
      slideContainer.style.marginLeft = -(itemWidth * (max - min)) + "px";
    }
  });

  const myForm = document.getElementById("contact-form");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailVal = document.getElementById("txt-email").value;

    if (!validateEmail(emailVal)) {
      alert("Email format invalid");
    } else {
      alert("Send success");
      document.getElementById("txt-email").value = "";
    }
  });
})();

const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll(".nav-link");

  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};

const spyScrolling = () => {
  const sections = document.querySelectorAll(".hero-bg");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href*=${id}]`)
          .parentNode.classList.add("active");
      }
  };
};

makeNavLinksSmooth();
spyScrolling();
