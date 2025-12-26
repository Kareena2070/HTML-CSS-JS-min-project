let body = document.querySelector("body")

body.addEventListener("mousemove", function (details) {
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

body.addEventListener("mousemove", function (details) {
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