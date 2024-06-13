window.onload = () =>{
    GetOrderListView('/api/view/orderList?page=1');
}
let price = 0;
let items = [];

function GetOrderListView(url){
    const headers = {
        'Content-Type': 'application/json',
    };
    fetch(url, {
        method: 'POST',
        headers: headers
    }).then(response => response.json())
        .then(data => {
            const pageSize = Math.ceil(data.length/ 10);
            // Thymeleaf로 직접 데이터 추가
            const dataContainer = document.getElementById('field');
            console.log(url);
            let orderHtml =
                `
                <h1>주문 내역</h1>
                <table id="cartTable">
                    <thead>
              <tr>
                <th>주문 번호</th>
                <th>주문 시간</th>
                <th>주문 상품</th>
                <th>사이즈</th>
                <th>갯 수</th>
                <th>주문 가격</th>
                <th>배송 상태</th>
                <th>문의 하기</th>
              </tr>
            </thead>
            <tbody>`
            // 데이터 배열을 순회하면서 각 항목을 HTML로 변환
            orderHtml += data.map(item => {
                return `
                <!-- Repeat for each row -->
                    <tr>
                        <td>${item.payment_id}</td>
                        <td>${item.payment_at}</td>
                        <td>${item.product_name}<img src="https://kr.object.ncloudstorage.com/miniidle/storage/${item.product_img}" alt="상품 이미지" width="100" height="100"></td>
                        <td>${item.size}</td>
                        <td>${item.count}</td>
                        <td>${item.total_price}</td>
                        <td>${item.delivery_state}</td>
                        <td><button class="plzBtn bg-pink-600 text-white px-6 py-2 rounded" onclick="location.href='/cs?id=${item.payment_id}'">환불 문의하기</button></td>
                    </tr>
                <!-- ... more rows ... -->
            `;
            }).join(''); // 배열의 모든 항목을 하나의 문자열로 결합
            orderHtml+=`
            </tbody>
            </table>
            <span class="page_nation">`;
            for(let i = 1; i <= pageSize; i++){
                orderHtml+=`<button class="page-btn" onclick="GetOrderListView('/api/view/orderList?page=${i}')">${i}</button>`
            }
            orderHtml+=`</span>`;
            dataContainer.innerHTML = orderHtml;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}
