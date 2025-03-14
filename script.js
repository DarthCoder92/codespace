lsdocument.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted with values:', { name, email, message });

        if (name && email && message) {
            alert('Thank you for your message, ' + name + '!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function toggleMenu() {
        const menu = document.getElementById('nav-menu');
        console.log('Toggle menu:', menu.style.display);
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }

    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    // Filter feature for projects section
    const filterInput = document.getElementById('filter-input');
    const projects = document.querySelectorAll('.project');

    if (filterInput && projects) {
        filterInput.addEventListener('input', function() {
            const filterValue = filterInput.value.toLowerCase();
            console.log('Filter input changed:', filterValue);
            projects.forEach(function(project) {
                const projectName = project.querySelector('.project-name').textContent.toLowerCase();
                if (projectName.includes(filterValue)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    }

    // Lightbox effect for project images
    const projectImages = document.querySelectorAll('.project img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    projectImages.forEach(image => {
        image.addEventListener('click', () => {
            console.log('Image clicked:', image.src);
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', () => {
        console.log('Lightbox clicked');
        lightbox.classList.remove('active');
    });
});