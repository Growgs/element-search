document.addEventListener('DOMContentLoaded', function() {
    let modalMain = document.getElementById('modal_main');
    let modalSuccess = document.getElementById('modal_success');

    showModal(modalMain);

    let closeBtns = document.querySelectorAll('.modal__close');
    let showSuccessBtn = document.querySelector('.show-success');

    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            closeModal(modalMain);
        });
    });

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
