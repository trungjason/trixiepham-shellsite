document.addEventListener("DOMContentLoaded", function (event) {
    const FILTER_TYPE_GRAPHIC_DESIGN = 'graphic-design';
    const FILTER_TYPE_UI_UX_DESIGN = 'ui-ux-design';
    const FILTER_TYPE_WEBSITE_DEVELOPMENT = 'website-development';
    const FILTER_TYPE_SHOW_ALL = 'show-all';

    const navigationLink = document.querySelectorAll('a.navigation-content-link');

    if (navigationLink) {
        navigationLink[0].addEventListener('click', function(event) {
            event.preventDefault();

            const hrefValue = event.target.getAttribute('href');
            localStorage.removeItem('filter-type');
            window.location = hrefValue;
        });

        navigationLink[1].addEventListener('click', function(event) {
            event.preventDefault();

            const hrefValue = event.target.getAttribute('href');
            const filterType = event.target.getAttribute('data-project-type');

            localStorage.setItem('filter-type', filterType);
            window.location = hrefValue;
        });
    }

});