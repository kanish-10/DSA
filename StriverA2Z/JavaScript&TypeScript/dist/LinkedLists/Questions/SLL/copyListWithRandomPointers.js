class CopyNode {
    val;
    next;
    random;
    constructor(value) {
        this.val = value;
        this.next = null;
        this.random = null;
    }
}
function copyRandomList(head) {
    let temp = head;
    //step 1
    while (temp != null) {
        let newNode = new CopyNode(temp.val);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = temp.next.next;
    }
    //step 2
    let itr = head;
    while (itr != null) {
        if (itr.random != null)
            itr.next.random = itr.random.next;
        itr = itr.next.next;
    }
    //step 3
    let dummy = new CopyNode(0);
    itr = head;
    temp = dummy;
    let fast;
    while (itr != null) {
        fast = itr.next.next;
        temp.next = itr.next;
        itr.next = fast;
        temp = temp.next;
        itr = fast;
    }
    return dummy.next;
}
function printList(head) {
    while (head != null) {
        let str = "";
        str += head.val + ":";
        if (head.next != null)
            str += (head.next.val);
        else
            str += ("NULL");
        if (head.random != null)
            str += ("," + head.random.val);
        else
            str += (",NULL");
        console.log(str);
        head = head.next;
    }
}
let head = null;
let node1 = new CopyNode(1);
let node2 = new CopyNode(2);
let node3 = new CopyNode(3);
let node4 = new CopyNode(4);
head = node1;
head.next = node2;
head.next.next = node3;
head.next.next.next = node4;
head.random = node4;
head.next.random = node1;
head.next.next.random = null;
head.next.next.next.random = node2;
console.log("Original list:(current node:node pointed by next pointer, node pointed by random pointer)");
printList(head);
console.log("Copy list:(current node:node pointed by next pointer,node pointed by random pointer)");
let newHead = copyRandomList(head);
printList(newHead);
