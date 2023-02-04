const CheckColor = (proficiency) => {
    let color;

    if(proficiency === 3) {
        color = "rgb(0, 102, 225)"
    }
    else if(proficiency === 2) {
        color = "green"
    }
    else {
        color = "rgb(223, 217, 29)"
    }

    return color;
}

export default CheckColor;