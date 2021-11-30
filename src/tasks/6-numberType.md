---
title: Number type
direction: number-type
course: into-programming
order: 6
task: no
next: basic-operators-maths
---

Đến với kiểu dữ liệu Number, tôi có vài lưu ý nhỏ sau đây.

Thật ra để tao giá trị số, JS có 2 kiểu riêng lẻ là **Number** và **BigInt**. BigInt để chứa những giá trị số quá lớn và về cơ bản, bạn không thường xuyên dùng đến nó. Do vậy tôi chỉ đề cập đến Number.

Khi làm việc với Number, tất nhiên bạn có thể dùng cả _số âm_ và _số thập phân chứa dấu phẩy_.

Với số âm, bạn phải biết dấu `-` ngay sát con số `let randomNegative = -19`  
Với số thập phân chứa dấu phẩy (theo toán học của người Việt Nam), chúng ta sử dụng **dấu chấm** `.` thay thế `let randomDecimal = 1.25`

Trước khi đi vào thao tác với phép tính, tôi sẽ giới thiệu với bạn một vài **method** bạn có thể cần.

`Math.floor(num)`: `num` được làm tròn xuống.  
`Math.ceil(num)`: `num` được làm tròn lên.  
`Math.round(num)`: `num` được làm tròn tới số nguyên gần nhất, **.5** sẽ được làm tròn lên.  
`Math.trunc(num)`: `num` không được làm tròn, chỉ xóa tất cả từ dấu phẩy thập phân.  
`Math.random()`: tạo ra số thực ngẫu nhiên từ 0 đến 1 (không bao gồm 1).
`Math.pow(a, b)`: lũy thừa bậc `b` của `a`.

![examples](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%206%3A%20Number%20type%2Ftask6.png?alt=media&token=af3e2753-7a52-4631-a703-900192d58cd2)

📌 **Lưu ý** : bạn không cần phải nhớ hết tất cả, bạn chỉ cần biết là có tồn tại chúng thôi. Và từ sau trở đi, bạn không cần nhớ tất cả các khái niệm hay phương thức được dạy, vì suy cho cùng tất cả đều có trên **Google**. Là một lập trình viên, học cơ bản rất quan trọng, và có quá nhiều thứ chúng ta chưa biết. Vậy nên đừng ngại google, vì kể cả những chuyên gia cũng **Google** hằng ngày mà.

🔥 **_Tổng kết_**

-   Chúng ta thường xuyên sử dụng kiểu dữ liệu Number trong lập trình.
-   Có nhiều điều có thể làm với Number, bạn có thể tham khảo **[tại đây](https://javascript.info/number)**.
