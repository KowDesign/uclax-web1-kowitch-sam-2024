/*===================================
||
|| Functions: Tagged Template String Functions
||
===================================*/
console.group("Functions: Tagged Template String Funtions");

const myTaggedTmpStrFn = (strings, ...values) => {
    return `${strings[0]} ${values[0]} ${strings[1]}`;
};

const locations = "pool";

const result = myTaggedTmpStrFn`I went tot the ${location} yesterday.`;

console.log(result);
console.groupEnd();
