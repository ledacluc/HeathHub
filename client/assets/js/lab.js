document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-request').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('requestForm').style.display = 'block';
            window.scrollTo({ top: document.getElementById('requestForm').offsetTop - 80, behavior: 'smooth' });
        });
    });

    const labType = document.getElementById('labType');
    if (labType) {
        labType.addEventListener('change', () => {
            const v = labType.value;
            document.getElementById('labAddress').style.display = (v === 'home') ? 'block' : 'none';
        });
    }

    const submit = document.getElementById('submitLab');
    if (submit) {
        submit.addEventListener('click', () => {
            const pkg = document.getElementById('labSelect').value;
            const date = document.getElementById('labDate').value;
            const type = document.getElementById('labType').value;
            const addr = document.getElementById('labAddrInput') ? document.getElementById('labAddrInput').value : '';
            alert(`Yêu cầu xét nghiệm:\nGói: ${pkg}\nNgày: ${date}\nHình thức: ${type}\nĐịa chỉ: ${addr}`);
        });
    }
});