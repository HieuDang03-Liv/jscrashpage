---
title: Comparisons
direction: comparisons
course: into-programming
order: 17
task: yes
numberValueTest: a === 10 && b === 12 && y === a < b
defaultEditor: 'let a = 10

let b = 12


//Only change code below this line

let y = a  b'
hint: Comparison between a and b to make y true.
next: string-comparisons
---

Điều tạo lên tính logic cho toán học và lập trình chính là sự so sánh giá trị.

Trong toán học, chúng ta có so sánh giá trị đại số, trong lập trình chúng ta cũng có điều tương tự, nhưng không chỉ dừng lại cho số.

So sánh không bằng nhau chúng ta có **5** loại:

-   `<` nhỏ hơn
-   `<=` nhỏ hơn hoặc bằng
-   `>` lớn hơn
-   `>=` lớn hơn hoặc bằng
-   `!=` không bằng

4 loại so sánh đầu có vẻ vô cùng dễ hiểu, nhưng loại cuối cùng xem chừng lạ (trong toán học, chúng ta chỉ sử dụng ! thay vì !=). Hãy để tôi giải thích.

Bạn còn nhớ **Assignment Operator** `=` không? Như tôi đã đề cập, trong thế giới lập trình, dấu `=` đứng một mình mang ý nghĩa gán giá trị, chứ không mang ý nghĩa so sánh các giá trị. Để so sánh hai giá trị, chúng ta sử dụng `==`. Vì thế mà so sánh xem hai giá trị có khác nhau không, chúng ta sử dụng thêm 1 dấu `=` -> `!=`.

Ví dụ: `a = 2` không trả về bất cứ giá trị nào, mà chỉ đơn giản gán giá trị cho `a`.
Nhưng `a == 2` không gán giá trị cho `a` mà trả về giá trị boolean `true/false`.

Bạn có thể thử điều này bằng cách mở console trên Chrome/Firefox và thử (nhấn **enter** để chạy code). Hãy khai báo variable `a` bạn thích. Khi dùng `=` để khởi tạo giá trị, bạn sẽ thấy xuất hiện dòng `undefined` (mang ý nghĩa: không có giá trị trả về). Nhưng khi dùng `==` để so sánh, sẽ có `true` hoặc `false` hiện lên (giá trị trả về là `true` hoặc `false`).

Bạn có thể thử nhiều hơn bằng cách so sánh các giá trị số khác nhau. Để bạn dễ hình dung, tôi sẽ thao tác trực tiếp trên Chrome console của tôi.

![example](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2017%3A%20Comparisons%2Ftask17.png?alt=media&token=5aa0e044-7fab-487a-80b0-16bcea3c140a)

Bạn cũng có thể gán luôn giá trị `true/false` cho một variable bằng việc so sánh:  
`let x = 3 < 2` (x sẽ mang giá trị trả về của phép so sánh -> `false`)

📌 **Lưu ý**

-   Chúng ta có thể so sánh không chỉ các number, mà còn các string.
-   Không nên so sánh nhiều hơn 2 giá trị, điều này sẽ tạo ra những kết quả kì lạ, khó hiểu, đây cũng là nguyên nhân nhiều người nói JS rất khó để thành thục.

🔥 **_Tổng kết_**

-   Khi so sánh các giá trị (variable), kết quả trả về sẽ là `true` hoặc `false`.
-   Bằng nhau `==` và khác nhau `!=` là hai kiểu so sánh được dùng nhiều nhất trong lập trình.

❓ **Task**

-   Không thay đổi giá trị của `a` và `b`, hãy làm cho `y` mang giá trị `true`.
