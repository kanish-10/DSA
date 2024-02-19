// push -> O(log n)
// pop -> O(log n)
// top -> O(1)

#include<bits/stdc++.h>

using namespace std;

int main() {

    priority_queue<int> pq;

    pq.push(5); // {5}
    pq.push(2); // {5,2}
    pq.push(8); // {8,5,2}
    pq.emplace(3); // {8,5,3,2}
    pq.emplace(10); // {10,8,5,3,2}

    cout << pq.top() << endl; // 10

    pq.pop(); // {8,5,3,2}

    cout << pq.top() << endl; // 8

    cout << pq.size() << endl;

    cout << pq.empty() << endl;

    priority_queue<int> pq1, pq2;
    pq1.swap(pq2);

    // Minimum Heap
    priority_queue<int, vector<int>, greater<int>> pq3;
    pq3.push(5); // {5}
    pq3.push(2); // {2,5}
    pq3.push(8); // {2,5,8}
    pq3.emplace(20); // {2,5,8,20}

    cout << pq3.top() << endl; // 2

    return 0;
}