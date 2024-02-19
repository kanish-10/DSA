// O(n^2) - best, worst, avg

#include<bits/stdc++.h>

using namespace std;

void selectionSort(int arr[], int length) {
    for (int i = 0; i <= length - 2; i++) {
        int min = i;
        for (int j = i; j <= length - 1; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        int temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int n;
    cout << "Enter the size of array: ";
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++) {
        cout << "Enter the " << i << " position value:";
        cin >> arr[i];
    }

    selectionSort(arr, n);

    for (int x: arr) {
        cout << x << " ";
    }
    return 0;
}