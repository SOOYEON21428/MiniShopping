// "사이즈 더하기" 버튼을 찾아서 변수에 저장합니다.
const addSizeBtn = document.getElementById('addSize');

// 버튼 클릭 이벤트 리스너를 추가합니다.
addSizeBtn.addEventListener('click', function() {
    // 추가할 HTML 콘텐츠를 문자열로 정의합니다.
    const newSizeContent = `
        <div>
            <input class="text-2xl font-bold mb-2 pd_size" placeholder="사이즈를 입력해주세요"/>
            <input class="text-2xl font-bold mb-2 pd_count" placeholder="수량을 입력해주세요"/>
        </div>
    `;

    // 'sizeContainer' 요소를 찾습니다.
    const sizeContainer = document.getElementById('sizeContainer');

    // 'sizeContainer' 내부에 새로운 입력 필드 블록을 추가합니다.
    sizeContainer.insertAdjacentHTML('beforeend', newSizeContent);
});
