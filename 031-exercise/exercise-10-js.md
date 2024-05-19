
### Формулировка
Напишите функцию/метод для вычисления расстояния, пройденного объектом, движущимся с начальной скоростью $v_0$, ускорением $a$ за время $t$.

### Пояснение
Расстояние, пройденное объектом, вычисляется с использованием формулы равноускоренного движения:

$$
s = v_0 t + \frac{1}{2} a t^2
$$

где $v_0$ - начальная скорость, $a$ - ускорение, $t$ - время.

### Тесты

1. **Пример 1:**
   - Вход: $v_0 = 10$, $a = 2$, $t = 5$
   - Ожидаемый вывод: $75$

2. **Пример 2:**
   - Вход: $v_0 = 0$, $a = 9.8$, $t = 2$
   - Ожидаемый вывод: $19.6$

3. **Пример 3:**
   - Вход: $v_0 = 20$, $a = -3$, $t = 4$
   - Ожидаемый вывод: $56$

### JavaScript
```javascript
function distanceTraveled(v0, a, t) {
    return v0 * t + 0.5 * a * t * t;
}
```
