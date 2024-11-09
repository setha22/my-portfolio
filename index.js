


const observer = new IntersectionObserver((entires) => {
 entires.foreach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
        entry.target.classList.add('.show');
    }
 });
});
const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));
