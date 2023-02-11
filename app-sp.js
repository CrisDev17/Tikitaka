
// seemore

var btnseemore = document.querySelector('#seemore')
var btnafter = document.querySelector('#seemore div')
var divmore = document.querySelector('.anbot')
var spandiv = document.querySelector('#seemore span')
btnseemore.addEventListener('click', function (event) {
    event.preventDefault();
    if (divmore.style.display === 'none') {
        spandiv.innerHTML = 'Thu gọn'
        btnafter.style.transform = 'rotate(45deg)';
        divmore.style.display = 'block'
        btnafter.style.top = '11px'
        btnafter.style.left = '56px'
    }
    else {
        spandiv.innerHTML = 'Xem thêm'
        btnafter.style.transform = 'rotate(223deg)';
        divmore.style.display = 'none'
        btnafter.style.top = '8px'
        btnafter.style.left = '68px'
    }
})

// tab 
var tabs = document.querySelectorAll('#tab-top > li > a')
tabs.forEach(tab => {
   tab.onclick = function (event) {
    event.preventDefault();
    let alltabs = document.querySelectorAll('#tab-top > li');
    alltabs.forEach(alltab => alltab.style.border = 'none')
    let tabContents = document.querySelectorAll('#tabContent > div')
    tabContents.forEach(tabContent => tabContent.style.display = 'none')
    let targetClass = event.target.getAttribute('target')
    let targetas = document.querySelectorAll('#tab-top > li > a')
    targetas.forEach( a => {
        a.style.color = 'black';  
    })
    let targeta = document.querySelector('[target = ' + targetClass + ']')
    targeta.style.color = 'rgb(13, 92, 182)';
    let targetDiv = document.querySelector('.' + targetClass)
    targetDiv.style.display = 'block';
    let tabBg = document.querySelector('[toggle = ' + targetClass + ']');
    tabBg.style.borderBottom = '4px solid rgb(13, 92, 182)';
  }
})


// tìm theo tên sản phẩm
var nameSelect = document.querySelector('#productName')
nameSelect.addEventListener('change' , function(event){
    event.preventDefault();
    let names = document.querySelectorAll('.nameProduct')
    names.forEach( name => {
        if( name.textContent === nameSelect.value){
           var idName = name.getAttribute('id')
           var targetDiv = document.querySelector('[target=' + idName + ']')
           var divProducts = document.querySelectorAll('#tabContent .content1 > div > div')
           console.log(divProducts)
           divProducts.forEach( divProduct => {
               divProduct.style.display ='none'
           })
           targetDiv.style.display = 'block'
        }
    })
    
})


