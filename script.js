document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.id = 'theme-toggle';
    toggleButton.textContent = 'Switch to Dark Mode';
    document.body.appendChild(toggleButton);

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check local storage or system preference
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            toggleButton.textContent = 'Switch to Light Mode';
        } else {
            toggleButton.textContent = 'Switch to Dark Mode';
        }

        localStorage.setItem('theme', theme);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const swipers = document.querySelectorAll('.elementor-image-carousel-wrapper');
    swipers.forEach((container) => {
        const widget = container.closest('.elementor-widget-image-carousel');
        if (!widget) return;

        // Look for custom nav buttons inside the widget OR near the container
        // Since we injected them inside the .elementor-widget-image-carousel but potentially outside wrapper?
        // My injection script replaced <div class="swiper-pagination"></div> with <div class="swiper-pagination"></div> + nav_html
        // So they are inside the .elementor-image-carousel-wrapper.

        const nextEl = widget.querySelector('.custom-next');
        const prevEl = widget.querySelector('.custom-prev');
        const paginationEl = widget.querySelector('.swiper-pagination');

        new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
            pagination: {
                el: paginationEl,
                clickable: true,
            },
        });
    });
});
// Custom Lightbox Implementation
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create the lightbox elements dynamically
    const lightbox = document.createElement('div');
    lightbox.id = 'custom-lightbox';
    lightbox.innerHTML = `
        <button id="custom-lightbox-close">&times;</button>
        <button class="lightbox-nav lightbox-prev">&#10094;</button>
        <button class="lightbox-nav lightbox-next">&#10095;</button>
        <img src="" alt="Full Screen Image">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('#custom-lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    // State for navigation
    let currentImages = []; // Array of sources
    let currentIndex = 0;

    // 2. Function to open lightbox
    function openLightbox(src, imageList = []) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll

        // Setup navigation state
        currentImages = imageList;
        currentIndex = currentImages.indexOf(src);
        if (currentIndex === -1 && currentImages.length > 0) currentIndex = 0;

        updateNavVisibility();
    }

    function updateNavVisibility() {
        if (currentImages.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    }

    function showNext() {
        if (currentImages.length === 0) return;
        currentIndex = (currentIndex + 1) % currentImages.length;
        lightboxImg.src = currentImages[currentIndex];
    }

    function showPrev() {
        if (currentImages.length === 0) return;
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        lightboxImg.src = currentImages[currentIndex];
    }

    // 3. Function to close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Enable scroll
        setTimeout(() => { lightboxImg.src = ''; }, 300); // Clear after fade out
    }

    // 4. Attach Events
    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    // 5. Attach Open Events using Delegation
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.elementor-image-carousel a');
        if (link) {
            e.preventDefault();

            const img = link.querySelector('img');
            const targetSrc = (img && img.src) ? img.src : link.getAttribute('href');

            if (targetSrc) {
                // Collect siblings for navigation
                const widget = link.closest('.elementor-widget-image-carousel');
                // Select only unique slides to avoid duplicates in navigation
                const allLinks = Array.from(widget.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate) a img'));

                // If the clicked one is a duplicate, we need to map it to the unique list.
                // The filename should be reliable.
                const imageList = allLinks.map(i => i.src);

                // If our targetSrc came from a duplicate, it might still match by string value.
                openLightbox(targetSrc, imageList);
            }
        }
    });
});
