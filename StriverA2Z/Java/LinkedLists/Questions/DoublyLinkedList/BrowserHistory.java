public class BrowserHistory {
    Node currentPage;

    BrowserHistory(int homepage) {
        currentPage = new Node(homepage);
    }

    void visit(int url) {
        Node newNode = new Node(url);
        newNode.prev = currentPage;
        currentPage.next = newNode;
        currentPage = newNode;
    }

    int forward(int steps) {
        while (steps != 0) {
            if (currentPage.next != null) currentPage = currentPage.next;
            else break;
            steps--;
        }
        return currentPage.data;
    }

    int back(int steps) {
        while (steps != 0) {
            if (currentPage.prev != null) currentPage = currentPage.prev;
            else break;
            steps--;
        }
        return currentPage.data;
    }
}
