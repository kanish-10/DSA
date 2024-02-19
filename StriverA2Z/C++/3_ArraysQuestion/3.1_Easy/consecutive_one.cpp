#include<bits/stdc++.h>

using namespace std;

void consecutiveOne(int arr[], int n) {
    int maximum = 0;
    int counter = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == 1) {
            counter++;
            maximum = max(counter, maximum);
        } else {
            counter = 0;
        }
    }

    cout << "The maximum number of consecutive one is " << maximum;
}

int main() {
    int arr[] = {1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1};
    consecutiveOne(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}