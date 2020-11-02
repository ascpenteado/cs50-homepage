window.addEventListener("load", () => {
    const currentLocation = window.location.pathname;
    const menuLinks = document.getElementById("main-menu").children;
    const links = [...menuLinks];
    console.log(links);
    links.forEach((link) => {
        if (link.pathname === currentLocation) {
            console.log("matches!");
            console.log(link.className);
            link.classList.add("active");
        }
    });
});
