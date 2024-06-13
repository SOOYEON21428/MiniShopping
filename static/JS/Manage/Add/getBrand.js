const searchBrandBtn = document.getElementById('brandSearch');

searchBrandBtn.addEventListener('click', function(){
    const brandVal = document.getElementById('brandName');
    console.log(brandVal.value)
    const data = {
        brand_name: brandVal.value
    };
    GetBrandList('/manage/view/brand', data);
})

function GetBrandList(url, data){
    const headers = {
        'Content-Type': 'application/json',
    };
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            // Thymeleaf로 직접 데이터 추가
            const dataContainer = document.getElementById('brandField');
            // 데이터 배열을 순회하면서 각 항목을 HTML로 변환
            let manageHtml = data.map(item => {
                return `
                <tr class="table-row" >
                    <td class="px-4 py-3">${item.brand_id}</td>
                    <td class="px-4 py-3">${item.brand_name}</td>
                    <td class="px-4 py-2">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                        onclick="setBrand('${item.brand_name}','${item.brand_id}')">선택하기</button>
                    </td>
                </tr>
            `;
            }).join(''); // 배열의 모든 항목을 하나의 문자열로 결합
            dataContainer.innerHTML = manageHtml;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

function setBrand(data, id){
    const brandVal = document.getElementById('brand');
    const brandId = document.getElementById('brandId');
    brandVal.innerHTML = data;
    brandId.value = id;
    modify.classList.remove("open-modal");
}