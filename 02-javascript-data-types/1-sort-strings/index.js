/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortArr = arr.slice();

  if(param === 'desc'){
    sortArr.sort(compareStringDesc);
  }
  else{
    sortArr.sort(compareString);
  }
  return sortArr;
}

function compareString(str1, str2) {
  return str1.localeCompare(
    str2,
    ['ru', 'en'],
    {caseFirst: 'upper'});
}

function compareStringDesc(str1, str2) {
  return -compareString(str1, str2);
}
