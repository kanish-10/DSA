#include<bits/stdc++.h>

using namespace std;

void optimalSumMethod(int arr[], int n) {
    // Sum - nSum // x - y
    // Sum2 - nSum2 // x^2 - y^2
    long long nSum = (n * (n + 1)) / 2;
    long long nSum2 = (n * (n + 1) * (2 * n + 1)) / 6;
    long long Sum = 0, Sum2 = 0;
    for (int i = 0; i < n; i++) {
        Sum += arr[i];
        Sum2 += (long long) arr[i] * (long long) arr[i];
    }
    long long val1 = Sum - nSum; // x- y
    long long val2 = Sum2 - nSum2;
    val2 /= val1; // x + y
    long long rep = (val1 + val2) / 2;
    long long miss = rep - val1;

    cout << "Missing :- " << miss << endl;
    cout << "Repeating :- " << rep << endl;
}

void optimalXorMethod(int arr[], int n) {
    int xr = 0;
    for (int i = 0; i < n; i++) {
        xr ^= arr[i];
        xr ^= (i + 1);
    }
    int bitNo = 0;
    while (true) {
        if ((xr & (1 << bitNo)) != 0) {
            break;
        }
        bitNo++;
    }
    int zero = 0;
    int one = 0;

    for (int i = 0; i < n; i++) {
        if ((arr[i] & (1 << bitNo)) != 0) {
            one ^= arr[i];
        } else {
            zero ^= arr[i];
        }
        if (((i + 1) & (1 << bitNo)) != 0) {
            one ^= (i + 1);
        } else {
            zero ^= (i + 1);
        }
    }

    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == zero) cnt++;
    }
    if (cnt != 2) {
        cout << "Missing :- " << zero << endl;
        cout << "Repeating :- " << one << endl;
        return;
    }
    cout << "Missing :- " << one << endl;
    cout << "Repeating :- " << zero << endl;
}

int main() {
    int arr[] = {4, 3, 6, 2, 1, 1};
    optimalSumMethod(arr, sizeof(arr) / sizeof(arr[0]));
    optimalXorMethod(arr, sizeof(arr) / sizeof(arr[0]));
    return 0;
}