// 이미지 URL 배열 생성
// 화면 가로 길이 가져오기
const width = window.innerWidth;

// 화면 가로 길이의 60% 크기
const imageWidth = width * 1.0;

const imageUrls = [
    `https://source.unsplash.com/${imageWidth}x500/?fashion&sig=1`,
    `https://source.unsplash.com/${imageWidth}x500/?clothes&sig=2`,
    `https://source.unsplash.com/${imageWidth}x500/?clothes&sig=3`
];



const bannerImage = document.getElementById('banner-image');
let currentImageIndex = 0;

function changeBannerImage() {
    bannerImage.src = imageUrls[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length; // 이미지를 순환하도록 인덱스 업데이트
}

// 첫 번째 이미지로 시작
changeBannerImage();

// 4초마다 이미지 변경
setInterval(changeBannerImage, 4000);