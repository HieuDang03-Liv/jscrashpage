---
title: Boolean type
direction: boolean-type
course: into-programming
order: 16
task: no
next: comparisons
---

Kiểu dữ liệu cơ bản cuối cùng trước khi đi sâu vào JS chính là **Boolean**. Sự thật là kiểu dữ liệu này chỉ có duy nhất 2 giá trị: `true` và `false`.

📌 **Lưu ý**

-   Chúng ta không viết `true` và `false` bên trong single quotes/double quotes/backticks. Làm như vậy chúng ta nhận được một string bao gồm ký tự `'true'` hay `'false'`.
-   `true` và `false` là 2 **keyword** trong JS.
-   Do tôi đã đề cập, JS là ngôn ngữ lập trình **case sensitive**, nên bạn chỉ có thể viết `true` chứ không thể là `TRUE` hay `True` (tương tự với `false`).

Boolean là kiểu dữ liệu được dùng để đánh giá tính đúng sai của biểu thức trong lập trình. Do đó ít khi chúng ta khởi tạo một variable mang giá trị `true` hoặc `false`.
Điều này lại càng đúng trong JS, khi đánh giá tính đúng sai của biểu thức, JS có tính năng tự đánh giá mà không cần qua bất cứ sự so sánh nào. (Sẽ được đề cập sau)

Nhưng việc bạn định nghĩa `let a = true` hay `let a = false` là hoàn toàn đúng thao tác và không vô nghĩa trong JS.

Ở ngay bài sau, khi học về tính logic của biểu thức trong JS, chúng ta sẽ thấy `true/false` xuất hiện nhiều hơn.

🔥 **_Tổng kết_**

-   Tuy là một trong ba kiểu dữ liệu cơ bản, những **Boolean** không thường xuyên được sử dụng để khởi tạo giá trị cho variables.
-   Thông thường, `true` và `false` sẽ là kết quả trả về của một biểu thức logic.
