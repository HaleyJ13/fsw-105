//ES 6 assignment

const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
    return arr.map(carrot => {
        return {type: "carrot", name: carrot}
    });

}

console.log(mapMyVegetables([carrots]));