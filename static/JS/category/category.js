window.onload = () => {
    GetListRequest(`/view/GET/category`);
}
let page =1;//현재 페이지 번호
function redirectTo(id){
    location.href=`/product/?id=${id}`;
}

//스크롤 이벤트 리스너 추가
window.onscroll=()=>{
    //사용자가 페이지 하단에 도달했는지 확인
    if(window.innerHeight + window.scrollY >=document.body.offsetHeight){
        GetListRequest(`/view/GET/category?page=${++page}`);//다음 페이지 데이터 로드
    }
};

function GetListRequest(url){
    const headers = {
        'Content-Type': 'application/json',
    };
    fetch(url, {
        method: 'POST',
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            const LatestViewController = document.getElementById('field');
            let productsHtml = data.map(item => {
                return `
                    <article class="bg-white shadow-md rounded overflow-hidden product-item">
                        <div class="product-image-container">
                            <img src="https://source.unsplash.com/random/300x300?clothes&sig=${item.product_name}"
                                 alt="Fashion item"
                                 onclick="redirectTo(${item.product_name})">
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold">브랜드명 : ${item.product_id}</h3>
                            <h3 class="font-semibold">상품명 : ${item.product_name}</h3>
                            <p class="text-gray-600">${item.product_name}원</p>
                            <p class="text-gray-600">좋아요 ${item.count_love}</p>
                        </div>
                    </article>
                `;
            }).join('');
            LatestViewController.innerHTML += productsHtml;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}