const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', ()=>{
    const searchValue = document.getElementById('searchVal');
    console.log(typeof(searchValue.value))
    console.log(searchValue.value)
    if(state===1) {
        GetProductListRequest(`/manage/view/product/search?name=${searchValue.value}`);
    }
    else if (state===2){
        GetOrderListRequest(`/manage/view/order/search?name=${searchValue.value}&page=0`);
    }
})