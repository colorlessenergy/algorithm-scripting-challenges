function whatIsInAName(collection, source) {
    var arr = [];
    collection.forEach(function (current, index) {
        var collectionToString = JSON.stringify(current)
        var string = '';
        for (var ind in source) {
            string += ind + ":" + source[ind] + ".*"
        }

        string = string.slice(0, string.length-2)
        // remove spaces and all quotes from the string
        // To make it easier to compare with the object that was
        // transformed into a string
        collectionToString = collectionToString.replace(" ", "")
        collectionToString = collectionToString.replace(/"/g, "")

        
        var regex = new RegExp(string);

        if (collectionToString.match(regex) ){
            arr.push(collection[index])
        }
    })
    return arr;
  }
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) 
//   should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) 
// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].