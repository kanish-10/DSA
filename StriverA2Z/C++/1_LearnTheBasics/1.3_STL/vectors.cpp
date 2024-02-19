#include<bits/stdc++.h>

using namespace std;

int main() {

    // initialization
    vector<int> v;

    v.push_back(1);
    v.emplace_back(2);

    vector <pair<int, int>> vec;

    vec.push_back({1, 2});
    vec.emplace_back(1, 2);

    vector<int> ve(5, 100);

    vector<int> v1(5);

    vector<int> v2(5, 20);
    vector<int> v3(v2);

    // iterators
    vector<int>::iterator it = v.begin();

    it++;
    cout << *(it) << endl;

    it = it + 2;
    cout << *(it) << endl;

    vector<int>::iterator it1 = v.end();
    cout << *it1 << endl;

    auto it2 = v.rend();
    cout << *it2 << endl;

    auto it3 = v.rbegin();
    cout << *it3 << endl;

    cout << v[0] << " " << v.at(0);

    cout << v.back() << endl;

    // displaying or printing values
    for (vector<int>::iterator i = v.begin(); i != v.end(); i++) {
        cout << *i << endl;
    }

    for (auto i = v.begin(); i != v.end(); i++) {
        cout << *i << endl;
    }

    for (auto i: v) {
        cout << i << endl;
    }

    // Erase
    v.erase(v.begin() + 1);
    v.erase(v.begin() + 1, v.begin() + 3); // [start, end);

    // insert function
    vector<int> v4(2, 100); // {100, 100}
    v4.insert(v4.begin(), 300); // {300, 100, 100}
    v4.insert(v4.begin() + 1, 2, 10); // {300, 10, 10, 100, 100}

    vector<int> copy(2, 50);
    v4.insert(v4.begin(), copy.begin(), copy.end()); // {50, 50, 300, 10, 10, 100, 100}

    cout << v4.size(); // 7

    v4.pop_back(); // {50, 50, 300, 10, 10, 100}

    vector<int> v5(2, 50); // v5 -> {50, 50}
    vector<int> v6(2, 20); // v6 -> {20, 20}

    v5.swap(v6); // v5 -> {20, 20} // v6 -> {50, 50}

    v4.clear(); // erases the entire vector

    cout << v4.empty();

    return 0;
}