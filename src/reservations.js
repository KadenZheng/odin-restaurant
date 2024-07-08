let content = document.querySelector("#content");

const generateReservations = () => {
    let title = document.querySelector("h3");
    title.innerHTML = "";
    title.innerHTML = "No current <span>reservations</span>.";
    let description = document.querySelector("div.text > h5");
    description.innerHTML = "";
    description.innerHTML = "If you would like to book a reservation, please head to the <span>Contact Us</span> page.";
};

export default generateReservations;
