// let page1 = document.querySelector("#page1")

// page1.addEventListener("mousemove", function (details) {
//     let rectBox = document.querySelector("#recta")
//     let sVal = gsap.utils.mapRange(0, window.innerWidth,
//         100 + rectBox.getBoundingClientRect().width / 2,
//         window.innerWidth - (100 + rectBox.getBoundingClientRect().width / 2),
//         details.clientX)
//     gsap.to('#recta', {
//         left: sVal + 'px',
//         ease: Power3,
//     })
// })

// page1.addEventListener("mousemove", function (details) {
//     let rectBox = document.querySelector("#recta")
//     let sVal = gsap.utils.mapRange(0, window.innerHeight,
//         100 + rectBox.getBoundingClientRect().height / 2,
//         window.innerHeight - (100 + rectBox.getBoundingClientRect().height / 2),
//         details.clientY)
//     gsap.to('#recta', {
//         top: sVal + 'px',
//         ease: Power3,
//     })
// })


// let center = document.querySelector('#center')

// center.addEventListener("mousemove", function(details){
//     let rectangleLocation = center.getBoundingClientRect()
//     let insideRectVal = details.clientX - rectangleLocation.left

//     if(insideRectVal<rectangleLocation.width/2){
//         let redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectVal)
//         gsap.to(center, {
//             backgroundColor: `rgb(${redColor}, 0, 0)`,
//             ease: Power4
//         })
//     }else{
//         let redColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectVal)
//         gsap.to(center, {
//             backgroundColor: `rgb(0, 0, ${redColor})`,
//             ease: Power4
//         })
//     }
// })

// center.addEventListener('mouseleave', function(){
//     gsap.to(center,{
//         backgroundColor: 'white'
//     })
// })



const centerImage = document.querySelector('#centerImage')
const centerDiv = document.querySelector('#centerDiv')
// const btn = document.querySelector('#throttle');
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
    image.getAttribute('src', 'https://i.pinimg.com/736x/a0/83/54/a08354496a594e7e1a0a3f2230755cae.jpg');
    div.appendChild(image)
    centerImage.appendChild(div)
    setTimeout(()=>{
        div.remove()
    }, 1000)
}, 400));