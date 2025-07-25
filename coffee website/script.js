
  const toggle = document.getElementById('menu-toggle');
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Toggle icon
    if (menuIcon.classList.contains('fa-bars')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    });
  });

  //contact form
function Contact(){
let name=document.getElementById("name");
let email=document.getElementById("email");
let textarea=document.getElementById("text");
var errors=[];
if(name===""){
  errors.push("please enter your name");
}
if(email===""){
errors.push("please enter email");
}
else if (!email.includes("@") || !email.includes(".")) {
    errors.push("Please enter a valid email address");
  }
  if(textarea===""){
    errors.push("please enter text");
  }
  if (errors.length > 0) {
    alert(errors.join("\n")); 
    return false; 
  }
 window.location.href = "index.html"; 
  return false; 
}

//buy button
  document.addEventListener("DOMContentLoaded", function () {
      const buyBtns = document.querySelectorAll(".buy-btn");
      const modal = document.getElementById("buyNowModal");
      const modalImage = document.getElementById("modalImage");
      const modalTitle = document.getElementById("modalTitle");
      const modalDescription = document.getElementById("modalDescription");
      const modalPrice = document.getElementById("modalPrice");
      const modalTotal = document.getElementById("modalTotal");
      const quantityInput = document.getElementById("quantity");
      const closeBtn = document.querySelector(".close-btn");
      const confirmOrderBtn = document.getElementById("confirmOrderBtn");
      const toast = document.getElementById("toast");

      buyBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const item = btn.closest(".menu-item");
          const name = item.querySelector(".name")?.innerText || "";
          const desc = item.querySelector(".text")?.innerText || "";
          const imgSrc = item.querySelector(".menu-image")?.src || "";
          const priceText = item.querySelector(".price")?.innerText || "₹0";
          const price = parseInt(priceText.replace(/[^0-9]/g, "")) || 0;

          modalImage.src = imgSrc;
          modalTitle.innerText = name;
          modalDescription.innerText = desc;
          modalPrice.innerText = `₹${price}`;
          modalTotal.innerText = `₹${price}`;
          quantityInput.value = 1;
          quantityInput.dataset.price = price;

          modal.style.display = "block";
        });
      });

      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });

      quantityInput.addEventListener("input", () => {
        const price = parseInt(quantityInput.dataset.price);
        const qty = parseInt(quantityInput.value) || 1;
        modalTotal.innerText = `₹${price * qty}`;
      });

      const cartBtns = document.querySelectorAll(".cart-btn");
      cartBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          toast.innerText = "Added to Cart!";
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 3000);
        });
      });

      confirmOrderBtn.addEventListener("click", () => {
        modal.style.display = "none";
        toast.innerText = "Order Confirmed!";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
      });
    });

//swiper section
const swiper = new Swiper('.slider-wrapper.swiper', {
  loop: true,
  spaceBetween:25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
