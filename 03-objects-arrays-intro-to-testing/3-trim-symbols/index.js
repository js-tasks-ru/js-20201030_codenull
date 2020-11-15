/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  if(!string) return "";

  let i = 0;
  let trimString = "";
  let buffer     = "";
  let curentChar = "";

  do{
    if(curentChar !== string[i]){
      curentChar = string[i];
      trimString += buffer.slice(0, size);
      buffer = "";
    }

    buffer += string[i];
    i++;
  } while(i <= string.length);

  return trimString;
}
