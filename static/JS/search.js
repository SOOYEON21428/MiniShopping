const searchItemBtn = document.getElementById('searchItemBtn');

// '검색' 버튼 클릭 이벤트 리스너
searchItemBtn.addEventListener('click', () => {
    const searchValue = document.getElementById('searchInput').value; // 입력한 검색어 가져오기
    searchProduct(searchValue); // 검색 함수 호출
});

// 상품 검색 함수
function searchProduct(product_name) {
    fetch('/api/POST/searchProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_name: product_name }), // 서버에 검색어 전송
    })
        .then(response => response.json()) // 응답을 JSON 형태로 변환
        .then(data => {
            console.log(data); // 콘솔에 데이터 출력
            displayResults(data); // 검색 결과를 보여주는 함수 호출
        })
        .catch((error) => {
            console.error('Error:', error); // 에러 처리
        });
}

// 검색 결과 표시 함수
function displayResults(results) {
    const resultsContainer = document.getElementById('field');

    resultsContainer.innerHTML = ''; // 기존 검색 결과와 다른 컨텐츠를 클리어

    // 검색 결과가 없는 경우
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>검색 결과가 없습니다.</p>';
        return;
    }

    // 검색 결과를 페이지에 표시
    let productsHtml = results.map(item => {

        return `
        <article class="product-item bg-white shadow-md rounded overflow-hidden">
            <img src="https://source.unsplash.com/random/300x300?clothes&sig=${item.product_id}"
                 alt="Fashion item"
                 onclick="redirectTo(${item.product_id})"
                 onmouseover="scaleImage(this, 1.2)"
                 onmouseout="scaleImage(this, 1)">
                <div class="p-4">
                    <h3 class="font-semibold">브랜드명 : ${item.product_id}</h3> <!-- 'item.product_id'를 실제 브랜드명을 나타내는 속성으로 교체 필요 -->
                    <h3 class="font-semibold">상품명 : ${item.product_name}</h3>
                    <p class="text-gray-600">${item.product_price}원</p>
                    <p class="text-gray-600">${item.product_id}</p> <!-- 이 부분은 필요에 따라 다른 정보로 대체하거나 제거할 수 있습니다. -->
                </div>
        </article>
    `;
    }).join('');

    resultsContainer.innerHTML = productsHtml; // 최종적으로 처리된 HTML을 검색 결과 컨테이너에 삽입
}
