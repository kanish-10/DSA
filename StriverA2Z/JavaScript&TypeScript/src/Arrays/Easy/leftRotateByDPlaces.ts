export default function reverse(arr: number[], start: number, end: number) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function leftRotate(arr: number[], d: number) {
  d = d % arr.length;
  console.log(arr);
  reverse(arr, 0, d - 1);
  reverse(arr, d, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  console.log(arr);
}

const arr12 = [1, 2, 3, 4, 5, 6, 7];
leftRotate(arr12, 3);
