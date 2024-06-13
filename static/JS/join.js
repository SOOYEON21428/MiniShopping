// 중복 체크를 위한 가짜 함수


// 이메일 중복 체크를 위한 가짜 함수
function checkDuplicateEmail(emailId, emailDns) {
    console.log(data)
    // 여기에 실제 이메일 중복 체크 로직을 구현하면 됩니다.
    // 이 함수는 이메일이 중복되면 true를 반환하고, 중복되지 않으면 false를 반환합니다.
    return Math.random() < 0.5; // 임의의 결과를 반환하는 가짜 로직입니다.
}

const nameCheckBtn = document.getElementById('checkNameBtn');
nameCheckBtn.addEventListener('click', function() {
    const nickname = document.getElementById('nickname').value.trim();
    console.log(nickname);
    data = {
        name : nickname
    }
    if (nickname === '') {
        errorSpan.textContent = '닉네임을 입력하세요.';
        return;
    }
    sendData("/POST/checkName", data, success, fail);
});

const success = () => {
    const errorSpan = document.getElementById('nickname-error');
    errorSpan.textContent = '사용 가능한 닉네임입니다.';
    errorSpan.style.color = 'green';
}
const fail = () => {
    const errorSpan = document.getElementById('nickname-error');
    errorSpan.textContent = '이미 사용 중인 닉네임입니다.';
    errorSpan.style.color = 'red';
}


// Daum 주소 API에서 주소를 클릭했을 때 실행될 함수
function setAddress(addr) {
    // 클릭한 주소를 회원가입 폼의 주소 필드에 채움
    document.getElementById('addr1').value = addr;
}

// 유효성 검사
document.getElementById('btnJoin').addEventListener('click', function(event) {
    const emailId = document.getElementById('email_id').value.trim();
    const emailDns = document.getElementById('email_dns').value.trim();
    const password = document.getElementById('password').value.trim();
    const name = document.getElementById('nickname').value.trim();
    const pnum = document.getElementById('mobile').value.trim();
    const confirmPassword = document.getElementById('confirm_password').value.trim();
    const errorSpan = document.getElementById('email-error'); // 올바른 요소를 선택하도록 수정
    const email = emailId + '@' + emailDns;
    console.log(email);
    if (emailId === '' || emailDns === '' || password === '' || confirmPassword === '') {
        errorSpan.textContent = '모든 필드를 입력하세요.';
        event.preventDefault(); // 폼 제출 방지
        return;
    }

    data = {
        email : email,
        password : password,
        pnum : pnum,
        name : name
    }
    sendData("/POST/join", data, null, null);

    if (password !== confirmPassword) {
        document.getElementById('password-error').textContent = '비밀번호가 일치하지 않습니다.';
        document.getElementById('confirm-password-error').textContent = '비밀번호가 일치하지 않습니다.';
        event.preventDefault(); // 폼 제출 방지
        return;
    }

    // 이메일 중복 검사
    if (!checkDuplicateEmail(emailId, emailDns)) {
        errorSpan.textContent = '사용 가능한 이메일입니다.';
        errorSpan.style.color = 'green';
    } else {
        errorSpan.textContent = '이미 사용 중인 이메일입니다.';
        errorSpan.style.color = 'red';
        event.preventDefault(); // 폼 제출 방지
    }
});

// 이메일 도메인 선택 시 입력란 옆에 표시되도록 설정
document.getElementById('email_sel').addEventListener('change', function() {
    var selectedDomain = this.value;
    var emailInput = document.getElementById('email_dns');
    if (selectedDomain === '') {
        emailInput.value = '';
        emailInput.removeAttribute('disabled'); // 이메일 도메인을 직접 입력할 수 있도록 활성화
    } else {
        emailInput.value = selectedDomain;
        emailInput.setAttribute('disabled', 'disabled'); // 이메일 도메인이 선택된 경우에는 입력란을 비활성화
    }
});

// 이메일 중복 확인 버튼의 이벤트 처리
document.getElementById("checkDuplicateEmail").addEventListener("click", function() {
    const emailId = document.getElementById("email_id").value;
    const emailDns = document.getElementById("email_dns").value;
    const errorSpan = document.getElementById('email-error');

    if (!emailId || !emailDns) {
        errorSpan.textContent = "이메일 주소를 완성해주세요.";
        return;
    }

    // 이메일 중복 검사
    if (!checkDuplicateEmail(emailId, emailDns)) {
        errorSpan.textContent = '사용 가능한 이메일입니다.';
        errorSpan.style.color = 'green';
    } else {
        errorSpan.textContent = '이미 사용 중인 이메일입니다.';
        errorSpan.style.color = 'red';
    }
});





