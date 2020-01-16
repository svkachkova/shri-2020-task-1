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
    const target = event.target;

    if (target.matches('.onoffswitch') || target.matches('.onoffswitch__button')) {

        const defaultThemes = [...document.querySelectorAll('.theme_color_project-default')];
        const inverseThemes = [...document.querySelectorAll('.theme_color_project-inverse')];
        
        const onoffswitch = document.querySelector('.onoffswitch');

        defaultThemes.map(defaultTheme => {
            defaultTheme.classList.remove('theme_color_project-default');
            defaultTheme.classList.add('theme_color_project-inverse');
        });
        
        inverseThemes.map(inverseTheme => {
            inverseTheme.classList.remove('theme_color_project-inverse');
            inverseTheme.classList.add('theme_color_project-default');
        });
        
        onoffswitch.classList.toggle('onoffswitch_checked');
    }
}
