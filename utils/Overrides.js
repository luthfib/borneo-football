import flattenObject from './Flatten'

let overrideDefault = function(theme, defaultClass) {
    let combined = null;
    if (theme) {
        let overrideClasses = Object.values(theme).map(function (entry) {
            let temp = {};
            temp[entry] = true;
            return temp;
        });
        combined = flattenObject({defaultClass, ...overrideClasses });
    } else {
        combined = defaultClass;
    }
    return combined
}

export default overrideDefault;