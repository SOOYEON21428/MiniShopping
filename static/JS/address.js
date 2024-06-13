function searchAddress() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 주소 검색 완료 후 처리할 내용을 여기에 작성합니다.
            document.getElementById('address').value = data.address;
        }
    }).open();
}