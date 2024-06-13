const goPayment = (url,data) =>{
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
            if(data.code === 200){
                alert(data.msg);
                location.href='/buy';
            }
            if(data.code === 400){
                alert(data.msg);
            }
        })
}