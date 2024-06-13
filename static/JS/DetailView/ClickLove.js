const loveBtn = document.getElementById('loveBtn');
const popEffect = document.querySelector('.popEffect');

loveBtn.addEventListener('click', function (){
    const data = {
        product_id : id
    }
    sendData("/api/POST/addLove", data, loveSuccess, null)
})

const loveSuccess = () =>{
    popEffect.classList.add("popUp");
    setTimeout(function() {
        popEffect.classList.remove("popUp");
    },1500);
}