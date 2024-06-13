const csBtn = document.getElementById('csBtn');

csBtn.addEventListener('click', () => {
    const user_name = document.getElementById('user_name').value;
    const payment_id = document.getElementById('payment_id').value;
    const content = document.getElementById('content').value;
    const data = {
        user_name: user_name,
        payment_id: payment_id,
        content: content
    };
    sendData("/api/POST/customerService",data, goTOOrderList, null)
});

const goTOOrderList = () =>{
    location.href = '/order';
}