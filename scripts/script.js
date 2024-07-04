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
    /*
       CC - is the century digits. For example 1989 has CC = 19
       YY - is the Year digits (1989 has YY = 89)
       MM -  is the Month
       DD - is the Day of the month 
   */
    
    return [parseInt(dateStringArray[0]), parseInt(dateStringArray[1]), dateStringArray[2]];
}

module.exports = getAkanName;