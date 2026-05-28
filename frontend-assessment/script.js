const slides = [
    {
        name: "Fashion Store",
        title: "Modern Ecommerce Website",
        desc: "Build a stylish online fashion store with product listings, cart, and secure checkout."
    },

    {
        name: "Electronics Shop",
        title: "Tech Product Platform",
        desc: "Create a responsive ecommerce platform for gadgets, mobiles, laptops, and accessories."
    },

    {
        name: "Furniture Marketplace",
        title: "Home Decor Ecommerce",
        desc: "Design an elegant shopping experience for furniture and home decoration products."
    },

    {
        name: "Beauty & Skincare",
        title: "Cosmetics Online Store",
        desc: "Develop a clean and modern beauty products website with filtering and product reviews."
    },

    {
        name: "Sneaker Store",
        title: "Streetwear Ecommerce",
        desc: "Build a trendy sneaker shopping website with animations, offers, and fast checkout."
    }
];
const mainHeading = document.getElementById("main-heading");
const title = document.getElementById("title");
const description = document.getElementById("description");

const dotSection = document.querySelector(".dot-section");

let currentIndex = 0;


function showSlide(index){

    mainHeading.textContent = slides[index].name;
    title.textContent = slides[index].title;
    description.textContent = slides[index].desc;

    updateDots();
}



slides.forEach((_, index) => {

    const dot = document.createElement("div");

    dot.classList.add("dot");

    if(index === 0){
        dot.classList.add("active");
    }

    dotSection.appendChild(dot);

});



function updateDots(){

    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {

        dot.classList.remove("active");

        if(index === currentIndex){
            dot.classList.add("active");
        }

    });

}


document.getElementById("next").addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= slides.length){
        currentIndex = 0;
    }

    showSlide(currentIndex);

});


document.getElementById("prev").addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);

});


showSlide(currentIndex);

