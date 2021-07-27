## Тестовое задание
Задача на рефакторинг.
```
function func(s, a, b) {
  if (s === "") {
    return -1;
  }

  let i = s.length - 1;
  let aIndex = -1;
  let bIndex = -1;
  while (aIndex == -1 && bIndex == -1 && i > 0) {
    if (s[i] == a) {
      aIndex = i;
    }
    if (s[i] == b) {
      bIndex = i;
    }
    i--;
  }

  if (aIndex != -1 || bIndex != -1) {
    return Math.max(aIndex,bIndex);
  } else return -1;
}
```

Демо приложения: https://operators-braveds.vercel.app/
