---
title: Get started
direction: beginning
course: into-programming
order: 1
task: no
next: io-and-comment
---

Một chương trình, thường được hiểu là **source code** hay **code**, là một tập hợp những hướng dẫn để máy tính có thể hiểu được những việc cần làm.

**Statements** hay câu lệnh là tập hợp của các từ (bao gồm cả các keyword), số, và các toán tử (**operators**). Trong JS, một statement trông như sau: `x = y + 2`
Trong đó `x` và `y` chính là các biến (**variables**), `=` và `+` là các toán tử (**operators**), `2` chỉ đơn thuần là một giá trị (được gọi là **literal value** vì nó độc lập và không được lưu trữ trong một variable).

Một chương trình hoàn chỉnh là một bộ các statements kết hợp với nhau.

Vậy làm sao để tập hợp các câu lệnh đó giao tiếp được với máy tính và bắt nó làm theo yêu cầu của từng câu lệnh?

Những câu lệnh như `x = y + 2` vô cùng hữu dụng và thân thiện với con người (lập trình viên), nhưng bản thân máy tính không thể hiểu, vì máy tính chỉ sử dụng **ngôn ngữ máy**. Có một _người trung gian_ phiên dịch các ngôn ngữ bậc cao (JavaScript, Python, Java, C/C++, ...) sang ngôn ngữ máy. Người trung gian này có thể là **interpreter** hoặc **compiler**.

**Interpreter** phiên dịch từng dòng code của chương trình, từ trên xuống dưới.
**Compiler** phiên dịch sẽ dịch code trước, và khi cho chương trình chạy, những gì xảy ra đã được chuẩn bị từ trước.

Thông thường JavaScript được cho là sử dụng cơ chế do **Interpreter** làm trung gian, vì các dòng code được viết bằng JavaScript sẽ được xử lý mỗi khi chạy. Nhưng điều này là chưa hoàn toàn chính xác. Thật ra, JavaScript được **Compiler** phiên dịch, và sau đó chạy ngay sau khi quá trình phiên dịch hoàn thành.

Bạn không phải ghi nhớ điều này, vì đối với người mới, nó tương đối mơ hồ và phức tạp.

Bạn có thể thử viết code JS và chạy ngay trên trình duyệt web trên máy tính (Chrome, Firefox). Nếu bạn đang dùng **Windows**, dùng tổ hợp **Ctrl + Shift + J** ; nếu đang dùng **Mac OS**, hãy dùng tổ hợp **Cmd + Opt + J**. Khi một cửa sổ khác mở lên, hãy đi tới phần **Console** và gõ `console.log('Xin chao the gioi.')`.

🔥 **_Tổng kết_**

-   Mỗi chương trình chứa nhiều câu lệnh (statements), chúng kết hợp với nhau để hoàn thành các nhiệm vụ được lập trình sẵn.
-   Do không sử dụng ngôn ngữ giao tiếp chung nên để giao tiếp với máy tính, mỗi ngôn ngữ lập trình sử dụng một người trung gian để phiên dịch (Interpreter hoặc Compiler). JS sử dụng Compiler.
-   Console trên trình duyệt web có thể dùng để viết và chạy chương trình JS (bạn có thể làm điều này khi đã lắm vững kiến thức JS nền tảng).
