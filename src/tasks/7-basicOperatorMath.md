---
title: Basic operators and maths
direction: basic-operators-maths
course: into-programming
order: 7
numberValueTest: a === 120 && b === 15 && sum === a + b && difference === a - b  && product === a * b && quotient === a / b && remainder === a % b && exp === a ** b
defaultEditor: 'let a = 120

let b = 15


//Only change code blow this line

let sum 

let difference 

let product 

let quotient 

let remainder 

let exp'
hint: make sure you not change values of a, b and assign 6 variables with math operators a and b
task: yes
next: assign-augmented
---

OK, hãy tới ngay tới phần toán tử và các phép toán cơ bản với Number trong JS nào.

Nếu bạn còn nhớ, ở bài 2, tôi có viết rằng `=` và `+` đều là **operators**. Đúng vậy, nhưng `=` không phải là **Math Operators**. Khi nói tới các con số, chúng ta nói nhiều về chúng hơn: phép cộng/trừ/nhân/chia.

**Assignment Operator** hay `=` chính là toán tử quan trọng nhất trong thế giới lập trình. Bạn hãy hiểu đơn giản rằng khi bạn sử dụng `=` tức là bạn đã gán giá trị của biểu thức bên phải dấu `=` cho variable bên trái dấu `=`.

📌 **Lưu ý** : không như trong toán học, dấu **=** mang nghĩa 2 vế bằng nhau, nhưng trong lập trình điều này hoàn toàn khác biệt. Vế phải vẫn như cũ, chỉ có vế trái là thay đổi (mang giá trị của vế phải).

Trong các ngôn ngữ lập trình nói chung và JS nói riêng, có 5 math operators cơ bản.

-   Phép tính cộng `+`
-   Phép tính trừ `-`
-   Phép tính nhân `*`
-   Phép tính chia `/` (nếu có phần dư thì kết quả nhận được là phần nguyên)
-   Chia dư `%` (kết quả nhận được là phần còn dư)
    Ngoài ra, JS hiện đại còn có thêm 1 toán tử cơ bản khác: số mũ `a ** b` (tương tự như `Math.pow(a, b)`)

Kết hợp các loại toán tử ở trên chúng ta có một vài ví dụ:

![examples](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%207%3A%20Basic%20operators%20and%20maths%2Ftask7.png?alt=media&token=9a5f3c92-d70f-4b01-91d0-6a4d6ea16339)

**_Tổng kết_** 🔥

-   Cộng `+` , Trừ `-` , Nhân `*` , Chia giữ phần nguyên `/` , Chia giữ phần dư `%` , lũy thừa `**` là những **Math Operators** cơ bản trong JS.
-   Bạn có thể gán giá trị cho variables qua **Assignment Operator** `=` (lưu ý không như toán học, trong lập trình, về mặt ý nghĩa, bạn chỉ có thể gán giá trị cho vế trái chứ không thể coi hai vế bằng nhau).
-   Tất cả operators bạn có thể sử dụng với không chỉ số nguyên mà còn cả số thập phân.

**Task** ❓

-   Không thay đổi những dòng code có sẵn, hãy sử dụng math operators đã nói ở trên để thay đổi giá trị của variables chưa có giá trị.
