#include<bits/stdc++.h>

using namespace std;

void missingNumber(int arr[], int n) {

    // XOR Method
    int xor1 = 0;
    int xor2 = 0;
    int N = n+1;
    for(int i = 0; i < n; i++) {
        xor1 ^= i+1;
        xor2 ^= arr[i];
    }
    xor1 ^= N;
    cout << "The missing number with xor method is " << (xor1 ^ xor2) << endl;

    // SUM Method
    int sum = 0;
    int add = (N*(N+1)/2);

    for(int i = 0; i < n; i++) {
        sum += arr[i];
    }
    cout << "The missing number with sum method is " << add - sum;
}

int main() {
    int arr[] = {1, 5, 2, 4, 6, 7};
    missingNumber(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}