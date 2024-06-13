const addProductBtn = document.querySelector('#addProductBtn');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

addProductBtn.addEventListener('click', () => {
    const id = parseInt(urlParams.get('id'));
    const size = document.querySelector('#sizeVal').value;
    const count = parseInt(document.querySelector('#pd_count').value);
    const data = {
        id : id,
        size : size,
        count : count
    };
    sendData('/manage/POST/amountAdd',data,success,null);
})

const success = () =>{
    location.reload();
}

const modiBtn = document.querySelector("#modiBtn");

modiBtn.addEventListener("click", () => {
    const id = parseInt(urlParams.get('id'));
    const name = document.querySelector("#modiName").innerHTML;
    const category = document.querySelector("#category").value;
    const price = parseInt(document.querySelector("#modiPrice").value);
    const data = {
        product_id : id,
        product_name : name,
        product_price : price,
        product_category : category
    }
    console.log("click")
    sendData('/api/POST/updateProduct',data, null, null);
    console.log("click");
})