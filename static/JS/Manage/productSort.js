let i = 1;
let state = 1;

window.onload = () => {
    GetProductListRequest(`/manage/view/product`);
}

function redirectTo(id) {
    location.href = `/manage/product/?id=${id}`;
}

function GetProductListRequest(url){
    const headers = {
        'Content-Type': 'application/json',
    };
    fetch(url, {
        method: 'POST',
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            // Thymeleaf로 직접 데이터 추가
            const dataContainer = document.getElementById('field');
            console.log(url);
            let manageHtml =
                `
            <thead>
                <tr class="table-header">
                    <th class=" px-4 py-2 text-left">일련번호</th>
                    <th class=" px-4 py-2 text-left">브랜드</th>
                    <th class=" px-4 py-2 text-left">이름</th>
                    <th order="1" class="sort-label px-4 py-2 text-left" value=1>가격</th>
                    <th order="1" class="sort-label px-4 py-2 text-left" value=2>재고수량</th>
                    <th order="1" class="sort-label px-4 py-2 text-left" value=3>총 판매량</th>
                    <th class="px-4 py-2 text-left">자세히</th>
                </tr>
            </thead>
            <tbody >`
            // 데이터 배열을 순회하면서 각 항목을 HTML로 변환
            manageHtml += data.map(item => {
                return `
                <!-- Repeat for each row -->
                    <tr class="table-row" >
                        <td class="px-4 py-2">${item.id}</td>
                        <td class="px-4 py-2">${item.brand_name}</td>
                        <td class="px-4 py-2">${item.product_name}</td>
                        <td class="px-4 py-2">${item.price}</td>
                        <td class="px-4 py-2">${item.amount}</td>
                        <td class="px-4 py-2">${item.sales}</td>
                        <td class="px-4 py-2">
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" 
                            onclick=redirectTo(${item.id})>View</button>
                        </td>
                    </tr>
                <!-- ... more rows ... -->
            `;
            }).join(''); // 배열의 모든 항목을 하나의 문자열로 결합
            manageHtml+=`</tbody>`;
            dataContainer.innerHTML = manageHtml;
            i *= -1;
            state = 1
            setTopBtn(i,state);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

function GetOrderListRequest(url){
    const headers = {
        'Content-Type': 'application/json',
    };
    fetch(url, {
        method: 'POST',
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
                // Thymeleaf로 직접 데이터 추가
                const dataContainer = document.getElementById('field');
                console.log(url);
                let manageHtml =
                    `
                <thead>
                    <tr class="table-header">
                        <th class=" px-4 py-2 text-left">주문 ID</th>
                        <th class=" px-4 py-2 text-left">주문시간</th>
                        <th class=" px-4 py-2 text-left">주문자 명</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=1>주문자 ID</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=2>주문 상품 ID</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=3>주문 사이즈</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=4>주문 갯수</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=5>배송 상태</th>
                    </tr>
                </thead>
                <tbody>
                `
                // 데이터 배열을 순회하면서 각 항목을 HTML로 변환
                manageHtml += data.map(item => {
                    return `
                <!-- Repeat for each row -->
                    <tr class="table-row" >
                        <td class="px-4 py-2">${item.payment_id}</td>
                        <td class="px-4 py-2">${item.time}</td>
                        <td class="px-4 py-2">${item.user_name}</td>
                        <td class="px-4 py-2">${item.user_id}</td>
                        <td class="px-4 py-2">${item.product_id}</td>
                        <td class="px-4 py-2">${item.size}</td>
                        <td class="px-4 py-2">${item.count}</td>
                        <td class="px-4 py-2">${item.state}</td>
                    </tr>
                <!-- ... more rows ... -->
                
            `;
                }).join(''); // 배열의 모든 항목을 하나의 문자열로 결합
                manageHtml += `</tbody>`;
                dataContainer.innerHTML = manageHtml;
                i *= -1;
                state = 2
                setTopBtn(i,state);
            })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

function GetBrandListRequest(url){
    const headers = {
        'Content-Type': 'application/json',
    };
    fetch(url, {
        method: 'POST',
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            // Thymeleaf로 직접 데이터 추가
            const dataContainer = document.getElementById('field');
            console.log(url);
            let manageHtml =
                `
                <thead>
                    <tr class="table-header">
                        <th class=" px-4 py-2 text-left">브랜드 번호</th>
                        <th class=" px-4 py-2 text-left">브랜드 명</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=1>최근 30일 판매 금액</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=2>등록 상품 수</th>
                        <th class="sort-label px-4 py-2 text-left">상세 보기</th>
                    </tr>
                </thead>
                <tbody>
                `
            // 데이터 배열을 순회하면서 각 항목을 HTML로 변환
            manageHtml += data.map(item => {
                return `
                <!-- Repeat for each row -->
                    <tr class="table-row" >
                        <td class="px-4 py-2">${item.brand_id}</td>
                        <td class="px-4 py-2">${item.brand_name}</td>
                        <td class="px-4 py-2">${item.sales}</td>
                        <td class="px-4 py-2">${item.count}</td>
                        <td class="px-4 py-2">
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" 
                            onclick=redirectTo(${item.id})>View</button>
                        </td>
                    </tr>
                <!-- ... more rows ... -->
                
            `;
            }).join(''); // 배열의 모든 항목을 하나의 문자열로 결합
            manageHtml += `</tbody>`;
            dataContainer.innerHTML = manageHtml;
            i *= -1;
            state = 3
            setTopBtn(i,state);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}


function redirectToCS(id) {
    location.href = `/manage/cs/?id=${id}`;
}

function GetCSListRequest(url){
    const headers = {
        'Content-Type': 'application/json',
    };
    fetch(url, {
        method: 'POST',
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            // Thymeleaf로 직접 데이터 추가
            const dataContainer = document.getElementById('field');
            console.log(url);
            let manageHtml =
                `
                <thead>
                    <tr class="table-header">
                        <th class=" px-4 py-2 text-left">문의 번호</th>
                        <th class=" px-4 py-2 text-left">문의 고객 번호</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=1>문의 날짜</th>
                        <th order="1" class="sort-label px-4 py-2 text-left" value=2>상태</th>
                        <th class=" px-4 py-2 text-left">환불하기</th>
                    </tr>
                </thead>
                <tbody>
                `
            // 데이터 배열을 순회하면서 각 항목을 HTML로 변환
            manageHtml += data.map(item => {
                let btn;
                if(item.state == "OK" || item.state == "Cancel"){
                    btn = `
                    <td class="px-4 py-2">
                            <button class="bg-blue-500 text-white font-bold py-1 px-2 rounded" 
                            >응답 완료!</button>
                        </td>`
                }
                else{
                    btn = `
                    <td class="px-4 py-2">
                            <button class="bg-red-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" 
                            onclick=redirectToCS(${item.cs_id})>응답하기</button>
                        </td>`
                }
                return `
                <!-- Repeat for each row -->
                    <tr class="table-row" >
                        <td class="px-4 py-2">${item.cs_id}</td>
                        <td class="px-4 py-2">${item.created_who}</td>
                        <td class="px-4 py-2">${item.created_at}</td>
                        <td class="px-4 py-2">${item.state}</td>
                        ${btn}
                    </tr>
                <!-- ... more rows ... -->
                
            `;
            }).join(''); // 배열의 모든 항목을 하나의 문자열로 결합
            manageHtml += `</tbody>`;
            dataContainer.innerHTML = manageHtml;
            i *= -1;
            state = 4
            setTopBtn(i,state);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}