
// choose product

var minus = document.querySelector('#minus')
var num = document.querySelector('#num')
var plus = document.querySelector('#plus')
var addsp = document.querySelector('#cart-wrapper span')
var btnchoose = document.querySelector('#ct-sp button')
minus.addEventListener('click', function () {
    var numsp = Number(num.innerText);
    if (numsp === 0) {
        num.innerHTML = '0';
    }
    else {
        numsp--;
        num.innerHTML = numsp;
    }
})
plus.addEventListener('click', function () {
    var numsp = Number(num.innerText);
    numsp++;
    num.innerHTML = numsp;

})
btnchoose.addEventListener('click', function () {
    // if( num.innerText >= 1){
    //   var a = 0;
    //   a++;
    addsp.innerHTML = num.innerText;
    //}
})


// form 
var nameInput = document.querySelector('#name')
var emailInput = document.querySelector('#email')
var cmt = document.querySelector('#content')
var formcmt = document.querySelector('#content-cmt')
var tb = document.querySelector('#notification')
formcmt.addEventListener('submit', function (event) {
    event.preventDefault();
    if (nameInput.value == '' || nameInput.value == null ||
        emailInput.value == '' || emailInput.value == null ||
        cmt.value == '' || cmt.value == null) {
        tb.innerHTML = 'Bạn chưa nhập đầy đủ thông tin! Vui lòng nhập lại.'
    }
    else {
        if (cmt.value.length < 100) {
            tb.innerHTML = 'Bạn vui lòng nhập trên 100 kí tự cho phần bình luận!'
        }
        else {
            var arr = ['chó', 'ngu'];
            for (let i = 0; i < arr.length; i++) {
                if (cmt.value.toLowerCase().indexOf(arr[i]) > -1) {
                    tb.innerHTML = 'Phần bình luận của bạn chứa từ bị cấm !'
                    return;
                }
                else {
                    tb.innerHTML = 'Cảm ơn bạn đã gửi phản hồi !'
                }

            }
            tb.innerHTML = 'Cảm ơn bạn đã gửi phản hồi !'
        }

    }

    let review = document.querySelector('#comment > div ')
    var divContent = document.createElement('div')
    var firstWord = nameInput.value.split(' ')[0];
    var lastWord = nameInput.value.split(' ')[nameInput.value.split(' ').length - 1];
    var firstCharacter = firstWord.split('')[0].toUpperCase()
    var lastCharacter = lastWord.split('')[0].toUpperCase()
    divContent.classList.add('person')
    divContent.innerHTML = `<div>
     <div class="avatar">${firstCharacter}${lastCharacter}</div>
     <p>${nameInput.value}</p>
     </div>
     <p>${cmt.value}</p>`
    review.prepend(divContent);

})