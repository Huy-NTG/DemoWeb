/*
các nút nhấn nên lấy bằng queryselector
*/
var bookAll = JSON.parse(localStorage.getItem('Book')).filter(item => item.status == 1);
console.log(bookAll);
/*chức năng ẩn hiện khung đăng nhập và đăng kí*/

var login_container = document.querySelector('.login-container'); // Chọn thẻ .login-container
var login_function = document.querySelector('.login-container a'); // Chọn thẻ <a> trong .login-container
var register_container = document.querySelector('.register-container');
var register_function = document.querySelector('.register-container a');
var modal_login_register = document.querySelector('.modal');
var modal_login = document.querySelector('.modal-body-login');
var modal_register = document.querySelector('.modal-body-register');
var quit_functions = document.querySelectorAll('.icon-quit'); // Định nghĩa đúng biến này
//sự kiện đăng nhập
// Gán sự kiện cho thẻ .login-container
login_container.addEventListener('click', function(event) {
    showModalLogin();
});
// Gán sự kiện cho thẻ <a> trong .login-container
login_function.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    showModalLogin();
});
//sự kiện đăng kí
register_container.addEventListener('click', function(event){
    showModalRegister();
});
register_function.addEventListener('click', function(event){
    event.preventDefault();
    showModalRegister();
});
// sự kiện ấn icon thoát
quit_functions.forEach(function(icon) { // Đổi thành quit_functions thay vì quit_icons
    icon.addEventListener('click', function(event) {
        exitModal();
    });
});
function showModalLogin() {
    modal_login_register.classList.remove('hide');
    modal_login.classList.remove('hide');
}
function exitModal() {
    modal_login_register.classList.add('hide');
    modal_login.classList.add('hide');
    modal_register.classList.add('hide');
}
function showModalRegister(){
    modal_login_register.classList.remove('hide');
    modal_register.classList.remove('hide');
}
//xử lý chức năng đăng kí
var registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', function(event) {
    event.preventDefault();
    regisTrationProcessing();
});
//xử lý chức năng đăng nhập
var loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click',function(event){
    event.preventDefault();
    loginTrationProcessing();

})
window.onload = showProduct(bookAll);// khi cửa sổ load lại tải lại sản phẩm và trình bày
/*xư lý sự kiện đăng kí*/
/*mơi bắt đầu thì dùng if else cơ bản sau thì dùng promise vì promise rất phức tạp cho beginner */
function regisTrationProcessing() {
    var nameRegister = document.getElementById('nameRegister').value;
    var numberphoneRegister = document.getElementById('numberphoneRegister').value;
    var passwordRegister = document.getElementById('passwordRegister').value;
    var passwordRegisterAgain = document.getElementById('passwordRegisterAgain').value;
    // Kiểm tra xem có trường nào bị trống không
    if (nameRegister === "" || numberphoneRegister === "" || passwordRegister === "" || passwordRegisterAgain === "") {
        alert('Thông tin bị trống!');
        return; // Dừng hàm nếu có trường bị trống
    }
    var phonePattern = /^(0[3|5|7|8|9])([0-9]{8})$/; // biểu thức chính quy so sánh
    // Kiểm tra số điện thoại
    if (!phonePattern.test(numberphoneRegister)) { // so sánh với số đt đăng kí
        alert('Số điện thoại không hợp lệ!');
        return; // Dừng hàm nếu số điện thoại không hợp lệ
    }
    // Kiểm tra mật khẩu có khớp hay không
    if (passwordRegister != passwordRegisterAgain) {
        alert('Mật khẩu không khớp!');
        return; // Dừng hàm nếu mật khẩu không khớp
    }
    // Nếu mọi thứ hợp lệ
    addAcclone(nameRegister,numberphoneRegister,passwordRegister);
    exitModal();/*hàm ẩn trang khi đăng kí thành công*/
    changeRegisLoginTrationFrame();
    alert('Đăng ký thành công!');
}
/*hàm thêm tài khoản khi đăng kí */
/*đây là hàm do chat tạo */
function addAcclone(nameRegister, numberphoneRegister, passwordRegister) {
    // Tạo đối tượng currentUser từ thông tin đăng ký
    var currentUser = {
        fullname: nameRegister,
        phone: numberphoneRegister,
        password: passwordRegister,
        address: '',
        email: '',
        status: 1,
        join: new Date(),
        cart: [],
        userType: 1
    };
/*đây là chat đẩy nhiểu user */
    // Kiểm tra xem mục 'currentAcclone' đã tồn tại trong localStorage hay chưa
    // if (!localStorage.getItem('currentAcclone')) {
    //     // Nếu mục 'currentAcclone' chưa tồn tại, tạo một mảng rỗng và lưu vào đó
    //     localStorage.setItem('currentAcclone', JSON.stringify([]));
    // }

    // Lấy dữ liệu từ mục 'currentAcclone' trong localStorage
    // var currentAccloneData = JSON.parse(localStorage.getItem('currentAcclone'));
    // var Acclone = JSON.parse(localStorage.getItem('Acclones'));

    // Thêm đối tượng currentUser vào mảng currentAccloneData
    // currentAccloneData.push(currentUser);
    // Acclone.push(currentUser);

    // Lưu mảng currentAccloneData đã được cập nhật vào mục 'currentAcclone'
    // localStorage.setItem('currentAcclone', JSON.stringify(currentAccloneData));
    // localStorage.setItem('Acclones',JSON.stringify(Acclone));
    /* đây là tui đẩy 1 user  */
    // var currentAcclone = localStorage.getItem("currentAcclone");
    localStorage.setItem('currentAcclone', JSON.stringify(currentUser));
    localStorage.setItem('Acclones', JSON.stringify(currentUser));
}

/*đây là hàm do chính tui tạo */
/*hàm thay đổi khung đăng nhập khi đăng nhập/ đăng kí thành công */
/*áp dụng innerHTMl, outerHTML, innerText, Textcontent, createElentm,appendChild */
/*innerHTML chỉ xử nội dung của thẻ con gần nó nhất thẻ 1 và thêm thẻ mới chứ không sửa thẻ con của thẻ con chứa nó thẻ 1.1, 1.2  */
function changeRegisLoginTrationFrame() {
    var currentUser = JSON.parse(localStorage.getItem('currentAcclone'));
    var login_container = document.querySelector('.Login-register');
    var login_register_container = document.querySelector('.login-register-container');
    login_container.innerHTML = `
        <span class="text-Login-register">Tài Khoản</span>
        <span class="Login-account-text">${currentUser.fullname}<i class="fa-solid fa-arrow-down"></i></span>`;
    login_register_container.innerHTML = ` 
    <div class="login-container"><a href=""><i class="fa-regular fa-user icon-login-register"></i>Thông tin tài khoản</a></div>
        <div class="register-container"><a href=""><i class="fa-solid fa-cart-shopping icon-login-register"></i>Đơn hàng của tôi</a></div>
         <div class="register-container"><a href=""><i class="fa-solid fa-right-from-bracket icon-login-register"></i>Đăng xuất tài khoản</a></div>`;
}

// hàm đăng nhập do tui làm
// function loginTrationProcessing() {
//     var accountUsers = JSON.parse(localStorage.getItem('Acclones'));
//     var numberPhoneLogin = document.getElementById('phoneLogin').value;
//     var passwordLogin = document.getElementById('passwordLogin').value;
//     // Sử dụng forEach để duyệt qua mảng accountUsers
//     accountUsers.forEach(function(accountUser) {
//         if (accountUser.phone !== numberPhoneLogin || accountUser.password !== passwordLogin) {
//             alert('Số điện thoại hoặc mật khẩu không chính xác hoặc chưa được đăng kí');
//             return; // Thoát khỏi hàm nếu thông tin không chính xác
//         }
//         else{
//             var accoutCurrentUser = accountUser;
//             localStorage.setItem('currentAcclone', JSON.stringify(accoutCurrentUser));
//         }
//         // Xử lý khi thông tin đăng nhập chính xác
//         // Ví dụ: Chuyển người dùng đến trang chính sau khi đăng nhập thành công
//     });
//     exitModal();/*hàm ẩn trang khi đăng kí thành công*/
//     changeRegisLoginTrationFrame();
//     alert('Đăng nhập thành công!');
// }

// hàm đăng nhập do chat làm ---> nó làm kinh vl :)))
function loginTrationProcessing() {
    var accountUsers = JSON.parse(localStorage.getItem('Acclones'));
    var numberPhoneLogin = document.getElementById('phoneLogin').value;
    var passwordLogin = document.getElementById('passwordLogin').value;
    var isLoggedIn = false; // Biến để kiểm tra trạng thái đăng nhập

    // Sử dụng some() để kiểm tra xem có tài khoản nào khớp với thông tin đăng nhập không
    var currentUser = accountUsers.find(function(accountUser) {
        return accountUser.phone === numberPhoneLogin && accountUser.password === passwordLogin;
    });

    if (currentUser) {
        localStorage.setItem('currentAcclone', JSON.stringify(currentUser));
        isLoggedIn = true;
        // Xử lý khi thông tin đăng nhập chính xác
        // Ví dụ: Chuyển người dùng đến trang chính sau khi đăng nhập thành công
    } else {
        alert('Số điện thoại hoặc mật khẩu không chính xác hoặc chưa được đăng ký');
    }

    if (isLoggedIn) {
        exitModal(); // Hàm để ẩn modal khi đăng nhập thành công
        changeRegisLoginTrationFrame();
        alert('Đăng nhập thành công!');
    }
}
//hàm trình bày sản phẩm
function showProduct(products){
    var bookHTML = '';
    if(products.length == 0){
        document.querySelector('.title-menu-description').style.display = "none";
        bookHTML.innerHTML = `<div class="no-result"><div class="no-result-h">Tìm kiếm không có kết quả</div><div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div><div class="no-result-i"><i class="fa-light fa-face-sad-cry"></i></div></div>`;
    }
    else{
        // document.querySelector('.title-menu-description').style.display = "block";
        products.forEach((product) =>{
            bookHTML += `<div class="product-item">
                <div class="cart-product">
                    <div class="product-header">
                        <a href="" class="cart-img-link">
                            <img class="product-img"  src="${product.img}" alt="" >
                        </a>
                    </div>
                    <div class="product-content">
                    <div class="product-name">${product.title}</div>
                    <div class="product-price">${product.price}</div>
                    <div class="product-buy">
                        <button class="btn-primal">ĐẶT HÀNG</button>
                    </div>
                </div>
                </div>
            </div>`
        });
    }
    document.querySelector('.home-products-list').innerHTML = bookHTML;
}



