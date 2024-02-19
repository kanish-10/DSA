#include<bits/stdc++.h>

using namespace std;

bool isPalindrome(string &str, int i = 0) {
    int n = str.length();
    if(i>=n/2){
        return true;
    }
    if(str[i] != str[n - i - 1]){
        return false;
    }
    return isPalindrome(str, ++i);
}

int main() {
    string str;
    cout << "Enter the word:";
    cin >> str;

    for (auto &x: str) x = tolower(x);

    bool palindrome = isPalindrome(str);
    if (palindrome) {
        cout << "Palindrome";
    } else {
        cout << "not Palindrome";
    }
    return 0;
}