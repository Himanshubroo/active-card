// Active button 
function active() {
    let btn = document.querySelector(".card button");
    let type = document.querySelector(".card h5")
    let img = document.querySelector(".card img")
    let flag = 0

    btn.addEventListener("click", function () {
        if (flag == 0) {
            type.innerHTML = "Friend";
            type.style.color = "green";
            img.style.border = "5px solid green";
            flag = 1;
        } else {
            type.innerHTML = "Strange"
            type.style.color = "red"
            img.style.border = "5px solid red"
            flag = 0
        }
    });
}

active();

// gasp animation 
function anima() {
    gsap.from("nav", {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power2.out"
    });


    gsap.from(".card", {
        duration: 1,
        scale: 0,
        ease: "back.out(1.7)",
        opacity: 0,
        stagger: 0.2
    });

    gsap.from(".card img", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".card h2", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".card h5", {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".card button", {
        duration: 1,
        scale: 0,
        ease: "bounce.out",
        opacity: 0
    });
}

anima();