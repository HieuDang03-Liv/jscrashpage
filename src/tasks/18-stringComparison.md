---
title: String comparisons
direction: string-comparisons
course: into-programming
order: 18
task: yes
numberValueTest: strA < strB && strA === "zzz" && strB.length === 4
defaultEditor: 'let strA = "zzz"


//Only change code below this line

let strB = "zza"'
hint: You can only add 1 character to strB.
next: type-conversion
---

Ở bài trước, tôi từng đề cập rằng JS cho phép so sánh giữa 2 **strings**. Thật ra không chỉ JS đâu, so sánh strings là tính năng có ở gần như tất cả các ngôn ngữ lập trình. Vậy quy tắc so sánh như thế nào?

Về cơ bản, để biết string nào **lớn hơn**, 2 strings sẽ so sánh **letter-by-letter**. Nghĩa là từng ký tự trong strings sẽ được so sánh với nhau.

Lấy ví dụ đơn giản nhất `'abc'` và `'cba'` sẽ có kết quả so sánh là `'abc' < 'cba'`

Thuật toán so sánh được diễn ra như nhau:

-   So sánh ký tự đầu tiên của strings
-   Nếu ký tự đầu tiên của string thứ nhất lớn hơn ký tự đầu tiên của string thứ hai thì string thứ nhất lớn hơn thứ hai và ngược lại. Vậy là xong, chúng ta đã có kết quả.
-   Trong trường hợp ký tự đầu tiên của cả 2 strings như nhau, thuật toán so sánh tiếp ký tự thứ 2 của strings.
-   Cứ lặp lại cho đến khi hết độ dài của strings.
-   Nếu đến ký tự cuối cùng mà chúng vẫn như nhau, thì kết quả là 2 strings bằng nhau. Còn không, string dài hơn thì lớn hơn.

Còn về so sánh 2 ký tự bằng cách chuyển chúng về mã ASCII, **ký tự nào có thứ trong bảng ASCII lớn hơn thì lớn hơn**.

Trở lại ví dụ `'abc' > 'cba'`. Ký tự đầu tiên của `'abc'` là `'a'` có mã ASCII là **97**, phía ngược lại `'c'` cso mã ASCII là **99**. Do đó `'a' < 'c'`, thuật toán so sánh kết thúc, kết quả nhận được là `'abc' < 'cba'`.

Về cơ bản bạn chỉ cần nhớ rằng: trong bảng mã ASCII, chữ số đứng trước chữ viết hoa, chữ viết hoa đứng trước chữ viết thường. Vậy nên tất cả phép so sánh sau đều trả về giá trị `true`:

-   `'9' < 'A'`
-   `'8' < 'a'`
-   `'Y' < 'a'`
-   `'Z' < 'z'`
-   `'a' < 'b'`

Tôi sẽ làm thêm ví dụ ngay trên Chrome console:

![example](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2018%3A%20String%20comparisons%2Ftask18.png?alt=media&token=0efc66bb-3851-4819-bd8f-5fbc9bb6661d)

🔥 **_Tổng kết_**

-   Strings vẫn có thể đem ra so sánh với nhau, bằng cách so sánh từng ký tự. Lưu ý rằng không phải bao giờ string dài hơn cũng sẽ lớn hơn.
-   Ký tự số (0 - 9) vẫn sẽ được so sánh với nhau theo thứ tự trên bảng ASCII.

❓ **Task**

-   Không thay đổi giá trị của `strA` mà chỉ thêm 1 ký tự vào `staB`, hãy làm sao để `strA < strB` trả về giá trị `true`.
