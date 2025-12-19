document.addEventListener('DOMContentLoaded', () => {
    const post = document.getElementById('postQuestion');
    if (post) {
        post.addEventListener('click', () => {
            const title = document.getElementById('qTitle').value.trim();
            const content = document.getElementById('qContent').value.trim();
            if (!title || !content) return alert('Vui lòng nhập tiêu đề và nội dung');
            const div = document.createElement('div');
            div.className = 'question-item card';
            div.innerHTML = `<h4>${title}</h4><p>Bạn • vừa xong</p><p>${content}</p>`;
            document.querySelector('.questions-list').prepend(div);
            document.getElementById('qTitle').value = '';
            document.getElementById('qContent').value = '';
        });
    }
});