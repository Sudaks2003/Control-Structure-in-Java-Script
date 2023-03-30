const ageString = prompt('Type your age: ');
const age = Number(ageString);

if (age >= 18) {
    document.write('You have legal age, user authorized.');
} else if (age >= 12) {
    document.write('You are underage, user unauthorized.');
} else {
    document.write('You are a child, user unauthorized.');
}

document.write('<br>');

switch (age) {
    case 16:
        document.write('Can go back');
        break;
    case 18:
        document.write('Can drink and drive, not at the same time!')
        break;
    case 65:
        document.write('Can take the bus for free!');
        break;
    default:
        document.write("You're screwed");
        break;   
}