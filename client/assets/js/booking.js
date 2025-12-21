document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Hiện / ẩn địa chỉ theo loại dịch vụ --- */
    const serviceRadios = document.querySelectorAll('input[name="service_type"]');
    const addressBox = document.getElementById("addressBox");

    serviceRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            const checked = document.querySelector('input[name="service_type"]:checked');
            const type = checked ? checked.value : "";

            if (type === "home" || type === "lab_test") {
                addressBox.style.display = "block";
            } else {
                addressBox.style.display = "none";
            }
        });
    });


    /* --- 2. Chọn slot thời gian --- */
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => {
        slot.addEventListener('click', () => {
            slots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
        });
    });


    /* --- 3. Chọn bác sĩ / y tá --- */
    const doctorButtons = document.querySelectorAll('.btn-select-doctor');
    doctorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            doctorButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });


    /* --- 4. Submit handler (ĐÃ FIX LỖI) --- */
    const submit = document.querySelector('.btn-submit');
    if (!submit) return;

    submit.addEventListener('click', () => {

        const serviceEl = document.querySelector('input[name="service_type"]:checked');
        const service = serviceEl ? serviceEl.value : '';

        const descriptionEl = document.getElementById('description');
        const description = descriptionEl ? descriptionEl.value : '';

        const addressEl = document.getElementById('address');
        const address = addressEl ? addressEl.value : '';

        const slotEl = document.querySelector('.slot.selected');
        const slot = slotEl ? slotEl.textContent : '';

        const doctorBtn = document.querySelector('.btn-select-doctor.selected');
        const doctor = doctorBtn ?
            doctorBtn.parentElement.querySelector('h3').textContent :
            '';

        alert(
            `Yêu cầu đặt lịch:
Dịch vụ: ${service}
Bác sĩ/Y tá: ${doctor}
Thời gian: ${slot}
Địa chỉ: ${address}
Mô tả: ${description}`
        );
    });

});