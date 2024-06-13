const id = queryParam.get('id');
window.onload = () => {
    GetListRequest(`/GET/commentList?id=${id}&page=1`);
}
function GetListRequest(url){
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
            const commentListContainer = document.getElementById('field');
            // 데이터 배열을 순회하면서 각 항목을 HTML로 변환
            let commentHtml = data.map(item => {
                let imagesHtml = item.urls.map(url => {
                    return `<img src="https://kr.object.ncloudstorage.com/miniidle/storage/${url}" width="200px" height="200px">`;
                }).join(''); // 생성된 <img> 태그들을 하나의 문자열로 결합
                return `
                <div class="border-t border-b py-4" id="commentContainer_${item.id}">
                    <div id="created_who">${item.name}</div>
                    <div class="comment_id" style="">${item.id}</div>
                    ${imagesHtml}
                    <p>${item.content}</p>
                    <p>${item.created_at}</p>
                    <br>
                    <button style="background-color: deepskyblue"
                    class="deleteCommentBtn btn btn-primary"
                    data-comment-id="${item.id}">댓글 삭제하기</button>
                </div>`;
            }).join(''); // 배열의 모든 항목을 하나의 문자열로 결합
            commentListContainer.innerHTML = commentHtml;
            GetDeleteBtn();
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

function GetDeleteBtn(){
    const deleteCommentBtns = document.querySelectorAll('.deleteCommentBtn');
    deleteCommentBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const commentId = e.target.getAttribute('data-comment-id');
            const commentContainer = document.getElementById(`commentContainer_${commentId}`);
            const id = parseInt(commentContainer.querySelector('.comment_id').innerHTML);
            const name = commentContainer.querySelector('#created_who').innerHTML;
            const data = {
                comment_id: id,
                created_who: name
            };
            sendData(`/api/DELETE/comment`, data, null, null);
        })
    })
}