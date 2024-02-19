#include<bits/stdc++.h>

using namespace std;

int stock_buy_sell(vector<int> arr) {
    int minimum = arr[0];
    int profit = 0;
    for (int i : arr) {
        int cost = i - minimum;
        profit = max(profit, cost);
        minimum = min(i, minimum);
    }
    return profit;
}

int main() {
    cout << "The maximum profit made will be: " << stock_buy_sell({7, 1, 5, 3, 6, 4});
    return 0;
}