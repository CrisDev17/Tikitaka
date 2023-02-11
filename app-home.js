// slider
var slides = document.querySelector('#slides');
var slides_img = document.querySelectorAll('#slides img');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var chooseimgs = document.querySelectorAll('#control a');
var slider = document.querySelector('#slider')
chooseimgs.forEach(chooseimg => {
    chooseimg.addEventListener('click', function (event) {
        event.preventDefault();
    })
})
var count = 0;
var size = slider.clientWidth;
slides.style.transform = 'translate(' + (-size * count) + 'px)';
function nextSlide() {
    if (count < slides_img.length - 1) {
        count++;
    }
    else {
        count = 0
    }
    slides.style.transform = 'translate(' + (-size * count) + 'px)';
    slides.style.transition = ' transform ease-in-out 0.5s';
}
function prevSlide() {
    if (count > 0) {
        count--;
    }
    else {
        count = slides_img.length - 1;
    }
    slides.style.transform = 'translate(' + -size * count + 'px)';
    slides.style.transition = ' transform ease-in-out 0.5s';
    console.log(count)
    console.log(slides)
}
next.addEventListener('click', () => {
    nextSlide()
})
prev.addEventListener('click', () => {
    prevSlide()
})
// setInterval(() => {
//     nextSlide()
// }, 5000)



// clock down
var hour = document.querySelector('#hour')
var minute = document.querySelector('#minute')
var second = document.querySelector('#second')
function time() {
    var s = Number(second.innerText);
    var m = Number(minute.innerText);
    var h = Number(hour.innerText);
    s--;
    if (s === -1) {
        m -= 1;
        s = 59;
    }
    if (m === -1) {
        h -= 1;
        m = 59;
    }
    if (h === -1) {
        alert('ket thuc')
        clearTimeout(myVar);
    }

    hour.innerHTML = h.toString();
    minute.innerHTML = m.toString();
    second.innerHTML = s.toString();
}
myVar = setInterval(() => {
    time()
}, 1000)






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



// modal ads
var modalads = document.querySelector('#modal-ads')
var btnClose = document.querySelector('#modal-ads #modal1 a i')
var modal1 = document.querySelector('#modal1')

window.onload = function () {
    setTimeout(function () {
        modalads.classList.remove('hidden1')
    }, 5000)
}
btnClose.onclick = function () {
    modalads.classList.add('hidden1')
}
modal1.onclick = function (event) {
    event.stopPropagation()
}

modalads.onclick = function () {
    modalads.classList.add('hidden1')
}



// event select box
var categorySelect = document.querySelector('#categorySelect')
categorySelect.addEventListener('change' , function(){
    var valueSelect = categorySelect.value;
    var targetCategory = document.querySelector('[target=' + valueSelect + ']')
    var divCategorys = document.querySelectorAll('#product-category > div')
    divCategorys.forEach( divCategory => {
        divCategory.style.display ='none'
    })
    targetCategory.style.display = 'block'
})
