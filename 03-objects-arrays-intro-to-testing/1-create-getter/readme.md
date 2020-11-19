```javascript
/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
function createGetter(path) {
  const pathArray = path.split('.');

  return obj => {
    let result = obj;

    for (let item of pathArray) {
      const objProperty = result[item];

      result = objProperty;

      if (typeof objProperty === 'undefined') {
        break;
      }
    }

    return result;
  };
}
```

```javascript
/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export const createGetter = path => {
  const pathArray = path.split('.');

  return obj => {
    let result = obj;

    const getValue = arr => {
      if (!arr.length || !result) {
        return result;
      }

      result = result[arr.shift()];

      return getValue(arr);
    };

    // NOTE: prevent mutation of pathArray
    return getValue([...pathArray]);
  };
}
```
