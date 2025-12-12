document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let identity = document.getElementById("loginIdentity").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (identity === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    // TODO: Khi sang backend sẽ gọi API tại đây
    alert("Đăng nhập thành công (UI test)");
});