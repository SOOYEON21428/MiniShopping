const csOkBtn = document.getElementById('csOkBtn');
const csCancelBtn = document.getElementById('csCancelBtn');


csOkBtn.addEventListener('click', function () {
    const cs_id = document.getElementById('cs_id').innerText;
    console.log(cs_id)
    const content = document.getElementById('content').value;
    const data = {
        cs_id: cs_id,
        content: content,
        state : "OK"
    }
    sendData("/manage/POST/cs", data, end, end);
})

csCancelBtn.addEventListener('click', function () {
    const cs_id = document.getElementById('cs_id').innerText;
    const content = document.getElementById('content').value;
    const data = {
        cs_id: cs_id,
        content: content,
        state : "Cancel"
    }
    sendData("/manage/POST/cs", data, end, end);
})

const end = () =>{
    location.href = "/manage";
}