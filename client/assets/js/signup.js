document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#signupForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        validateSignup();
    });

    function validateSignup() {

        const fullname = document.querySelector("#fullname").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const pass = document.querySelector("#password").value.trim();
        const repass = document.querySelector("#repassword").value.trim();
        const role = document.querySelector("#role").value;

        // --- name
        if (fullname === "") {
            alert("Vui lòng nhập họ và tên");
            return;
        }

        // --- mail
        if (!email.includes("@") || !email.includes(".")) {
            alert("Email phải chứa @ và dấu chấm");
            return;
        }

        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");

        if (atPos < 1 || dotPos < atPos + 2 || dotPos === email.length - 1) {
            alert("Email không hợp lệ");
            return;
        }

        // --- PHONE 
        if (phone.length < 9 || phone.length > 11) {
            alert("Số điện thoại phải từ 9–11 số");
            return;
        }

        for (let i = 0; i < phone.length; i++) {
            if (phone[i] < '0' || phone[i] > '9') {
                alert("Số điện thoại chỉ được chứa số");
                return;
            }
        }

        // mat khau
        if (pass.length < 6) {
            alert("Mật khẩu phải ít nhất 6 ký tự");
            return;
        }

        if (pass !== repass) {
            alert("Mật khẩu nhập lại không khớp");
            return;
        }

        if (role === "") {
            alert("Vui lòng chọn vai trò");
            return;
        }

        alert(" Đăng ký thành công !");
    }

});