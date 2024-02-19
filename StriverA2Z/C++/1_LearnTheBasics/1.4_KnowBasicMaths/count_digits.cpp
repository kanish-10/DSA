// O(log10(n))

#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cout << "Enter the number: " << endl;
    cin >> n;

    int cnt = (int) (log10(n) + 1);

    int count = 0;
    while (n > 0) {
        n = n / 10;
        count++;
    }

    cout << "The count of digits is " << count << endl;

    cout << "The count of digits is " << cnt << endl;

    return 0;
}