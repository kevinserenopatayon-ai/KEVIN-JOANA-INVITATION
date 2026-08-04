const pages = document.querySelectorAll(".page");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

pages.forEach(page=>{
    observer.observe(page);
});
