document.getElementById('loginForm').addEventListener('submit', async e => {
    e.preventDefault();

    const login = document.getElementById('login').value.trim(); // email hoặc sdt
    const password = document.getElementById('password').value.trim();

    const res = await fetch(
        'http://localhost/HealthHub/server/public/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login,
                password
            })
        }
    );

    const data = await res.json();

    if (data.success) {
        alert("Đăng nhập thành công");
        window.location.href = 'Home.html';
    } else {
        alert(data.message || "Sai tài khoản hoặc mật khẩu!");
    }
});