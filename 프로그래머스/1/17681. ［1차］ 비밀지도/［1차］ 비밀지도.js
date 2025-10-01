function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    let bin1 = arr1[i].toString(2).split('');
    let bin2 = arr2[i].toString(2).split('');

    // 길이 n까지 앞쪽을 0으로 채우기 (for + if 조합)
    const need1 = n - bin1.length;
    if (need1 > 0) {
      for (let k = 0; k < need1; k++) bin1.unshift('0');
    }

    const need2 = n - bin2.length;
    if (need2 > 0) {
      for (let k = 0; k < need2; k++) bin2.unshift('0');
    }

    // 두 지도의 해당 비트 중 하나라도 1이면 '#', 둘 다 0이면 ' '
    let row = '';
    for (let j = 0; j < n; j++) {
      row += (bin1[j] === '1' || bin2[j] === '1') ? '#' : ' ';
    }

    answer.push(row);
  }

  return answer;
}