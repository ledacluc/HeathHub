document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.package-card');
            const title = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;
            alert(`Mua thành công: ${title} - ${price}\n(Chức năng demo)`);
        });
    });
});