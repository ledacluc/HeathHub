document.addEventListener('DOMContentLoaded', () => {
    // Slot selection
    document.querySelectorAll('.slot').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Book button: store selected doctor and slot, then open booking page
    const btnBook = document.getElementById('btnBook');
    if (btnBook) {
        btnBook.addEventListener('click', () => {
            const name = document.querySelector('.name').textContent;
            const slot = document.querySelector('.slot.selected') ? document.querySelector('.slot.selected').textContent : '';
            localStorage.setItem('preselectDoctor', name);
            localStorage.setItem('preselectSlot', slot);
            window.location.href = '../pages/booking.html';
        });
    }

    // Submit review (client-side only)
    const submitReview = document.getElementById('submitReview');
    if (submitReview) {
        submitReview.addEventListener('click', () => {
            const text = document.getElementById('reviewText').value.trim();
            if (!text) return alert('Vui lòng nhập đánh giá');
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `<strong>Bạn</strong><p>${text}</p>`;
            document.querySelector('.reviews-list').prepend(div);
            document.getElementById('reviewText').value = '';
        });
    }
});