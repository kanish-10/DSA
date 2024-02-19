// All operations are O(1)

#include<bits/stdc++.h>

using namespace std;

int main() {

    queue<int> q;
    q.push(1); // {1}
    q.push(2); // {1,2}
    q.push(3); // {1,2,3}
    q.emplace(4); // {1,2,3,4}

    cout << q.back() << endl; // 4

    q.back() += 5;

    cout << q.back() << endl; // 9

    cout << q.front() << endl; // 1

    q.pop(); // {2,3,9}

    cout << q.front() << endl;

    cout << q.size() << endl;

    queue<int> q1, q2;

    q1.swap(q2);

    return 0;
}