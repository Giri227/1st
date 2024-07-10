let attent = document.getElementsByClassName("attent")[0]
let present = document.getElementsByClassName("present-img")[0]
let presentText = document.getElementsByClassName("present-text")[0]
let frontContent = document.getElementById("front-content")
let after = document.getElementById("after-cont")
let imgSmile = document.getElementById("img-smile")
let verks = document.querySelectorAll(".verks")

function visibAttent() {
    attent.style.opacity = '0'
}

function presentEvent() {
    let counter = 3
    present.removeEventListener('mouseout', visibAttent)
    present.style.animation = 'none'
    present.style.cursor = 'not-allowed'
    present.removeEventListener('click', presentEvent)
    attent.textContent = counter
    setInterval(() => {
        --counter
        attent.textContent = counter
    },1000)
    setTimeout(() => {
        visibAttent()
        present.setAttribute('src', 'img/boom.png')
    },3000)
    setTimeout(() => {
        present.classList.add('full')
        present.style.cursor = 'default'
    },3200)
    setTimeout(() => {
        frontContent.style.display = 'none'
        after.style.display = 'flex'
    },3600)
}

present.addEventListener('mouseover', () => {
    attent.style.opacity = '1'
})

present.addEventListener('mouseout', visibAttent)

present.addEventListener('click', presentEvent)

setInterval(() => {
    imgSmile.setAttribute('src', 'img/smile-close.png')
    setTimeout(() => {
        imgSmile.setAttribute('src', 'img/smile.png')
    },1000)
},3000)

verks.forEach(elem => {
    setInterval(() => {
        elem.setAttribute('src', 'img/after-verks.png')
        elem.setAttribute('width', '300px')
        setTimeout(() => {
            elem.setAttribute('src', 'img/verks.png')
            elem.setAttribute('width', '200px')
        },500)
    },1000)
})
