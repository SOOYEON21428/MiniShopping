//수량 업데이트
function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);

    if (change === 'increment') {
        quantity++;
    } else if (change === 'decrement' && quantity > 1) {
        quantity--;
    }

    quantityInput.value = quantity;
}

// 수량 증가 버튼 이벤트 처리
document.getElementById('increment').addEventListener('click', () => {
    updateQuantity('increment');
});

// 수량 감소 버튼 이벤트 처리
document.getElementById('decrement').addEventListener('click', () => {
    updateQuantity('decrement');
});