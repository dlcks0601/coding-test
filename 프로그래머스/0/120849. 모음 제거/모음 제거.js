function solution(my_string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return my_string
    .split('')
    .filter((ch) => !vowels.includes(ch))
    .join('');
}

// function solution(my_string) {
//     return my_string.replace(/[aeiou]/g, "");
// }

// function solution(my_string) {
//     let result = "";
//     for (let i = 0; i < my_string.length; i++) {
//         const ch = my_string[i];
//         if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
//             result += ch;
//         }
//     }
//     return result;
// }
