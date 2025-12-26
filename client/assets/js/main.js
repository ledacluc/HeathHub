//  LOAD HEADER 
fetch("../components/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;

        //  CHỈ SAU KHI HEADER CÓ MỚI ĐƯỢC GỌI
        checkLogin();
        bindAccountButton();
    });


// CHECK LOGIN 
async function checkLogin() {
    const res = await fetch('http://localhost/HealthHub/server/public/me');
    const data = await res.json();

    if (data.loggedIn) {
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("userMenu").style.display = "inline-block";
        document.getElementById("userName").innerText = data.user.fullname;
    }
}


//  ACCOUNT BUTTON 
function bindAccountButton() {
    const btn = document.getElementById("accountBtn");
    if (!btn) return;

    btn.onclick = async() => {
        const res = await fetch('http://localhost/HealthHub/server/public/me');
        const data = await res.json();

        document.getElementById("infoName").innerText = data.user.fullname;
        document.getElementById("infoEmail").innerText = data.user.email || "";
        document.getElementById("accountPopup").style.display = "block";
    };
}


// LOGOUT 
async function logout() {
    await fetch('http://localhost/HealthHub/server/public/logout', {
        method: 'POST'
    });
    window.location.href = 'login.html';
}