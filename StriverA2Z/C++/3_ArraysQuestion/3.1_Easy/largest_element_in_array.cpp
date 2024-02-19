// O(n)

#include<iostream>

using namespace std;

void largestElement(int arr[], int n) {
    int largest = arr[0];
    for (int i = 0; i < n; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    cout << "The largest number in the given array is " << largest << endl;
}

int main() {
    int arr[] = {3, 2, 1, 5, 2};
    largestElement(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}