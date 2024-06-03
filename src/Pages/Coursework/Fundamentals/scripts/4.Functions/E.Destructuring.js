/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructuring");

const readPerson = ({first, last, email, colors}) => {
    // const { first, last, email, colors } = personObj;
    console.log(`Hey ${first} ${last}, your email is: ${email}`);

    console.log('Your favorite colors are:');

    colors.forEach((color, idx) => {
        console.log(color);
});
};

const person1 = {
    first: "Sam",
    last: "Kowitch",
    email: "sammyjkow1@gmail.com"
    colors: ["red", "green", "blue"],
};
const person2 = {
    first: "Grace",
    last: "Kowitch",
    email: "sammyjkow1@gmail.com"
    colors: ["cyan", "magenta", "yellow"],
};

readPerson(person1);
readPerson(person1);


console.grouEnd();