#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cout << "Enter the number:";
    cin >> n;

    int count = 0;
    for (int i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            count++;
            if ((n / i) != i) count++;
        }
    }
    count == 2 ? cout << "Prime" : cout << "Not a Prime";
    return 0;
}