#include<bits/stdc++.h>

using namespace std;

int main() {

    deque<int> dq;

    dq.push_back(1); // {1}
    dq.emplace_back(2); // {1, 2}

    dq.push_front(0); // {0, 1, 2}
    dq.emplace_front(-1); // {-1, 0, 1, 2}

    dq.pop_back(); // {-1, 0, 1}
    dq.pop_front(); // {0, 1}

    cout << dq.front() << endl;
    cout << dq.back() << endl;

    // rest functions same as vector
    // begin, end, rbegin, rend, clear, insert, size, swap

    return 0;
}