const mailBtn = document.getElementById("sendEmailBtn");
let authCode = "fjeoifhqofnqkdmpowqkdopq"

const authBtn = document.getElementById('checkAuth');

mailBtn.addEventListener('click',function() {
    const email_id = document.getElementById("email_id").value;
    const email_dns = document.getElementById("email_dns").value;
    const email = email_id + "@" + email_dns;
    console.log("email: ", email);
    const data = {
        "email": email
    }
    fetch("/login/mailConfirm", {
        method: "POST", // 요청 방식
        headers: {
            'Content-Type': 'application/json', // 내용 유형 지정
        },
        body: JSON.stringify(data) // body에 JSON 데이터를 전송
    })
        .then(response => response.json()) // 응답을 JSON으로 파싱
        .then(data => {
            if(data.code == 200) {
                alert(data.msg);
                console.log("data: ", data.data);
                authCode = data.data
            }
            else{
                alert(data.msg)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})

authBtn.addEventListener('click', function (){
    const authVal = document.getElementById('auth').value;
    console.log("code : "+authCode)
    console.log("Val : "+authVal)
    if(authCode===authVal){
        alert("인증 성공")
    }
    else{
        alert("인증 실패")
    }
})