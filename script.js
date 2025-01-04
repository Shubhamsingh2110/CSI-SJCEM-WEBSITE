 //Function to check if element is in viewport
 function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top <= windowHeight * 0.8 && // Element is 80% visible from top
        rect.bottom >= windowHeight * 0.2  // Element is 20% visible from bottom
    );
}

// Function to handle scroll events
function handleScroll() {
    const rocket = document.querySelector('.rocket');
    const containers = document.querySelectorAll('.containerrr');
    const timeline = document.querySelector('.timeline');
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Move rocket based on scroll position, but limit its movement
    const maxBottom = window.innerHeight - 80; // 80px from top of viewport
    const minBottom = 20; // 20px from bottom of viewport
    const newBottom = Math.min(maxBottom, Math.max(minBottom, 20 + (scrollPercentage * 2)));
    rocket.style.bottom = `${newBottom}px`;

    // Expand timeline based on scroll direction
    if (scrollPercentage > 50) {
        timeline.style.height = `${scrollPercentage}%`;
    } else {
        timeline.style.height = `${100 - scrollPercentage}%`;
    }

    // Check each timeline container
    containers.forEach(container => {
        if (isInViewport(container)) {
            container.classList.add('fade-in');
            container.classList.remove('fade-out');
        } else {
            container.classList.remove('fade-in');
            container.classList.add('fade-out');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

//Initial check for elements in viewport
handleScroll();
