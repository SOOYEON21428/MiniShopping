document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // 기본 제출 이벤트를 방지

    let formData = new FormData(event.target);
    let formDataString = new URLSearchParams();
    formData.forEach(function(value, key){
        formDataString.append(key, value);
    });

    fetch(event.target.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            // 필요한 경우 CSRF 토큰을 여기에 추가
        },
        body: formDataString
    }).then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Login failed.');
    }).then(data => {
        console.log(data);
        // 로그인 성공 후 처리, 예를 들어 페이지 리다이렉션
    }).catch(error => {
        console.error(error);
    });
});