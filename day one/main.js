// toDo, find a way to do it with functional programming methods
// like map, reduce, filter, some, every... 
const fs = require('fs');

fs.readFile("./finalFloor.txt", (err, content) => {
    console.time("time");
    if (err) throw err;
    // part one
    const floors = content.toString()
    const splitFloors = floors.split('');
    const filteredUp = splitFloors.filter(val => val.includes("(")).length;
    const filteredDown = splitFloors.filter(val => val.includes(")")).length;
    console.log("Santa needs to go to the floor", filteredUp - filteredDown);

    //part two
    let pos = 0;
    for (let i = 0; i < floors.length; i++) {
        if (floors.charAt(i) === ')') {
            pos--
        } else {
            pos++
        }
        if (pos < 0) {
            console.log("Santa enters the basement at position:", i + 1)
            break;
        }
    }


    console.timeEnd("time");
});

