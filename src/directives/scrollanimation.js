const animationScrollObserver = new IntersectionObserver(
    (entries, animationScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter');
                animationScrollObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -200px 0px" }
);

export default {
    bind(el) {
        el.classList.add('before-enter');
        animationScrollObserver.observe(el);
    }
}