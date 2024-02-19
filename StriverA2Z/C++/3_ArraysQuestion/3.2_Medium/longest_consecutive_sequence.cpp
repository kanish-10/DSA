#include<bits/stdc++.h>

using namespace std;

void longest_sequence(vector<int> arr) {
    int longest = 1;
    unordered_set<int> st;
    for (int i: arr) {
        st.insert(i);
    }

    for (int i: st) {
        if (st.find(i - 1) == st.end()) {
            int cnt = 1;
            int x = i;
            while (st.find(x + 1) != st.end()) {
                cnt = cnt + 1;
                x = x + 1;
            }
            longest = max(cnt, longest);
        }
    }

    cout << "The longest consecutive length is " << longest;
}

int main() {
    longest_sequence({100, 4, 200, 1, 3, 2});
    return 0;
}