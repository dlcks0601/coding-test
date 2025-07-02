function solution(my_string, letter) {
  let result = '';
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== letter) {
      result += my_string[i];
    }
  }
  return result;
}

// function solution(my_string, letter) {
//     return my_string.replaceAll(letter, "");
// }

// function solution(my_string, letter) {
//     return my_string.replace(new RegExp(letter, "g"), "");
// }
