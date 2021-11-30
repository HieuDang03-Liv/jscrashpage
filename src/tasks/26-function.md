---
title: Function
direction: function
course: into-programming
order: 26
task: yes
assertReg: function\s+sum\s*\(\s*a\s*,\s*b\s*\)\s*\{\#*\s*console\.log\(\s*a\s*\+\s*b\);*\s*\#*\}\#+\s*sum\(\s*\d\s*,\s*\d\s*\);*
hint: Call function with 2 numbers passed.
next: return-function
---

Các vòng lặp giúp chúng ta thực hiện liên tiếp các hành động liên quan đến nhau, vậy nếu cần lặp lại các đoạn code trong các bối cảnh khác nhau thì sao? Lúc này chúng ta sẽ cần đến function.

Xét vấn đề sau: chúng ta cần gửi lời chào đến mỗi người dùng khi họ vào website của mình. Mỗi người dùng được yêu cầu viết tên của họ, sau đó từ những lần truy cập sau, tự động có lệnh `alert` kèm tên của họ. Tuy nhiên chúng ta không thể viết từng câu lệnh `alert` cho từng người được.

Cách giải quyết như sau: tạo ra một đoạn code, nhận giá trị tùy biến theo tên được nhập, rồi lặp lại mỗi khi người dùng truy cập website. Cách làm này đã vận dụng `function`.

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2026%3A%20Function%2Ftask26.1.png?alt=media&token=f2b96662-4933-4db3-a227-b8e0075b52a8)

-   `function` : **keyword** để định nghĩa một function.
-   `sayHello` : tên của function.
-   `(name)` : **parameter** cần được truyền.
-   `{ }` : block chứa các câu lệnh của function.

Hãy liên hệ với môn toán, chúng ta hay sử dụng hàm f(x). Mỗi khi x mang một giá trị khác thì f(x) có giá trị mới. x là tham số cần được truyền vào (hay được gán giá trị nào đó). Tương tự như **function** trong lập trình. **parameter** cần được truyền mỗi khi sử dụng.

Trong ví dụ trên, **parameter** của `function sayHi` là `(name)`. Bạn có thể đặt bất cứ tên gọi nào bạn muốn, tuy nhiên hãy đặt cái tên có ý nghĩa, phục vụ cho mục đích của block code trong function. Một function có thể có **nhiều** parameter, do vậy hãy cho chúng những cái tên phù hợp.

Tên của function cũng nên đặt theo **camel case**. Nói chung, khi đặt tên (variable, function, parameter, ...) trong JS, hãy luôn dùng **camel case**.

Tuy nhiên, những dòng code trong ví dụ không kích hoạt function, mà chỉ đơn giản là định nghĩa function. Để gọi (kích hoạt, chạy) function, chúng ta sử dụng thao tác `nameFunction(argument)`.

Khoan đã, sao bên trên là **parameter**, xuống dưới đã thành **argument**? Nói một cách ngắn gọn, **parameter** là các variable được định nghĩa theo từng function, còn **argument** là giá trị gán vào các **parameter** đó. Bạn hãy nhớ: định nghĩa function cần định nghĩa **parameters**, gọi function cần truyền **arguments**.

Quay trở lại ví dụ trên, giả sử tên một người dùng ngẫu nhiên là `'John'`, function được gọi như sau:

`sayHello('John')`

Một function có thể không cần parameter, tuy nhiên cặp dấu `()` là bắt buộc. Khi không có parameter thì lúc gọi function, chúng ta cũng không cần truyền argument. Và các lần gọi function chúng ta được kết quả y hệt nhau.

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2026%3A%20Function%2Ftask26.2.png?alt=media&token=4f25b253-9b2b-450c-a67c-f11133920bc1)

🔥 **_Tổng kết_**

-   `function` giúp chúng ta lặp lại các đoạn code mà không cần viết đi viết lại.
-   Khi gọi function, với mỗi giá trị chúng ta truyền vào, kết quả nhận được là khác nhau.
-   Hãy đặt tên function và parameters đi kèm đầy đủ ngữ nghĩa, vừa tiện cho việc code vừa giúp việc đọc lại code không trở thành ác mộng.

❓ **Task**

-   Tạo một function tên là `sum`, với 2 parameters là `a` và `b`: log tổng của 2 giá trị được truyền theo dạng `console.log(num1 + num2)`.
-   Chạy function đó ngay bên dưới với 2 arguments tùy ý (miễn là numbers).
