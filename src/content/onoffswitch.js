document.body.addEventListener('click', event => {
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
});