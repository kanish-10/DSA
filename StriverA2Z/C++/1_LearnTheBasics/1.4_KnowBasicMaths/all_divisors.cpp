#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cout << "Enter the number: ";
    cin >> n;

    vector<int> v;

    // O(sqrt(n))
    for (int i = 1; i <= sqrt(n); i++) {
        if (n % i == 0) {
            v.push_back(i);
            if ((n / i) != i) {
                v.push_back(n / i);
            }
        }
    }

    // O(n log n)
    sort(v.begin(), v.end());
    // O(n)
    for (auto it: v) cout << it << " ";

    return 0;
}