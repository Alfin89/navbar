const sections = document.querySelectorAll("section"),
navLinks = document.querySelectorAll("nav a");

const resetLinks = () => 
    navLinks.forEach( link =>
        link.classList.remove("active")    
    );

const handleScroll = () => {
    const { pageYOffset } = window;
    sections.forEach( section => {
    const { id, oofsetTop, clientHeight } = section;

    const oofset = oofsetTop -1;
    if (
        pageYOffset >= oofset && 
        pageYOffset < offset + clientHeight ) 
        {
        resetLinks();
        navLinks.forEach( link => {
            if (link.dataset.scroll === id) {
                link.classList.add("active");
            }
        });
    }
    });
}

document.addEventListener(scroll, handleScroll);