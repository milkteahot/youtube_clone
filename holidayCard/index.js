const icons = document.querySelectorAll(".decorations .icon--draggable");
const card = document.querySelector(".card__inner");
const background = document.querySelector("#background");
const color = document.querySelector("#color");
const body = document.querySelector("body");
let newIcon;

const startDrag = (icon) => {
    newIcon = icon.cloneNode(true);
    newIcon.style.position = "absolute";
    card.appendChild(newIcon);
    gsap.to(newIcon, {
        fontSize: 70,
        ease: "power1.out"
    });
    window.addEventListener("mousemove", moveDrag);
    window.addEventListener("touchmove", moveDrag);
    body.style.cursor = "grabbing";
};

const moveIcon = (e) => {
    newIcon = e.target.closest(".icon");
    window.addEventListener("mousemove", moveDrag);
    window.addEventListener("touchmove", moveDrag);
    body.style.cursor = "grabbing";
};

const moveDrag = (e) => {
    const x = e.clientX ? e.clientX : e.targetTouches[0].clientX;
    const y = e.clientY ? e.clientY : e.targetTouches[0].clientY;
    console.log(e)
    gsap.to(newIcon, {
        x,
        y,
        ease: "power1.out"
    });
};

const endDrag = () => {
    window.removeEventListener("mousemove", moveDrag);
    window.removeEventListener("touchstart", moveDrag);
    if (newIcon) {
        console.log(newIcon);
        newIcon.addEventListener("mousedown", moveIcon);
        newIcon.addEventListener("touchstart", moveIcon);
        const plus = newIcon.querySelector('button[data-type="+"]');
        const minus = newIcon.querySelector('button[data-type="-"]');
        const rotate = newIcon.querySelector('button[data-type="rotate"]');
        plus.addEventListener("click", () => {
            gsap.to(newIcon, {
                fontSize: "+=16"
            });
        });
        minus.addEventListener("click", () => {
            gsap.to(newIcon, {
                fontSize: "-=16"
            });
        });
        rotate.addEventListener("click", () => {
            gsap.to(newIcon, {
                rotate: "+=36deg"
            });
        });
    }
    body.style.cursor = "unset";
};

icons.forEach((icon) => {
    icon.addEventListener("mousedown", () => {
        startDrag(icon);
    });
    icon.addEventListener("touchstart", () => {
        startDrag(icon);
    });
});
window.addEventListener("mouseup", endDrag);
window.addEventListener("touchend", endDrag);

// colors:
background.addEventListener("input", () => {
    gsap.to(card, {
        background: background.value
    });
});
color.addEventListener("input", () => {
    gsap.to(card, {
        color: color.value
    });
});
