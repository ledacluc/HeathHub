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

        if (!/^\d+$/.test(phone)) {
            alert("Số điện thoại chỉ được chứa số");
            return;
        }

        // --- PASSWORD
        if (pass.length < 8) {
            alert("Mật khẩu phải ít nhất 8 ký tự");
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

        // --- Gửi dữ liệu lên server
        fetch("http://localhost/HealthHub/server/public/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname: fullname,
                    phone: phone,
                    email: email,
                    password: pass,
                    role: role,
                }),
            })
            .then(async(res) => {
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return res.json();
                } else {
                    const text = await res.text();
                    throw new Error("Server không trả JSON: " + text);
                }
            })
            .then((data) => {
                if (data.success) {
                    alert("Đăng kí thành công");
                    window.location.href = "login.html";
                } else {
                    alert(data.message || "Đăng ký thất bại");
                }
            })
            .catch((err) => {
                alert("Lỗi Server !");
                console.error(err);
            });
    }
});