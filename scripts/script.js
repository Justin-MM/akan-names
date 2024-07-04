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

const akanNames = {
    male: maleAkanNames,
    female: femaleAkanNames
};

const getAkanName = (gender, dateOfBirth) => {

    // validate input
    if (gender && (gender === "Male" || gender === "Female")) {
        const parsedDate = parseDateOfBirth(dateOfBirth);
        console.log(parsedDate);
        if (parsedDate === false) {
            return false;
        }
        const birthday = new Date(parsedDate[2], parsedDate[1] - 1, parsedDate[0]);
        const dayOfWeek = birthday.getDay();
        return akanNames[gender.toLowerCase()][dayOfWeek];
    }

    return false;
}

const parseDateOfBirth = (dateOfBirth) => {    
    const dateStringArray = dateOfBirth.split("/");
    return [parseInt(dateStringArray[0]), parseInt(dateStringArray[1]), parseInt(dateStringArray[2])];
}

module.exports = getAkanName;