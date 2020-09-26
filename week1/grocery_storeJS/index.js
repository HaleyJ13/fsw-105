var shopper = {
    firstName: "Jack",
    lastName: "Black",
    id :     5566,
    onlineShopping: true,
    groceryCart: ["bread", "milk", "water"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(shopper.fullName());