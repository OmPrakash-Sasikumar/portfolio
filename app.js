const roles = [

    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Designer"

];

let roleIndex = 0;

let charIndex = 0;

const typing =
document.getElementById("typing");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typing.innerHTML +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typing.innerHTML =
        roles[roleIndex].substring(
        0,
        charIndex-1
        );

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;

        }

        setTimeout(typeEffect,500);

    }

}

typeEffect();

window.onload = function(){

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },

            color: {
                value: "#8b5cf6"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3
            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#8b5cf6",

                opacity: 0.4,

                width: 1

            },

            move: {

                enable: true,

                speed: 2

            }

        },

        interactivity: {

            events: {

                onhover: {
                    enable: true,
                    mode: "grab"
                }

            }

        },

        retina_detect: true

    });

}

const hiddenElements =
document.querySelectorAll(
".projects, .skills, .about, .contact, .achievements"
);

window.addEventListener("scroll", () => {

    hiddenElements.forEach(el => {

        const position =
        el.getBoundingClientRect().top;

        const screenPosition =
        window.innerHeight / 1.2;

        if(position < screenPosition){

            el.classList.add("show");

        }

    });

});