#include<bits/stdc++.h>

using namespace std;

void swap(int arr[], int start, int end) {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

void dutchNationalFlagAlgorithm(int arr[], int n) {
    int low = 0;
    int mid = 0;
    int high = n - 1;
    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr, low, mid);
            low++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            swap(arr, mid, high);
            high--;
        }
    }

}

int main() {
    int arr[] = {1, 0, 0, 0, 1, 1, 1, 2, 2, 0, 2, 1, 0};
    dutchNationalFlagAlgorithm(arr, sizeof(arr) / sizeof(arr[0]));
    for (int x: arr) cout << x << " ";
}