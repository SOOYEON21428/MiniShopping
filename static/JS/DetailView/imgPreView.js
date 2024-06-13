let thumbnail = null;

function previewImages() {
    let preview = document.querySelector('#preview');
    preview.innerHTML = '';
    let files = document.querySelector('input[type=file]').files;

    // 파일 갯수 확인
    if (files.length > 10) {
        alert('사진은 최대 10개까지 업로드할 수 있습니다.');
        document.querySelector('input[type=file]').value = '';
        return;
    }

    function readAndPreview(file) {
        // 이미지 파일인지 확인
        if (/.(jpe?g|png|gif)$/i.test(file.name)) {
            let reader = new FileReader();

            reader.addEventListener("load", function () {
                let image = new Image();
                image.height = 100; // 미리보기 이미지의 높이 설정
                image.title = file.name;
                image.src = this.result;
                image.addEventListener("click", function() {
                    thumbnail = file;
                });
                preview.appendChild(image);
            }, false);
            reader.readAsDataURL(file);
        }
    }

    if (files) {
        [].forEach.call(files, readAndPreview);
    }
}