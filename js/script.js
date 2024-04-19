let btn = document.querySelector('.godbtn')
let pic = document.querySelectorAll('.describe')
let zero = 0
// for (let i = 0; i < 1; i++) {

//     btn[i].addEventListener('click', function () {


//         for (let i = 0; i < 1; i++) {
//             pic[i].classList.remove('active'); 

//         }
//pic[i].classList.add('active');
//     })
// }

btn.addEventListener('click', function () {
    pic[zero].classList.remove('active')
    zero++
    if(zero==2){
        zero=0
    }
    pic[zero].classList.add('active')
})