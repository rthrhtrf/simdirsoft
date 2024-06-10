//по отдельности задания без ошибок
//1
function sumEvenNegative(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0 && array[i] < 0) {
        sum += array[i];
      }
    }
    return sum;
  }
  const array = [3, -5, -2, 4, -8, 0];
  const result = sumEvenNegative(array);
  console.log('Сумма четных отрицательных элементов: '+result); // -10

  //2
  function maxAbs(array) {
    let maxAbsValue = 0;
    for (let i = 0; i < array.length; i++) {
      if (Math.abs(array[i]) > maxAbsValue) {
        maxAbsValue = Math.abs(array[i]);
      }
    }
    return maxAbsValue;
  }
  const array = [3, -5, -2, 4, -8, 0];
  const result = maxAbs(array);
  console.log('Максимальный по модулю элемент: '+result); // 8
 
  //3
  function countPositiveNegative(array) {
    let positiveCount = 0;
    let negativeCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        positiveCount++;
      } else if (array[i] < 0) {
        negativeCount++;
      }
    }
    return { positiveCount, negativeCount };
  }
  const array = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3];
  const result = countPositiveNegative(array);
  console.log('Количество положительных элементов: '+result.positiveCount); // 6
  console.log('Количество отрицательных элементов: '+result.negativeCount); // 2
 
  //4
  function hasDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
    return false;
  }
  const array = [1, 2, 3, 4, 5, 5];
  const result = hasDuplicates(array);
  console.log('Есть ли в массиве одинаковые элементы: '+result); // true
   
//5
function countDistinct(array) {
    const uniqueNumbers = new Set(array);
    return uniqueNumbers.size;
  }
  const array = [1, 2, 3, 2, 1, 4, 5, 4, 6, 7];
  const result = countDistinct(array);
  console.log('Количество различных чисел в массиве: '+result); // 7
 
  //6
  function compareArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 2, 3, 4, 5];
  const result = compareArrays(array1, array2);
  console.log('Массивы идентичны: '+result); // true