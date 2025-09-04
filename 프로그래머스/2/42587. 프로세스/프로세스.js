function solution(priorities, location) {
  // 1. 프로세스 정보를 큐에 저장 (인덱스, 우선순위)
  const queue = priorities.map((priority, index) => ({
    index: index,
    priority: priority,
  }));

  console.log(queue);

  let count = 0; // 실행 순서

  while (queue.length > 0) {
    // 2. 큐에서 첫 번째 프로세스 꺼내기
    const current = queue.shift();
    // 3. 큐에 더 높은 우선순위가 있는지 확인
    const hasHigherPriority = queue.some(
      (process) => process.priority > current.priority
    );

    if (hasHigherPriority) {
      // 4. 더 높은 우선순위가 있으면 다시 큐에 넣기
      queue.push(current);
    } else {
      // 5. 실행할 수 있으면 실행 순서 증가
      count++;

      // 6. 찾고 있는 프로세스인지 확인
      if (current.index === location) {
        return count;
      }
    }
  }
}