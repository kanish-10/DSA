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

void leftRotateByN(int arr[], int n, int rotate) {
    rotate = rotate % n;
    reverseArray(arr, 0, rotate - 1);
    reverseArray(arr, rotate, n - 1);
    reverseArray(arr, 0, n - 1);

    // printing
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6};
    leftRotateByN(arr,sizeof(arr)/sizeof(arr[0]),4);
    return 0;
}