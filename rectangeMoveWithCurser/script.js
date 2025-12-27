let page1 = document.querySelector("#page1")

page1.addEventListener("mousemove", function (details) {
    let rectBox = document.querySelector("#recta")
    let sVal = gsap.utils.mapRange(0, window.innerWidth,
        100 + rectBox.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rectBox.getBoundingClientRect().width / 2),
        details.clientX)
    gsap.to('#recta', {
        left: sVal + 'px',
        ease: Power3,
    })
})

page1.addEventListener("mousemove", function (details) {
    let rectBox = document.querySelector("#recta")
    let sVal = gsap.utils.mapRange(0, window.innerHeight,
        100 + rectBox.getBoundingClientRect().height / 2,
        window.innerHeight - (100 + rectBox.getBoundingClientRect().height / 2),
        details.clientY)
    gsap.to('#recta', {
        top: sVal + 'px',
        ease: Power3,
    })
})


let center = document.querySelector('#center')

center.addEventListener("mousemove", function(details){
    let rectangleLocation = center.getBoundingClientRect()
    let insideRectVal = details.clientX - rectangleLocation.left

    if(insideRectVal<rectangleLocation.width/2){
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectVal)
        gsap.to(center, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        })
    }else{
        let redColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectVal)
        gsap.to(center, {
            backgroundColor: `rgb(0, 0, ${redColor})`,
            ease: Power4
        })
    }
})

center.addEventListener('mouseleave', function(){
    gsap.to(center,{
        backgroundColor: 'white'
    })
})



const centerImage = document.querySelector('#centerImage')
const centerDiv = document.querySelector('#centerDiv')
const images = [
  'https://i.pinimg.com/736x/a0/83/54/a08354496a594e7e1a0a3f2230755cae.jpg',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
]

const getRandomImage = () => {
  const index = Math.floor(Math.random() * images.length)
  return images[index]
}

const throttleFunction = (func, delay)=>{
    let prev =0;
    return (...args)=> {
        let now = new Date().getTime();
        if(now-prev>delay){
            prev = now;
            return func(...args);
        }
    }
}

centerDiv.addEventListener('mousemove', throttleFunction((dets)=>{
    let div = document.createElement('div')
    div.classList.add('imageDiv');
    div.style.left = dets.clientX+'px';
    div.style.top = dets.clientY+'px';
    let image = document.createElement('img');
    image.src = getRandomImage()
    div.appendChild(image)
    centerImage.appendChild(div)

    gsap.to(image, {
        y:'0',
        ease: Power1,
        duration: 0.6
    })

      gsap.to(image, {
        y:'100%',
        ease: Power2,
        delay: 0.6,
         duration: 0.6,
    })
    setTimeout(()=>{
        div.remove()
    }, 1000)
}, 400));