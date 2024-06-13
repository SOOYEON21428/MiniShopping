const AddBtn = document.getElementById('AddBtn');

AddBtn.addEventListener('click', () => {
    let name = document.getElementById('product_name').value;
    const brand = document.getElementById('brandId').value;
    const category = document.getElementById('product_category').value;
    let price = document.getElementById('product_price').value;
    const sizeElements = document.querySelectorAll('.pd_size');
    const countElements = document.querySelectorAll('.pd_count');
    const images = document.querySelector('#imgList');
    name = name === '' ? null : name;
    price = price === '' ? null : price;

    const formData = new FormData();
    formData.append('product_name', name);
    formData.append('brand', brand);
    formData.append('product_category', category);
    formData.append('product_price', price);

    if(images.files.length > 0) {
        for (let i = 0; i < images.files.length; i++) {
            formData.append('images', images.files[i]);
        }
        if(thumbnail === null) {
            thumbnail = images.files[0];
        }
        formData.append('thumbnail', thumbnail);
    }
    console.log(thumbnail);
    sizeElements.forEach((sizeElement, index) => {
        formData.append(`sizes[${index}].size`, sizeElement.value);
        formData.append(`sizes[${index}].count`, countElements[index].value);
    });

    fetch('/api/POST/manage/productAdd', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.msg);
            location.reload(true);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    console.log("click")
});