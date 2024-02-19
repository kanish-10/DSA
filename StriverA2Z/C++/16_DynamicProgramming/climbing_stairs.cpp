#include<bits/stdc++.h>

using namespace std;

int climbStairsRecursive(int n) {
    if (n == 0) return 1;
    if (n == 1) return 1;
    int left = climbStairsRecursive(n - 1);
    int right = climbStairsRecursive(n - 2);
    return left + right;
}

long long climbStairs(int n) {
    long long prev = 1;
    long long prev2 = 0;
    for (int i = 2; i <= n + 1; i++) {
        long long curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}

int main() {
    cout << climbStairsRecursive(51) << endl;
    cout << climbStairs(51);
    return 0;
}