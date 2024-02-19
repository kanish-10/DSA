#include<bits/stdc++.h>

using namespace std;

int main() {
    string str;
    cout << "Enter the word:";
    cin >> str;

    int hash[26] = {0};

    // Pre-compute
    for (int i = 0; i < str.size(); i++) {
        hash[str[i] - 'a'] += 1;
    }

    int q;
    cin >> q;
    while (q--) {
        char ch;
        cin >> ch;
        int hashNumber = ch - 'a';
        cout << hash[hashNumber] << endl;
    }
    return 0;
}