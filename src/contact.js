import odinClipart from "../assets/splash/odin-clipart.png";

let content = document.querySelector("#content");

const formFields = [
    { label: "First name:", id: "fname", type: "text" },
    { label: "Last name:", id: "lname", type: "text" },
    { label: "Email:", id: "email", type: "email" },
];

const generateContact = (reset) => {
    if (reset) {
        content.innerHTML = "";
    }

    let contact = document.createElement("div");
    contact.classList.add("contact");
    content.appendChild(contact);

    let contact_left = document.createElement("div");
    contact_left.classList.add("contact-left");
    contact.appendChild(contact_left);

    let contact_right = document.createElement("div");
    contact_right.classList.add("contact-right");
    contact.appendChild(contact_right);

    let contact_title = document.createElement("h1");
    contact_title.classList.add("contact-title");
    contact_title.innerHTML = "Contact Us";
    contact_left.appendChild(contact_title);

    let contact_description = document.createElement("h5");
    contact_description.classList.add("contact-description");
    contact_description.innerHTML = "Fill out the form, and we will send out a <span>recipe</span> to your email address!";
    contact_left.appendChild(contact_description);

    let form = document.createElement("form");

    formFields.forEach((field) => {
        let label = document.createElement("label");
        label.setAttribute("for", field.id);
        label.textContent = field.label;
        form.appendChild(label);
        form.appendChild(document.createElement("br"));

        let input = document.createElement("input");
        input.setAttribute("type", field.type);
        input.setAttribute("id", field.id);
        input.setAttribute("name", field.id);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    });

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    contact_left.appendChild(form);

    let splash = document.createElement("img");
    splash.src = odinClipart;
    splash.alt = "odin";
    contact_right.appendChild(splash);

    if (!reset) {
        contact_right.style.backgroundColor = "rgba(0, 0, 0, 0)";
    } else {
        contact_right.style.backgroundColor = "rgba(241, 225, 201, 0.558)";
    }
};

export default generateContact;
