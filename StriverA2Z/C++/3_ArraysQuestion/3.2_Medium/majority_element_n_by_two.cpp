#include<iostream>

using namespace std;

void majorityElementNByTwo(int arr[], int n) {
    int el;
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (count == 0) {
            count = 1;
            el = arr[i];
        } else if (arr[i] == el) {
            count++;
        } else if (arr[i] != el) {
            count--;
        }
    }

    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == el) cnt++;
    }

    if (cnt > n / 2) {
        cout << el << endl;
    } else {
        cout << -1;
    }
}

int main() {
    int arr[] = {2, 2, 1, 3, 1, 1, 3, 1, 1};
    majorityElementNByTwo(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}