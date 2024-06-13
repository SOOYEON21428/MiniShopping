const CartBtn = document.getElementById('cartBtn');

CartBtn.addEventListener('click', () => {
    console.log("click")
    console.log(id)
    let count = parseInt(document.getElementById('quantity').value);
    let size = document.getElementById('size').value
    console.log("size = ",size)
    console.log(count)
    console.log(typeof count)
    const data = {
        product_id: id,
        count: count,
        size: size
    }
    sendData("/api/POST/addCart", data, null, null);
});
