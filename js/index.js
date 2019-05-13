const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM<br> is<br> awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street<br> Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Update cta img src
let callToAction = document.getElementById("cta-img");
callToAction.src = siteContent["cta"]["img-src"];

// Create an array of values in siteContent > nav
const navValues = Object.values(siteContent.nav);

// Loop through aTags and apply correct text content using navValues array
const aTags = document.querySelectorAll("nav a");
aTags.forEach((el, index) => (el.textContent = navValues[index]));
aTags.forEach(el => (el.style.color = "green"));

// Change text in cta header
const ctaHeader = document.querySelector("section div h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"];
ctaHeader.style.color = "black";

// Add text to cta button
const ctaBtn = document.querySelector("section div button");
ctaBtn.textContent = siteContent["cta"]["button"];

// Update the img src for header img
const headerImg = document.getElementById("middle-img");
headerImg.src = siteContent["main-content"]["middle-img-src"];

// Set all text content to color black
const textContent = document.querySelectorAll(".text-content");
textContent.forEach(el => (el.style.color = "black"));

// Selecting all h4 elements and setting their text content
const h4Text = document.querySelectorAll("h4");
h4Text[0].textContent = siteContent["main-content"]["features-h4"];
h4Text[1].textContent = siteContent["main-content"]["about-h4"];
h4Text[2].textContent = siteContent["main-content"]["services-h4"];
h4Text[3].textContent = siteContent["main-content"]["product-h4"];
h4Text[4].textContent = siteContent["main-content"]["vision-h4"];
h4Text[5].textContent = siteContent["contact"]["contact-h4"];

// Selecting all main content p tags and setting text content
const pText = document.querySelectorAll(".text-content p");
pText[0].textContent = siteContent["main-content"]["features-content"];
pText[1].textContent = siteContent["main-content"]["about-content"];
pText[2].textContent = siteContent["main-content"]["services-content"];
pText[3].textContent = siteContent["main-content"]["product-content"];
pText[4].textContent = siteContent["main-content"]["vision-content"];

// Selecting contact p tags and setting text content
const contactText = document.querySelectorAll(".contact p");
contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].innerHTML = siteContent["contact"]["phone"];
contactText[2].innerHTML = siteContent["contact"]["email"];

// Selecting footer p tag and setting text content
const footerText = document.querySelector("footer p");
footerText.innerHTML = siteContent["footer"]["copyright"];
