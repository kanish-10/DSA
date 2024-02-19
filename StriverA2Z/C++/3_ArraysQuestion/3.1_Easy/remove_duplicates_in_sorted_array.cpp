// O(n)

#include<iostream>

using namespace std;

void remove_duplicates(int arr[], int n) {
    int i = 0;  // here i is referred as sorted arr.length
    for (int j = 1; j < n; j++) {
        if (arr[j] != arr[i]) {
            arr[i + 1] = arr[j];
            i++;
        }
    }
    i++;

    // printing it only
    for (int j = 0; j < i; j++) {
        cout << arr[j] << " ";
    }
}

int main() {
    int arr[] = {1, 1, 2, 2, 2, 3, 3, 3, 4, 7, 7};
    remove_duplicates(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}