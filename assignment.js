// https://github.com/apufouzder/basic-javascript

// 1. kilometerToMeter problem solving

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 1) {
        //Check if is negative value.
        return ("Distance can't be negative.");
    }
    return meter;
}


// 2. budgetCalculator problem solving

function budgetCalculator(watch, phone, laptop) {
    var firstProduct = 50 * watch;
    var secondProduct = 100 * phone;
    var thirdProduct = 500 * laptop;
    var totalCost = firstProduct + secondProduct + thirdProduct;
    if (watch < 1 && phone < 1 && laptop < 1) {
        //When all the negative values will be given.
        return "Sorry, you can't purchase these products.";
    }
    return totalCost;
}


// 3. hotelCost problem solving

function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstPart = day * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    } else {
        var firstPart = day * 100;
        var secondPart = day * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    } if (day < 1) {
        //This will be the output when the value of less than 1 is given in the day parameter.
        return "Room rent for less than 1 day will not be given.";
    }
    return cost;
}


// 4. megaFriend problem solving

function megaFriend(friendName) {
    var lergth = 0;
    var longestName;
    for (var i = 0; i < friendName.length; i++) {
        if (friendName[i].length > lergth) {
            var lergth = friendName[i].length;
            longestName = friendName[i];
        }
    } if (friendName <= []) {
        //This will output when the array is empty.
        return "There are no friends inside.";
    }
    return longestName;
}



