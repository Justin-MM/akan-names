const maleAkanNames = {
    0: "Kwasi",
    1: "Kwadwo",
    2: "Kwabena",
    3: "Kwaku",
    4: "Yaw",
    5: "Kofi",
    6: "Kwame"
}

const femaleAkanNames = {
    0: "Akosua",
    1: "Adwoa",
    2: "Abenaa",
    3: "Akua",
    4: "Yaa",
    5: "Afua",
    6: "Ama"
}

const akanNames = {
    male: maleAkanNames,
    female: femaleAkanNames
};

const getAkanName = (gender, dateOfBirth) => {

    // validate input
    if (!gender && gender.toLowerCase() !== "male" || gender.toLowerCase() != "female") {
        return false
    }

    const parsedDate = parseDateOfBirth(dateOfBirth);
    // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    const dayOfWeek = (((parsedDate[2]/4) -2*parsedDate[2]-1) + ((5*parsedDate[3]/4) ) + ((26*(parsedDate[1]+1)/10)) + parsedDate[0] ) % 7;
    return akanNames[gender][dayOfWeek];
}

const parseDateOfBirth = (dateOfBirth) => {
     /*
        CC - is the century digits. For example 1989 has CC = 19
        YY - is the Year digits (1989 has YY = 89)
        MM -  is the Month
        DD - is the Day of the month 
    */
    const dateStringArray = dateOfBirth.split("/");
    const CC = dateStringArray[2].subString(0, 2);
    const YY = dateStringArray[2].subString(2);
   
   return [dateStringArray[0], dateStringArray[1], CC, YY];
}

export default getAkanName;