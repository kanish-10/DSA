import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

class Pair<K, V> {
    private final K key;
    private final V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }
}

public class MergeKList {
    public static void main(String[] args) {
        Node head1 = LinkedListOperations.arrayToLinkedList(new int[]{2, 4, 6});
        Node head2 = LinkedListOperations.arrayToLinkedList(new int[]{1, 5});
        Node head3 = LinkedListOperations.arrayToLinkedList(new int[]{1, 1, 3, 7});
        Node head4 = LinkedListOperations.arrayToLinkedList(new int[]{8});

        List<Node> arr = new ArrayList<>();
        arr.add(head1);
        arr.add(head2);
        arr.add(head3);
        arr.add(head4);

        Node head = mergeKList(arr);
        LinkedListOperations.traverseLinkedList(head);
    }

    static Node mergeKList(List<Node> arr) {
        PriorityQueue<Pair<Integer, Node>> pq = new PriorityQueue<>((a, b) -> a.getKey() - b.getKey());

        for (Node i : arr) {
            if (i != null) {
                pq.add(new Pair<>(i.data, i));
            }
        }

        Node dNode = new Node(-1);
        Node temp = dNode;

        while (!pq.isEmpty()) {
            Pair<Integer, Node> it = pq.poll();
            if (it.getValue().next != null) {
                pq.add(new Pair<>(it.getValue().next.data, it.getValue().next));
            }
            temp.next = it.getValue();
            temp = temp.next;
        }

        return dNode.next;
    }
}
