const CheckColor = (proficiency) => {
    let color;

    if(proficiency === 3) {
        color = "primary"
    }
    else if(proficiency === 2) {
        color = "green"
    }
    else {
        color = "yellow"
    }

    return color;
}

export default CheckColor;