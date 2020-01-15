document.body.addEventListener('click', event => {

    const transaction = event.target.closest('.e-accordion') || null;

    if (transaction) {
        transaction.classList.toggle('.e-accordion_open');

        const hide = transaction.querySelector('.e-accordion__more');
        hide.style.display = transaction.classList.contains('.e-accordion_open') ? 'block' : 'none';
    }
});
