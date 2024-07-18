function countAllFromTown(registrationNumbers, town) {
    const regNumbersArray = registrationNumbers.split(',');
    let count = 0;
    for (let i = 0; i < regNumbersArray.length; i++) {
        if (regNumbersArray[i].trim().startsWith(town)) {
            count++;
        }
    }
    return count;
}


let registrationNumbers = ("CL 124,CY 567,CL 345, CJ 456,CL 341','CL");
let town = "CL";
let result 