const maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const akanNames = {
    male: maleAkanNames,
    female: femaleAkanNames
};

const getAkanName = (gender, dateOfBirth) => {
    console.log(`received input gender: ${gender} and dateOfBirth: ${dateOfBirth}`);
    // validate input
    if (gender && (gender === "Male" || gender === "Female")) {
        const parsedDate = parseDateOfBirth(dateOfBirth);
        console.log(parsedDate);
        if (parsedDate === false) {
            return false;
        }
        const birthday = new Date(parsedDate[2], parsedDate[1] - 1, parsedDate[0]);
        const dayOfWeek = birthday.getDay();
        return [days[dayOfWeek], akanNames[gender.toLowerCase()][dayOfWeek]];
    }

    return false;
}

const parseDateOfBirth = (dateOfBirth) => {
    const dateStringArray = dateOfBirth.split("-");
    return [parseInt(dateStringArray[2]), parseInt(dateStringArray[1]), parseInt(dateStringArray[0])];
}

// handle submit click
const handleAkanQuerySubmit = (event) => {
    event.preventDefault();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dateOfBirth = document.getElementById('birthdate').value;
    const response = getAkanName(gender, dateOfBirth);
    console.log(response);
    const modal = document.getElementById("modal-wrapper");
    console.log(modal);
    modal.style.display = "block";
    if (response) {
        document.querySelector("span#dayOfTheWeekText").innerHTML = response[0];
        document.querySelector("span#akan-name").innerHTML = response[1];
    }
    document.querySelector("input#birthdate").value = null;
    document.querySelector('input[name="gender"]:checked').checked = false;
}

// When the user clicks on <span> (x), close the modal
const handleModalClose = () => {
    const modal = document.getElementById("modal-wrapper");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    const modal = document.getElementById("modal-wrapper");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener("load", () => {
    document.querySelector("form#akan-query-detail-form").addEventListener("submit", handleAkanQuerySubmit);
    document.getElementsByClassName("close")[0].addEventListener("click", handleModalClose)
});

module.exports = getAkanName;

