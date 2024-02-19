public class StockBuyAndSell {
    public static void main(String[] args) {
        int[] arr = {7, 1, 5, 3, 6, 4};
        stockBuyAndSell(arr);
    }

    static void stockBuyAndSell(int[] arr) {
        int profit = 0;
        int minimum = arr[0];
        for (int i : arr) {
            int cost = i - minimum;
            profit = Math.max(profit, cost);
            minimum = Math.min(minimum, i);
        }
        System.out.println(profit);
    }
}