// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", () =>{
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.2   // Trigger when 20% of the section is visible
    };
});

const revealOnScroll = new IntersectionObserver((entries, revealOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("active");
            ResizeObserver.unobserve(entry.target);//Animate only once}
        }
    });
}, options);

sections.forEach(section => {
    revealOnScroll.observe(section);
});