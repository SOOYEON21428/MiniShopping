let timeout;

window.onload = () => {
    GetListRequestComment(`/view/GET/commentLatest`);
}

let page = 1;

function redirectTo(id){
    location.href=`/product/?id=${id}`;
}

window.addEventListener('scroll', function() {
    // 이전에 설정된 타임아웃이 있다면 취소
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
        let documentHeight = document.body.scrollHeight;
        let viewportHeight = window.innerHeight;
        let currentScroll = window.scrollY;
        let triggerPoint = documentHeight - viewportHeight - 2000;

        if (currentScroll >= triggerPoint) {
            GetListRequestComment(`/view/GET/commentLatest?page=${++page}`);//다음 페이지 데이터 로드
        }
        console.log(page);
    },500);
});

function GetListRequestComment(url){
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
                        <article class="product-item bg-white shadow-md rounded overflow-hidden">
                            <img src="https://source.unsplash.com/random/300x300?clothes&sig=${item.product_id}"
                                 alt="Fashion item"
                                 onclick="redirectTo(${item.product_id})"
                                 onmouseover="scaleImage(this, 1.2)" 
                                 onmouseout="scaleImage(this, 1)">
                    <div class="p-4">
                        <h3 class="font-semibold">브랜드명 : ${item.product_id}</h3>
                        <h3 class="font-semibold">상품명 : ${item.product_name}</h3>
                        <p class="text-gray-600">${item.product_price}원</p>
                        <p class="text-gray-600">좋아요 ${item.count_love}</p>
                        <p class="text-gray-600">댓글 ${item.comment_count}</p>
                    </div>
                </article>`
            }).join(''); // 배열의 모든 항목을 하나의 문자열로 결합
            LatestViewController.innerHTML += productsHtml;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

function scaleImage(img, scale) {
    img.style.transform = `scale(${scale})`;
}