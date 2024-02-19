// O(n)

#include<iostream>

using namespace std;

void secondLargestElement(int arr[], int n) {
    int sLargest = arr[0];
    int largest = arr[0];
    for (int i = 0; i < n; i++) {
        if (arr[i] > largest) {
            sLargest = largest;
            largest = arr[i];
        }
        if (arr[i] < largest && arr[i] > sLargest) {
            sLargest = arr[i];
        }
    }
    cout << "Second largest element is " << sLargest;
}

int main() {
    int arr[] = {1, -1, 6, 3, 4, 7};
    secondLargestElement(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}