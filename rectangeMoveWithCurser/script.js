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