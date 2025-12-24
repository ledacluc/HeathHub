document.getElementById('loginForm').addEventListener('submit', async e => {
    e.preventDefault();

    const form = e.target;
    const res = await fetch(
        'http://localhost/HealthHub/server/public/auth/handleLogin', {
            method: 'POST',
            body: new FormData(form)
        }
    );

    const data = await res.json();
    if (data.status === "success") {
        window.location.href = 'Home.html';
    } else {
        alert("Sai tài khoản hoặc mật khẩu !");
    }
});