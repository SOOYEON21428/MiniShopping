const commentBtn = document.querySelector('.commentBtn');
const content = document.querySelector('.input-comment');
const images = document.querySelector('#imgList');


commentBtn.addEventListener('click', () => {
    const formData = new FormData();
    formData.append('product_id',id);
    formData.append('content', content.value);
    for (let i=0; i<images.files.length; i++){
        formData.append('images', images.files[i]);
    }

    fetch('/api/POST/comment', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if(data.code===666){
                alert(data.msg)
                location.href="/login"
            }
            if(data.code===400) {
                alert(data.msg);
            }
            if(data.code===200) {
                alert(data.msg);
                location.reload();
            }
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    console.log("click")

});
