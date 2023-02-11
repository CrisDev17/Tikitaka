
// delete products

var btnsDelete = document.querySelectorAll('#admin > div table tr td button')
btnsDelete.forEach( btn => {
    btn.addEventListener('click' ,function(event){
        event.preventDefault();
        var btnId = btn.getAttribute('id')
        var targetTr = document.querySelector('[target =' + btnId + ']')
        console.log(targetTr)
        targetTr.style.display ='none'
    })
})