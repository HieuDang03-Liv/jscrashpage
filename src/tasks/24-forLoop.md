---
title: For loop
direction: for-loop
course: into-programming
order: 24
task: yes
defaultEditor: 'let result = 1


//Only change code below this line

for (let i = 0; i <= 10; i++) { //change this line 

result =  //change this line

}'
numberValueTest: result === 3628800
hint: Value of first i is not 0 but 1.
next: break-loop
---

Tiếp theo là một vòng lặp phực tạp hơn nhưng được dùng nhiều nhất: `for` loop.

Cú pháp của `for` loop: `for (begin; condition; step) { //code }`

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2024%3A%20For%20loop%2Ftask24.png?alt=media&token=8fa31579-a3a1-45f7-8737-872cf1f5e161)

Qua ví dụ trên, bạn có thể hiểu được phần nào những khái niệm trong vòng lặp `for`.

-   begin: `let i = 1` được chạy 1 lần khi vòng lặp bắt đầu
-   condition: `i <= 10` kiểm tra trước mỗi lần lặp, nếu giá trị trả về `false`, vòng lặp sẽ kết thúc
-   step: `i++` thực hiện sau mỗi lần lặp

Và dịch ra ngôn ngữ thông thường: bắt đầu từ i = 1 và lặp đến khi kết thúc ở i = 10, mỗi lần lặp log i lên console sau đó tăng i thêm 1 đơn vị.

📌 **Lưu ý**

-   Bạn có thể lặp lại việc định nghĩa `let i =` nhiều lần nếu chương trình có nhiều vòng lặp `for`. Điều này tuy rằng có vẻ không hợp lí, nhưng `i` ở mỗi vòng lặp là hoàn toàn khác nhau, và khác luôn i ở bên ngoài. Điều này liên quan tới một khái niệm chuyên sâu trong JS (scope), sẽ được tìm hiểu sau.
-   Ở **step**, bạn không nhất thiết phải sử dụng `i++` và có thể dùng các toán tử khác. Tuy nhiên vòng lặp `for` thường mang ý nghĩa lặp liên tục (step-by-step), nên bạn sẽ gặp rất nhiều `i++` về sau này.

Do đó tất cả dòng code dưới đây đều không gây ra lỗi. Các `i` hoàn toàn khác nhau.

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2024%3A%20For%20loop%2Ftask24.2.png?alt=media&token=6d6e7461-c046-4ff1-9b27-3f295ea3fd2b)

🔥 **_Tổng kết_**

-   `for` loop là vòng lặp được sử dụng nhiều nhất trong lập trình. Mỗi `for` loop yêu cầu khai báo một variable mới (thường là `i` - viết tắt của `index`) để kiểm soát vòng lặp.
-   Variable mới ở mỗi `for` loop là hoàn toàn khác nhau dù thường tất cả đều được đặt tên là `i`.

❓ **Task**

-   Thay đổi cách định nghĩa vòng lặp `for`, đồng thời sử dụng toán tử nhân `*` sao cho giá trị của `result` sau khi kết thúc vòng lặp là tích của các số từ `1` đến `10`
