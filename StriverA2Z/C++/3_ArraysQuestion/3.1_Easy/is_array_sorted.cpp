// O(n)

#include<iostream>

using namespace std;

void isSorted(int arr[], int n) {
    bool flag = false;
    for (int i = 0; i < n - 2; i++) {
        if (arr[i] <= arr[i + 1]) {
            continue;
        } else {
            flag = true;
            break;
        }
    }
    if (flag) {
        cout << "The array is not sorted";
    } else {
        cout << "The array is sorted";
    }
}

int main() {
    int arr[] = {1, 7, 5, 6, 8, 9};
    isSorted(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}