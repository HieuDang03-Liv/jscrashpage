---
title: While and do...while loop
direction: while-dowhile-loop
course: into-programming
order: 23
task: yes
defaultEditor : 'let sum = 0

let i = 0


//Only change code below this line

while (i <= 10) { //change this line

    i++

    sum = //change this line

}'
numberValueTest: sum === 55 && i === 10
hint: Change condition and use operator +
next: for-loop
---

Để giải quyết một vấn đề, thường xuyên chúng ta cần lặp lại một hay nhiều thao tác nào đó. Ví dụ khi hiển thị tất cả một loại sản phẩm nào đó trong website bán hàng, hay đơn giản chỉ là output từ 1 đến 10.

Bạn có thể viết cả 10 dòng code, và mỗi dòng chứa 1 số. Tuy nhiên nếu bài toán là ouput _1000000_ số bắt đầu từ 1 thì sao? Bạn không thì ngồi viết tay 1 triệu dòng code được.

Cách khôn ngoan hơn là sử dụng **loop**. Trong các ngôn ngữ lập trình thường có 3 **loop** chính: **for**, **while**, **do...while**.

Vì `for` loop phức tạp hơn một chút, và 2 vòng lặp còn lại tương đối giống nhau nên bài này sẽ về `while` loop và `do...while` loop.

Cú pháp `for` loop: `while (conditions) { //code }`

`while` cũng như câu lệnh `if`: `conditions` phải đúng (trả về giá trị `true`) thì code bên trong block mới được thực thi. Chỉ khác là block `if` thực hiện một lần, trong khi block `while` thực hiện liên tục hành động đến khi điều kiện trả về giá trị `false`.

Với hiểu biết như vậy, chúng ta có thể rút ngắn bài toán viết 1 triệu số như sau:

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2023%3A%20While%2C%20do-while%20loop%2Ftask23.1.png?alt=media&token=5039537e-ffc5-4268-9dcd-64e84f1d4081)

Lưu ý rằng bạn có thể thử nhưng nên giảm giá trị số cuối cùng xuống, 1000000 là một số lớn, và trong thực tế chúng ta cũng không thường xuyên làm như vậy.

Giải thích một chút: `while` kiểm tra xem có phải `num < 1000000` không, nếu có thì tăng giá trị `num` thêm 1 và log nó vào console. Tiếp tục thực hiện như vậy cho đến khi `num == 1000000` trả về giá trị `false` (num == 1000000) thì vòng lặp `while` sẽ dừng lại.

Bạn có thắc mặc tại sao khi `num == 1000000` vòng lặp `while` dừng lại mà chúng ta vẫn có con số `1000000` không. Khi `num == 999999` (vẫn thỏa mãn `num < 1000000`), vòng lặp vẫn tiếp túc, block code đã tăng `num == 1000000` và output con số đó. Nếu tôi để điều kiện `num <= 1000000` thì chắc chắn số cuối cùng là `1000001`.

Vòng lặp `do...while` cũng gần giống như `while`, chỉ khác một chút về cú pháp và cơ chế ban đầu. Nếu như `while` đánh giá ngay điều kiện bên trong `()`, nếu điều kiện đúng mới chạy code bên trong block, thì `do...while` chạy 1 lần code trước (không quan tâm tới điều kiện) và từ lần chạy thứ 2 trở đi mới kiểm tra điều kiện.

Cú pháp `do...while` loop: `do { //code } while (conditions)`

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2023%3A%20While%2C%20do-while%20loop%2Ftask23.2.png?alt=media&token=5a788601-517e-42b4-aa08-e6e963b8b91b)

Bạn hãy thử mở console và chạy đoạn code trên. Kết quả là ta sẽ được một dãy số từ `1` đến `10`. Bạn thấy đó, ban đầu `i` mang giá trị là `0`, trong khi điều kiện của vòng lặp bao gồm `0 < i`, nhưng chương trình vẫn chạy lần đầu. Sau lần đầu đó, `i` đã mang giá trị `1`, vậy nên từ đó vòng lặp diễn ra hoàn toàn bình thường. Đến khi `i == 9`, vòng lặp diễn ra lần cuối (do sau đó, `i == 10`, không đủ điều kiện nên vòng lặp tự dừng lại).

📌 **Lưu ý** : cũng tương tự `if` statement, nếu block của bạn chỉ có 1 dòng code, bạn hoàn toàn có thể bỏ cặp dấu ngoặc nhọn `{}`. Tuy nhiên tôi đề suất luôn để `{}`, điều này có lợi khi đọc và sửa code.

🔥 **_Tổng kết_**

-   Việc lặp lại 1 hay nhiều hành động là thường xuyên trong lập trình, lúc này hãy sử dụng vòng lặp để giải quyết.
-   `while` loop chỉ thực thi khi điều kiện trả về giá trị `true`, trong khi `do...while` thực thi lần đầu rồi mới xét tới điều kiện.
-   Trong thực tế `do...while` rất hữu ích. Ví dụ khi bạn cần kiểm tra tên của người dùng có thỏa mãn không nhưng lại chưa biết tên người dùng là gì (string có dạng `''`).

❓ **Task**

-   Thay đổi điều kiện và sử dụng toán tử `+` cho `sum` sao cho giá trị của `sum` sau khi kết thúc vòng lặp là tổng của 10 số từ `1` đến `10`.
