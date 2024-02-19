// In set everything is stored in sorted order and unique
// Everything happens in O(n)

#include<bits/stdc++.h>

using namespace std;

int main() {

    set<int> st;
    st.insert(1); // {1}
    st.insert(2); // {1,2}
    st.emplace(2); // {1,2}
    st.insert(4); // {1,2,4}
    st.insert(3); // {1,2,3,4}
    st.insert(5); // {1,2,3,4,5}

    // Functionality of insert in vector can be used also,
    // that only increases efficiency

    // begin(), end(), rbegin(), rend(), size(), empty(), swap()
    // all above are same as those of vectors.

    // {1,2,3,4,5}
    auto it1 = st.find(1);

    // {1,2,3,4,5}
    auto it2 = st.find(6);
    cout << *it2; // since 6 is not present it will always show to end() value.

    // {1,2,3,4,5}
    st.erase(5); // erases 5 // takes logarithmic time

    int cnt = st.count(1); // if exists then returns 1 else 0

    auto it = st.find(3);
    st.erase(it); // constant time

    // {1,2,4}
    auto it4 = st.find(1);
    auto it5 = st.find(4);
    st.erase(it4,it5); // {4} //[start, end)

    // lower_bound() and upper_bound() function works in the same way as in vectors.

    // This is the syntax

    auto it6 = st.lower_bound(2);
    auto it7 = st.upper_bound(3);

    return 0;
}