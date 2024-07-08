import src1Img from "../assets/kaden/src1.png";
import src2Img from "../assets/kaden/src2.png";
import src3Img from "../assets/kaden/src3.png";

let content = document.querySelector("#content");

let aboutText = [
    `Hey! My name is <span>Kaden</span>. I'm currently studying Computer Science and learning how to build full-stack web applications on my own. Thanks for checking
    it out!`,
    ``,
    `Currently, I'm learning how to use <span>modules</span> to compartmentalize code. Hopefully I will send this to some friends.`,
];

let imageSources = [src1Img, src2Img, src3Img];

const generateAbout = (reset) => {
    if (reset) {
        content.innerHTML = "";
    }

    let title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = "About Us";
    content.appendChild(title);

    let grid = document.createElement("div");
    grid.classList.add("grid");
    content.appendChild(grid);

    for (let i = 0; i < aboutText.length; i++) {
        let desc = document.createElement("div");
        desc.classList.add("about-text");
        desc.innerHTML = aboutText[i];
        grid.append(desc);
    }

    for (let i = 0; i < imageSources.length; i++) {
        let image = document.createElement("img");
        image.src = imageSources[i];
        image.alt = `kaden${i}`;
        grid.append(image);
    }
};

export default generateAbout;
