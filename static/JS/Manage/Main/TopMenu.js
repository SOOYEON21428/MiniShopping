const topProductBtn = document.getElementById('ProductTop');
const topOrderBtn = document.getElementById('OrderTop');
const topBrandBtn = document.getElementById('BrandTop');
const topCSBtn = document.getElementById('CSTop');

function setTopBtn(i, value){
    const sortLabels = document.querySelectorAll('.sort-label')
    sortLabels.forEach(function(sortLabel) {
        sortLabel.addEventListener('click', function(){
            let toggle = parseInt(this.getAttribute('order'))
            this.setAttribute('order', i * -1)
            toggle = parseInt(this.getAttribute('order'))

            let val = this.getAttribute('value')
            let searchValue = document.getElementById('searchVal').value;
            val = parseInt(val) * toggle

            console.log(val)
            if(value == 1) {
                GetProductListRequest(`/manage/view/product/search?id=${val}&name=${searchValue}&page=1`);
            }
            else if(value == 2){
                GetOrderListRequest(`/manage/view/order/search?id=${val}&name=${searchValue}`);
            }
            else if(value == 3){
                GetBrandListRequest(`/manage/view/brand/search?id=${val}&name=${searchValue}`);
            }
            else if(value == 4){
                GetCSListRequest(`/manage/GET/cs/search?name=${searchValue}&page=1`);
            }
        });
    });
};

function colorChange(clickElement){
    const topLabels = document.querySelectorAll('.tab')
    topLabels.forEach(topLabel =>
        topLabel.classList.remove('tab-active')
    );
    clickElement.classList.add('tab-active');
}


topProductBtn.addEventListener('click', function(){
    GetProductListRequest(`/manage/view/product`);
    colorChange(this);
});

topOrderBtn.addEventListener('click', function(){
    GetOrderListRequest(`/manage/view/order/search?page=0`);
    colorChange(this);
});

topBrandBtn.addEventListener('click', function(){
    GetBrandListRequest(`/manage/view/brand/search?page=0`);
    colorChange(this);
});

topCSBtn.addEventListener('click', function(){
    GetCSListRequest(`/manage/GET/cs/search?page=0`);
    colorChange(this);
});



