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

  if (aIndex == -1 && bIndex == -1) {
    return -1;
  }
  else if (aIndex == -1 && bIndex != -1) {
    return bIndex;
  }
  else if (bIndex == -1 && aIndex != -1) {
    return aIndex;
  }
  else return Math.max(aIndex, bIndex);
}
```

Демо приложения:operators-braveds.vercel.app/