
def robot_simulation(commands):
    # 초기 위치 및 방향 (위쪽 방향: 0)
    x, y = 0, 0
    directions = ["N", "E", "S", "W"]  # 방향 순서: 북, 동, 남, 서
    current_dir = 0  # 초기 방향: 북쪽

    # 명령 처리
    for command in commands:
        if command == "R":  # 오른쪽으로 90도 회전
            current_dir = (current_dir + 1) % 4
        elif command == "L":  # 왼쪽으로 90도 회전
            current_dir = (current_dir - 1) % 4
        elif command == "G":  # 한 칸 전진
            if directions[current_dir] == "N":
                y += 1
            elif directions[current_dir] == "E":
                x += 1
            elif directions[current_dir] == "S":
                y -= 1
            elif directions[current_dir] == "W":
                x -= 1
        elif command == "B":  # 한 칸 후진
            if directions[current_dir] == "N":
                y -= 1
            elif directions[current_dir] == "E":
                x -= 1
            elif directions[current_dir] == "S":
                y += 1
            elif directions[current_dir] == "W":
                x += 1

    return x, y
