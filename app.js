// mouseover megamenu 
var modalbox = document.querySelector('#modal-box')
var modal = document.querySelector('#modal')
var input = document.querySelector('#input-search input')
var header = document.querySelector('header')
var bottommenu = document.querySelector('#bottom-menu')

var logomenu = document.querySelector('#logo-icon')

logomenu.addEventListener('mouseover', function () {
    modal.classList.remove('hidden')
})

logomenu.addEventListener('mouseout', function () {
    modal.classList.add('hidden')
})

//modal focus input
input.addEventListener('focus', function (event) {
    modalbox.classList.remove('hidden')
    modal.classList.remove('hidden')
    event.stopPropagation()
    input.style.borderRadius = '2px 0 0 0px'
    bottommenu.style.display = 'none'
})
input.addEventListener('click', function (event) {
    modalbox.classList.remove('hidden')
    modal.classList.remove('hidden')
    event.stopPropagation()

})
modal.addEventListener('click', function () {
    modalbox.classList.add('hidden')
    modal.classList.add('hidden')
    bottommenu.style.display = 'block'
})
header.addEventListener('click', function () {
    modalbox.classList.add('hidden')
    modal.classList.add('hidden')
    bottommenu.style.display = 'block'
})
modalbox.addEventListener('click', function (event) {
    event.stopPropagation()
})



// delete search history
var imgx = document.querySelectorAll('#search-history a > div > img')
imgx.forEach(img => {
    img.addEventListener('click', function () {
        var idImage = img.getAttribute('id')
        var targetlinksearch = document.querySelector('[target=' + idImage + ']')
        targetlinksearch.style.display = 'none'
    })
})

// scroll to top

var scrollbtn = document.querySelector('#scroll');
scrollbtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollbtn.style.display = "block";
    } else {
        scrollbtn.style.display = "none";
    }
})

