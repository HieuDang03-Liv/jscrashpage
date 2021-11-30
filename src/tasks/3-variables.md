---
title: Variables and values
direction: variables-values
course: into-programming
order: 3
task: yes
assertReg: let\s+myFullName\s*=\s*".+";*#+let\s+myAge\s*=\s*\d+;*#*|let\s+myAge\s*=\s*\d+;*#+let\s+myFullName\s*=\s*".+";*#*
hint: make sure myFullName is a string and myAge is a number
next: code-styles
---

Một trong những khái niệm quan trọng nhất trong thế giới lập trình chính là **Biến** (**Variable**).

Hãy liên hệ với toán học một chút, khi bạn gặp một giá trị cồng kềnh nào đó, hay một con số có vài chữ số mà bạn không hề muốn viết đi viết lại, lúc này biến sẽ xuất hiện, tạo ra cách viết ngắn gọn và logic hơn. Điều tương tự cũng xảy ra trong lập trình, nhưng ở tần suất cao hơn nhiều. Vì trong phần mềm nói chung, biến là thứ xuất hiện nhiều nhất trong tất cả các dự án.

📌 **Lưu ý** : từ đây tôi sẽ sử dụng từ **Variable** thay cho từ ~~Biến~~ để giúp cho bạn làm quen với vài **keyword** khi đọc tài liệu bằng tiếng Anh, vì theo tôi học lập trình bằng tiếng Anh sẽ thuận lợi hơn.

Trong môn toán, chúng ta thường xử dụng những chữ cái đơn để đặt tên cho một giá trị nào đó ví dụ: a, b, x, y,... Nhưng trong lập trình, hãy đặt tên variable theo một cách khôn ngoan hơn. Cụ thể, hãy đặt tên variable dựa trên công dụng (vai trò, ý nghĩa trong chương trình) của nó.

Trong JS hiện đại, variables được khai báo (định nghĩa, khởi tạo) như sau:

> let **name** = **value**

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%203%3A%20Variables%20and%20values%2Ftask3.png?alt=media&token=ee496c54-a310-4e9f-87ba-3d41b5a573ac)

Các giá trị sau dấu **=** chính là các giá trị khởi tạo được gán cho variable. Lúc này `x` sẽ mang giá trị là chuỗi kí tự `"Hello this is Vietnam"`. Nếu không được gán cho biến, chúng chỉ là những giá trị đơn thuần (literal value).

📌 **Lưu ý**

-   Khi đặt tên cho variable, bạn không được sử dụng dấu **space** giữa các từ trong tên.
-   Một cái tên khả dụng, chỉ có thể chứa **ký tự chữ cái**, **ký tự số** hoặc hai dấu `$` và `_`.
-   Ký tự đầu tiên của tên không được là **ký tự số**.
-   Không được đặt tên variable trùng với **keywords** của ngôn ngữ lập trình (keywords là những từ có chức năng đã được lập trình sẵn).

Một điều quan trọng, tên của variables trong JS **Case Sensitive**, tức dù một từ nhưng nếu viết hoa và viết thường khác nhau sẽ tao ra hai variables khác nhau.

`RandomNumber` `ranDoMNumBer` `randomNumber` `Randomnumber` là 4 variables khác nhau.

Ví dụ về tên khả dụng và tên không khả dụng

![examlple2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%203%3A%20Variables%20and%20values%2Ftask3.2.png?alt=media&token=6f0a6c0c-e516-4cf4-8c23-3b8c5e92a1dc)

Để dễ hiểu hơn, ngay bài sau, tôi sẽ giải thích về cách đặt tên variables cũng như một vài lưu ý khi làm việc này.

🔥 **_Tổng kết_**

-   Biến (variable) được sử dụng để lưu trữ một giá trị nào đó.
-   Biến được sử dụng rất nhiều nếu không muốn nói là nhiều nhất trong lập trình.
-   Biến giúp chương trình nhìn tường minh và logic hơn.
-   Trong JS, khi khai báo biến, bạn không cần thiết phải khai báo kiểu dữ liệu (số, chuỗi kí tự, hay logic) cho biến.
-   Tên biến phân biệt viết hoa và viết thường.

❓ **Task**

-   Khởi tạo 2 variables gồm: `myFullName` và `myAge` với giá trị tương ứng là họ tên đầy đủ và tuổi của bạn. Bạn có thể xem lại ví dụ để nắm được cách khởi tạo giá trị của 2 kiểu dữ liệu tương ứng.
