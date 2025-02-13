문제
두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.

### study

소수점 9자리까지 출력
여기서 추가로 알면 좋은 메소드

1. round(number, ndigits)

- 기능 : 소수를 반올림하여 지정된 자릿수까지 반환
- 매개변수
  - number : 반올림할 숫자
  - ndigits : 반올림할 소수점 자릿수 (음수 가능)

```python
print(round(3.14159, 2)) # 3.14
print(round(12345, -2)) # 12300
```

2. format(value, spec)

- 기능 : 숫자를 문자열로 변환하면서 특정 포맷을 적용합니다.
- 매개변수
  - value : 포맷팅할 숫자
  - spec : 포맷 규칙 (예: .nf는 소수점 n자리까지)

```python
print(format(3.14159, ".2f"))  # '3.14'
print(format(2.71828, ".3f"))  # '2.718'
```

3. f-string (formatted string literals)

- 기능 : f-string을 사용해 간단히 소수점 자릿수를 지정할 수 있습니다.

```python
value = 3.14159
print(f"{value:.2f}")  # 3.14
```

4.  `math.floor()`

- **기능**: 숫자의 소수점 이하를 내림하여 가장 큰 정수로 반올림합니다.
- **필요한 모듈**: `math`.

```python
import math
print(math.floor(3.9))  # 3
print(math.floor(-3.1)) # -4
```

5. `math.ceil()`

- **기능**: 숫자의 소수점 이하를 올림하여 가장 작은 정수로 반올림합니다.
- **필요한 모듈**: `math`.

```python
import math
print(math.ceil(3.1))   # 4
print(math.ceil(-3.9))  # -3
```

6. `math.trunc()`

- **기능**: 소수점 이하를 자르고 정수만 반환합니다.
- **필요한 모듈**: `math`.

```python
import math
print(math.trunc(3.9))   # 3
print(math.trunc(-3.9))  # -3
```

7.  `Decimal` 모듈

- **기능**: 소수점 이하의 정밀도를 높이고, 반올림 방법을 세밀하게 제어할 수 있습니다.
- **필요한 모듈**: `decimal`.

```python
from decimal import Decimal, ROUND_HALF_UP
value = Decimal("3.14159")
print(value.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP))  # 3.14
```

8.  `str.format()`

- **기능**: 문자열 포맷팅으로 소수점 자릿수를 제어합니다.

```python
print("{:.2f}".format(3.14159))  # 3.14
print("{:.3f}".format(2.71828))  # 2.718
```

9. `int()`

- **기능**: 소수점을 제거하고 정수로 변환합니다.
- **설명**: 소수점 아래를 단순히 버립니다.

```python
print(int(3.9))   # 3
print(int(-3.9))  # -3
```

10. `float()`

- **기능**: 정수나 문자열을 실수로 변환합니다.

```python
print(float(3))      # 3.0
print(float("3.14")) # 3.14
```
