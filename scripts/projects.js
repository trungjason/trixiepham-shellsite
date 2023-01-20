document.addEventListener("DOMContentLoaded", function (event) {
    const FILTER_TYPE_GRAPHIC_DESIGN = 'graphic-design';
    const FILTER_TYPE_UI_UX_DESIGN = 'ui-ux-design';
    const FILTER_TYPE_WEBSITE_DEVELOPMENT = 'website-development';
    const FILTER_TYPE_SHOW_ALL = 'show-all';

    const filterProjectsButton = document.querySelectorAll('ul.projects-sidebar-list li.projects-sidebar-list-item');
    const allProject = document.querySelectorAll('.project-detail-item');

    // Check Data In LocalStorage 
    const localFilterType = localStorage.getItem('filter-type');
    if (localFilterType) {

        // Read data from localStorage and show equivalent project
        allProject.forEach(function (project) {
            const projectType = project.getAttribute('data-project-type');

            if (projectType.includes(localFilterType) || localFilterType === FILTER_TYPE_SHOW_ALL) {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }
        });

        // Add active class to equivalent li tag
        filterProjectsButton.forEach(function (button) {
            if (button.getAttribute('data-project-type').includes(localFilterType)) {
                button.children[0].classList.add('active');
                return;
            }

            button.children[0].classList.remove('active');
        });
    }

    const handleFilterProject = function (event) {
        if (event.target !== this) {
            return;
        }

        const filterType = event.target.getAttribute('data-project-type');

        allProject.forEach(function (project) {
            const projectType = project.getAttribute('data-project-type');

            if (filterType === FILTER_TYPE_SHOW_ALL) {
                project.style.display = 'flex';
                return;
            }

            if (projectType.includes(filterType)) {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }

        });

        // Add active class to equivalent li tag
        filterProjectsButton.forEach(function (button) {
            button.children[0].classList.remove('active');
            return;
        });

        event.target.children[0].classList.add('active');
        localStorage.setItem('filter-type', filterType);
    }

    filterProjectsButton.forEach(function (button) {
        button.addEventListener('click', handleFilterProject);
    });
});