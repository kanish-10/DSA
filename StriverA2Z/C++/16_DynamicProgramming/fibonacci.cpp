#include<bits/stdc++.h>

using namespace std;

int fibMem(int n, vector<int> &arr) {
    if (n <= 1) return n;
    if (arr[n] != -1) return arr[n];
    arr[n] = fibMem(n - 1, arr) + fibMem(n - 2, arr);
    return arr[n];
}

int fibTab(int n) {
    int arr[n + 1];
    arr[0] = 0;
    arr[1] = 1;
    for (int i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

int fib(int n) {
    int prev = 1;
    int prev2 = 0;
    for (int i = 2; i <= n; i++) {
        int curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}

int main() {
    vector<int> arr(6,-1);
    cout << fibMem(5, arr) << endl;
    cout << fibTab(5) << endl;
    cout << fib(5);
    return 0;
}