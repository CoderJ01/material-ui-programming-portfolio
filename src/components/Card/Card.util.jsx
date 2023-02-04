const colorOfCheck = (dataObj) => {
    let color;

    if(dataObj.language.proficiency === 3) {
        color = "primary"
    }
    else if(dataObj.language.proficiency === 2) {
        color = "green"
    }
    else {
        color = "yellow"
    }

    return color;
}

export default colorOfCheck;