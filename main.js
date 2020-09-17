const progress = document.querySelectorAll(".progress");

progress.forEach(e => {
    setTimeout(() => {
        e.style.opacity = '1';
        const target = e.style.width = e.getAttribute("data-target") + "%";
        e.innerText = target;
    }, 100);
});