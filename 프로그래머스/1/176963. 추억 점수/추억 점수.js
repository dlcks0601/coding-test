function solution(name, yearning, photo) {
  const scoreMap = new Map();
  for (let i = 0; i < name.length; i++) {
    scoreMap.set(name[i], yearning[i]);
  }

  return photo.map((group) =>
    group.reduce((sum, person) => sum + (scoreMap.get(person) || 0), 0)
  );
}