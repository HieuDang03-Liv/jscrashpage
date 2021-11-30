---
title: Conditionals
direction: conditionals
course: into-programming
order: 21
task: yes
assertReg: if\s*\(num\s+.=\s*10\)\s*\{*\#*\s+console\.log\("10\sor\sGreater"\)\#*\}*\s*\#*else\s+\{*\#*\s*console\.log\("Smaller\sthan\s10\"\)\#*\}*
hint: Change second if statement to else.
next: else-if-statement
---

Nhắc tới block, một trong những điều đầu tiên lập trình viên nhớ đến chính là câu lệnh điều kiện (**if/else statement**). Đây là câu lệnh cực kì quan trọng, và nó cũng là một hướng giải quyết vấn đề thường xuyên của các lập trình viên.

Bản thân cái tên **if/else** đã nói lên tất cả: nếu không cái này thì cái kia.

Khi gặp một **if/else statement**, chương trình sẽ đánh giá điều kiện được đặt trong câu lệnh. Nếu điều kiện đó đúng thì block bên trong `if` sẽ được thực thi, và chương trình sẽ bỏ qua luôn câu lệnh `else`. Ngược lại khi điều kiện của `if` sai, chắc chắn block bên trong `else` được thực thi.

Cú pháp:

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2021%3A%20Conditionals%2Ftask21.1.png?alt=media&token=d55c18bd-ef4b-412c-b0a8-6c2019a77618)

conditions là điều kiện để thực thi block `if`. Nhưng nếu conditions sai (trả về kết quả `false`) thì block `if` bị bỏ qua, thay vào đó chương trình sẽ chạy block `else`.

![example3](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2021%3A%20Conditionals%2Ftask21.3.png?alt=media&token=af2e6057-ca5b-4aa5-9540-43df7dae6894)

Điều kiện trong `if` là: "liệu num chia cho 2 có được số dư là 0?". Tức "num có phải là số chẵn không?". Vì `24 % 2 == 0` trả về giá trị `true` nên câu lệnh trong block `if` được thực hiện và phía ngược lại bị bỏ qua.

📌 **Lưu ý**

-   conditions có thể là 1 hoặc nhiều điều kiện khác nhau. Nếu bạn muốn kiểm tra nhiều hơn 1 điều kiện, sử dụng `&&` hoặc `||` giữa các điều kiện (giải thích bên dưới).
-   khi dùng `if/else`, bạn không nhất định phải viết như tôi, cơ bản đó là style của mỗi người.
-   nếu block chỉ có 1 statement, bạn có thể không bỏ dấu ngoặc nhọn đi. Nhưng theo tôi, hãy luôn để cặp dấu ngoặc nhọn, code của bạn nhìn sẽ tường minh hơn và nếu sau này cần thêm lệnh, bạn sẽ dễ sửa code hơn.

Cách viết khác:

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2021%3A%20Conditionals%2Ftask21.2.png?alt=media&token=2e220bbd-f215-432a-beb6-51b7bc0e8b34)

3 cách viết trên hoàn toàn giống nhau về mặt ngữ nghĩa.

Khi sử dụng `&&`, điều kiện mang ý nghĩa **tất cả**. Tức block `if` chỉ được thực thi khi tất cả điều kiện đúng.  
Còn với `||`, điều kiên mang ý nghĩa **chỉ cần một**. Tức block `if` được thực thi khi một trong các điều kiện đúng.

![example4](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2021%3A%20Conditionals%2Ftask21.4.png?alt=media&token=40d79a04-5531-4162-8497-51b3e496c22d)

Tất nhiên, khi dùng `||` mà tất cả điều kiện đều sai thì `if` cũng sẽ bị bỏ qua.

Bạn có thể sử dụng kết hợp cả hai loại điều kiện trên:

![example5](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2021%3A%20Conditionals%2Ftask21.5.png?alt=media&token=2b40ef94-e771-49ce-bcde-448a914fd1fe)

Dùng dấu `()` để tách các điều kiện, và có thể thêm khoảng cách cho dễ đọc code (các khoảng trắng vô nghĩa sẽ bị bỏ qua khi chương trình chạy).

Cuối cùng, bạn không nhất thiết phải có câu lệnh `else`. Nếu chỉ có `if`, điều kiện đúng thì không cần bàn tới nhưng khi điều kiện sai, chương trình sẽ chạy ngay những câu lệnh khác. Vậy nên bạn không cần quá bận tâm `else` khi chỉ có mục đích với `if`.

🔥 **_Tổng kết_**

-   Câu lệnh điều kiện `if/else` được sử dụng rất nhiều để giải quyết các vấn đề trong lập trình.
-   Điều kiện `if` đúng thì code kèm theo nó mới được thực thi, nếu không code của `else` sẽ được thực hiện.
-   `if else` sẽ bị ràng buộc: không cái này thì phải cái kia. Nhưng nếu chỉ có `if`, chương trình sẽ chạy: không cái này thì thôi.

❓ **Task**

-   Hãy chuyển 2 câu lệnh `if` thành 1 câu lệnh có cả `if` và `else`.

![task](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2021%3A%20Conditionals%2Ftask21.6.png?alt=media&token=b774818c-059c-463e-837e-32a2695cffec)
