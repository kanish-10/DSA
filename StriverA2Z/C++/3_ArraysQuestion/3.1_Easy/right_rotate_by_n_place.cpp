#include<bits/stdc++.h>

using namespace std;

void reverseArray(int arr[], int start, int end) {
    while (start <= end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

void rightRotateByN(int arr[], int n, int rotate) {
    rotate = rotate % n;
    reverseArray(arr, n - rotate, n - 1);
    reverseArray(arr, 0, n - rotate - 1);
    reverseArray(arr, 0, n - 1);

    // printing
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6};
    rightRotateByN(arr, sizeof(arr) / sizeof(arr[0]), 2);
    return 0;
}