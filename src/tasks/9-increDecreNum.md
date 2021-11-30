---
title: Increment and decrement
direction: increment-decrement-num
course: into-programming
task: yes
order: 9
assertReg: b\s*=\s*\+\+\s*a;*
hint: make sure you write only 1 line using Increment
next: string-type
---

Tiếp tục là một cách thao tác rút gọn khác khi làm việc với các phép tính, nhưng lần này chỉ đối với phép cộng và phép trừ.

Ở ngay bài trước, tôi có viết một ví dụ khi cộng giá trị của variable `a` thêm 1 đơn vị: `a += 1`
Chúng ta có thêm cách viết khác với ý nghĩa tương tự: `a++` hoặc `++a`

Chắc bạn sẽ tự hỏi, "vậy nếu muốn cộng hoặc trừ nhiều hơn 1 đơn vị thì sao?". Câu trả lời là cách viết này không làm được. Cách viết code này chỉ cộng/trừ 1 đơn vị vào/từ variable ban đầu.

📌 **Lưu ý**: nếu đứng một mình `a++` và `++a` có vẻ giống hệt nhau

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%209%3A%20Increment%20and%20decrement%2Ftask9.1.png?alt=media&token=3b9987ae-7aaa-48a7-958c-a93a152994fe)

Nhưng khi chúng ta thay đổi một chút thôi

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%209%3A%20Increment%20and%20decrement%2Ftask9.2.png?alt=media&token=108c4f31-f4cf-4137-98ae-a8e2cce8aa2d)

Đợi đã, chẳng phải đã tăng `a` thêm 1 đơn vị sao? Chẳng phải `c` mang giá trị của `a` thêm 1 đơn vị đó sao? Vậy tại sao `b` mang giá trị của `a` ban đầu?

Câu trả lời là `a++` trả về giá trị `a` ban đầu tại **statement** chứa câu lệnh `a++`. Như hình trên, statement chứa `a++` không may là biểu thức gán giá trị cho `b`. Và hậu quả là việc `a` vẫn được tăng 1 đơn vị nhưng `b` chỉ nhận giá trị `a` ban đầu.

Vậy nên khi gán giá trị cho variable, chúng ta cần cẩn thận với những operator như `a++`. Hãy làm như hình đầu tiên, hoặc nếu không hãy dùng `++a`. Operator này cũng tăng `a` lên 1 đơn vị nhưng trả về giá trị `a` mới ngay biểu thức chứa câu lệnh `++a`.

![example3](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%209%3A%20Increment%20and%20decrement%2Ftask9.3.png?alt=media&token=f0a399eb-55d2-4545-aeba-7df8ed3fe452)

Bạn thấy không? `b` ngay lập tức mang giá trị mới của `a`. Còn khi viết câu lệnh `++b` độc lập, thì nó giống với `b++` (`c` mang giá trị `b` mới).

`a--` và `--a` cũng có tính chất giống với `a++` và `++a` chỉ khác chúng sẽ giảm 1 đơn vị thay vì tăng.

![example4](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%209%3A%20Increment%20and%20decrement%2Ftask9.4.png?alt=media&token=b28a8ecf-909c-4ac5-bf75-62e0e68ad077)

🔥 **_Tổng kết_**

-   Increment/Decrement rất hữu dụng trong lập trình, nhưng hãy thật cẩn thận khi dùng chúng, nếu không có thể bạn sẽ không biết giá trị của variable đang là gì đâu.
-   `a++` tăng a thêm 1 đơn vị nhưng không trả về giá trị mới ngay lập tức.
-   `++a` tăng a thêm 1 đơn vị và trả về giá trị mới ngay lập tức.

❓ **Task**

-   Giả sử chúng ta đã có variable `a` bằng 10, và `b` chưa được gán giá trị (behind the scene). Bạn hãy viết 1 câu lệnh duy nhất sử dụng Increment như trên để làm cho `b` mang giá trị `11`.
