const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Updating Nav items

let anchorTags = document.querySelectorAll("nav a")
for(let i = 0; i < anchorTags.length; i++) {
  anchorTags[i].textContent = `${siteContent.nav['nav-item-' + (i + 1)]}`;
}

anchorTags.forEach(element => {
  element.style.color = "green"
})

let nav = document.querySelector("nav")


let newTag = document.createElement("a")
newTag.textContent = "Bruh"
newTag.style.color = "green"


let anotherTag = document.createElement("a")
anotherTag.textContent = "Click here!"
anotherTag.style.color = "green"


nav.prepend(newTag)
nav.appendChild(anotherTag)




//Adding H1
let mainTitle = document.querySelector("h1")

mainTitle.innerHTML = "DOM <br />IS <br /> AWESOME"

// let newH1 = document.createElement('h1')
// newH1.textContent = "IS"

// let anotherH1 = document.createElement('h1')
// anotherH1.textContent = "AWESOME"

// mainTitle.appendChild(newH1);
// newH1.appendChild(anotherH1);

//Adding Button text
let buttonText = document.querySelector("button");
buttonText.textContent = siteContent.cta.button

//Adding snippet img
let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);

//Adding titles to middle content
let textTitle = document.querySelectorAll(".text-content h4")
console.log(textTitle);

textTitle[0].textContent = siteContent["main-content"]["features-h4"]
textTitle[1].textContent = siteContent["main-content"]["about-h4"]
textTitle[2].textContent = siteContent["main-content"]["services-h4"]
textTitle[3].textContent = siteContent["main-content"]["product-h4"]
textTitle[4].textContent = siteContent["main-content"]["vision-h4"]

//Adding P's to middle content
let textItems = document.querySelectorAll(".main-content p")
console.log(textItems)

textItems[0].textContent = siteContent["main-content"]["features-content"]
textItems[1].textContent = siteContent["main-content"]["about-content"]
textItems[2].textContent = siteContent["main-content"]["services-content"]
textItems[3].textContent = siteContent["main-content"]["product-content"]
textItems[4].textContent = siteContent["main-content"]["vision-content"]

//Adding middle img
let accrossScreen = document.getElementById("middle-img")
accrossScreen.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Adding contact info
let contactTitle = document.querySelector(".contact h4")
contactTitle.textContent = siteContent["contact"]["contact-h4"]

let contactInfo = document.querySelectorAll(".contact p")
contactInfo[0].innerHTML = '123 Way 456 Street <br />Somewhere, USA'
contactInfo[1].textContent = siteContent["contact"]["phone"]
contactInfo[2].textContent = siteContent["contact"]["email"]

//Adding footer
let footer = document.querySelector("footer p")
footer.textContent = siteContent["footer"]["copyright"]