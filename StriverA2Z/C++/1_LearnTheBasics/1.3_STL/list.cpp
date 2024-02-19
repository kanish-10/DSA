#include<bits/stdc++.h>

using namespace std;

int main() {
    list<int> ls;

    ls.push_back(2); // {2}
    ls.emplace_back(4); // {2, 4}

    ls.push_front(1); // {1, 2, 4}
    ls.emplace_front(5); // {5, 1, 2, 4}

    // rest all functions same as vector
    // begin, end, rbegin, rend, clear, insert, size, swap

    return 0;
}