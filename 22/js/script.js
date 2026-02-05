document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px 0px -100px 0px', threshold: 0 });

        reveals.forEach(el => observer.observe(el));
    } else {
        // Fallback بسيط إذا لم يدعم المتصفح IntersectionObserver
        reveals.forEach(el => el.classList.add('active'));
    }
});