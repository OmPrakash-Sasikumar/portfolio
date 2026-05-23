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