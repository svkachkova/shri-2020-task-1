window.onload = () => {
    document.body.addEventListener('click', historyHandler);
    document.body.addEventListener('click', onoffswitchHandler);
};

function historyHandler(event) {
    const transaction = event.target.closest('.e-accordion') || null;

    if (transaction) {
        transaction.classList.toggle('.e-accordion_open');

        const hide = transaction.querySelector('.e-accordion__more');
        hide.style.display = transaction.classList.contains('.e-accordion_open') ? 'block' : 'none';
    }
}

function onoffswitchHandler(event) {
    const onoffswitch = event.target.closest('.onoffswitch');

    if (onoffswitch) {

        const themeBlocks = [...document.querySelectorAll('.theme_color_project-default, .theme_color_project-inverse')];
    
        themeBlocks.map(themeBlock => {
            themeBlock.classList.toggle('theme_color_project-default');
            themeBlock.classList.toggle('theme_color_project-inverse');
        });
        
        onoffswitch.classList.toggle('onoffswitch_checked');
    }
}
