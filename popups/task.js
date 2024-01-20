document.addEventListener('DOMContentLoaded', function() {
    let modalMain = document.getElementById('modal_main');
    let modalSuccess = document.getElementById('modal_success');

    showModal(modalMain);

    document.body.addEventListener('click', function(event) {
        let closeBtn = event.target.closest('.modal__close');
        if (closeBtn) {
            let modal = closeBtn.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        }
    });

    let showSuccessBtn = document.querySelector('.show-success');

    showSuccessBtn.addEventListener('click', function() {
        showModal(modalSuccess);
    });
});

function showModal(modal) {
    modal.classList.add('modal_active');
}

function closeModal(modal) {
    modal.classList.remove('modal_active');
}
