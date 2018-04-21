const fs = require('fs');

// Santa starts at floor 0
// ( Go up 1 floor
// ) Go down 1 floor
//  (()) and()() both result in floor 0.
//  (((and(()(()(both result in floor 3.
//  ))(((((also results in floor 3.
//  ()) and))(both result in floor - 1(the first basement level).
//  ))) and ) ()) ()) both result in floor - 3.

// To what floor do the instructions take Santa ?

fs.readFile("./finalFloor.txt", (err, content) => {
    console.time("time");
        if (err) throw err;
    const floors = content.toString().split('');
    const filteredUp = floors.filter(val => val.includes("(")).length;
    const filteredDown = floors.filter(val => val.includes(")")).length;
    console.log(filteredUp - filteredDown);
    console.timeEnd("time");
});

