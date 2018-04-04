export function objectsEquivalent(object1, object2) {
    // Create arrays of property names
    if (object1 === null || object1 === undefined || object2 === null || object2 === undefined) { return false; }
    var object1Props = Object.getOwnPropertyNames(object1);
    var object2Props = Object.getOwnPropertyNames(object2);

    // If number of properties is different,
    // objects are not equivalent
    if (object1Props.length != object2Props.length) {
        return false;
    }

    for (var i = 0; i < object1Props.length; i++) {
        var propName = object1Props[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (object1[propName] !== object2[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
