//메인페이지 팝업
window.onload = function() {
    // 팝업 요소 가져오기
    var popupContainer = document.getElementById('popup-container');
    var closeButton = document.getElementById('close-popup');

    // 팝업 띄우기
    popupContainer.style.display = 'block';

    // 닫기 버튼 클릭 시 팝업 닫기
    closeButton.onclick = function() {
        popupContainer.style.display = 'none';
    };

    // 팝업 이외의 영역 클릭 시 팝업 닫기
    document.body.addEventListener('click', function(event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
};