---
title: Break loop
direction: break-loop
course: into-programming
order: 25
task: no
next: function
---

Theo nguyên tắc, các vòng lặp chỉ dừng lại khi điều kiện lặp bị sai. Tuy nhiên bạn hoàn toàn có thể ngắt vòng lặp bất cứ khi nào bạn muốn, nhờ sự trợ giúp của câu lệnh `break`

Thông thường, `if` statement được dùng chung với `break` để xác định khi nào nên ngắt vòng lặp.

Hãy xem qua ví dụ:

![example](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2025%3A%20Break%20loop%2Ftask25.png?alt=media&token=9fdcf70d-2142-48c5-9fe8-5ef96bb27278)

Giả sử bài toán là: tìm x sao cho tổng các số từ 1 đến x là 1176. Chúng ta có thể lặp 1 đến 1000 rồi cộng lần lượt các số được lặp vào 1 tổng, khi tổng đó bằng 1176 thì log kết quả rồi kết thúc vòng lặp. Điều này giúp chương trình không cần phải làm thêm các thao tác thừa nữa (vì khi đã tìm được x = 48, lặp tiếp đến 1000 chỉ làm tốn thời gian).

Không chỉ với vòng lặp `for`, các vòng lặp khác cũng dùng được câu lệnh `break` (`while`, `do...while`). Sử dụng nó cùng `if` statement để tối ưu thời gian chạy chương trình.

🔥 **_Tổng kết_**

-   Các vòng lặp có thể sử dụng `break` để ngắt vòng lặp bất cứ lúc nào chúng ta muốn cho dù điều kiện lặp vẫn đúng.
-   `break` thường được sử dụng với `if` statement ngay trong vòng lặp.
