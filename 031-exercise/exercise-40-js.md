
### Формулировка

Реализуйте программу, которая сначала заполняет массив случайными числами, а затем сортирует его, используя метод сортировки выбором минимального элемента. Программа должна включать функции для генерации массива, сортировки и вывода.

### Пояснение

Сортировка выбором работает, находя на каждом шаге минимальный элемент в неотсортированной части массива и обменивая его с первым неотсортированным элементом. Этот процесс повторяется до тех пор, пока весь массив не будет отсортирован.

### Тесты

1. **Пример 1:** Ввод: размер массива 5. Вывод: исходный массив случайных чисел, отсортированный массив.
2. **Пример 2:** Ввод: размер массива 10. Вывод: исходный массив случайных чисел, отсортированный массив.
3. **Пример 3:** Ввод: размер массива 3. Вывод: исходный массив случайных чисел, отсортированный массив.

### JavaScript

```javascript
function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100)); // Случайные числа от 0 до 99
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function printArray(arr) {
  console.log(arr.join(', '));
}

// Пример использования
const size = 5; // Ввод размера массива
const randomArray = generateRandomArray(size);
console.log("Исходный массив:");
printArray(randomArray);
const sortedArray = selectionSort(randomArray);
console.log("Отсортированный массив:");
printArray(sortedArray);
```

