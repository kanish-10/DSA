#include<iostream>

using namespace std;

void kadaneAlgorithm(int arr[], int n) {
    int maximum = INT_MIN;
    int sum = 0;
    int start = 0;
    int ansStart = -1, ansEnd = -1;
    for (int i = 0; i < n; i++) {
        if (sum == 0) start = i;
        sum += arr[i];
        if (sum > maximum) {
            maximum = sum;
            ansStart = start;
            ansEnd = i;
        }
        if (sum < 0) {
            sum = 0;
        }
    }

    for (int i = ansStart; i <= ansEnd; i++) {
        cout << arr[i] << " ";
    }
    cout << endl << "Maximum sum of subarray is " << maximum;
}

int main() {
    int arr[] = {-2, -3, 4, -1, -2, 1, 5, -3};
    kadaneAlgorithm(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}