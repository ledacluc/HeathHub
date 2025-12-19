// Show address field only when service = home or lab_test
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[name="service_type"]').forEach(radio => {
        radio.addEventListener("change", () => {
            let type = document.querySelector('input[name="service_type"]:checked').value;

            if (type === "home" || type === "lab_test") {
                document.getElementById("addressBox").style.display = "block";
            } else {
                document.getElementById("addressBox").style.display = "none";
            }
        });
    });

    // Slot selection
    document.querySelectorAll('.slot').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Submit handler (placeholder)
    const submit = document.querySelector('.btn-submit');
    if (submit) {
        submit.addEventListener('click', () => {
            // gather minimal data
            const service = document.querySelector('input[name="service_type"]:checked').value;
            const description = document.getElementById('description').value || '';
            const address = document.getElementById('address') ? document.getElementById('address').value : '';
            const slot = document.querySelector('.slot.selected') ? document.querySelector('.slot.selected').textContent : '';
            alert(`Yêu cầu đặt lịch:\nDịch vụ: ${service}\nThời gian: ${slot}\nĐịa chỉ: ${address}\nMô tả: ${description}`);
        });
    }
});