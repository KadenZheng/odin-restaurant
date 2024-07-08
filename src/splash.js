import splashImage from "../assets/splash/image.png";

const generateSplash = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const splash = document.createElement("div");
    const text = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    title.innerHTML = "All-time <span>highest</span> rated recipes.";
    const desc = document.createElement("h5");
    desc.innerHTML = "Take a look at the hand picked recipes curated by <span>Odin himself</span>. Our selection includes everything from appetizers to meals to desserts.";
    img.src = splashImage;
    splash.classList.add("splash");
    text.classList.add("text");
    content.appendChild(splash);
    splash.appendChild(text);
    splash.appendChild(img);
    text.appendChild(title);
    text.appendChild(desc);
};

export default generateSplash;
