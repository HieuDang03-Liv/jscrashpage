---
title: Returned value from function
direction: return-function
course: into-programming
order: 27
task: yes
defaultEditor: 'let result


//Only change code below this line

function smallerNum(a, b) {

    if (a < b)

    return

}

result =      //change this line'
numberValueTest: result === -10 && smallerNum(-10, -9) < smallerNum(-8, -9)
hint: Function should return smaller value.
---

Trong toán học, hàm f(x) khi được gán giá trị x, sẽ trả về kết quả đại số. Trong lập trình, function cũng có thể trả về giá trị.

Không chỉ làm được `console` hay `alert` đâu, function có thể trả về bất cứ giá trị nào có liên quan mà bạn cần, thông qua `return` ở cuối mỗi `function`.

Bạn còn nhớ `function sum` ở bài trước không, thay vì `console.log`, tôi sẽ dùng `return` để trả về giá trị **tổng** của 2 số. Khi làm như vậy, bạn có thể gán giá trị của lần **gọi function** cho một variable.

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2027%3A%20Return%20function%2Ftask27.png?alt=media&token=18e606a6-ec63-4128-b969-1f5a79d67406)

Hãy quan sát kĩ, tôi gán giá trị của lần gọi `sum(3, 7)` cho `a`. Điều đó được thực hiện: gọi function `sum` với 2 arguments là `3` và `7`, kết quả trả về (thông qua `return`) được gán vào variable `a`.

Sau đó tôi thay đổi giá trị của `a` với các lần gọi function khác nhau (argument) khác nhau.

Miễn là trong `function` có `return`, bạn có thể vận dụng giá trị đó vào bất cứ dòng code nào.

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2027%3A%20Return%20function%2Ftask27.2.png?alt=media&token=f8be64cf-834a-42be-bc0e-7eba39b77bcc)

Bạn còn nhớ về các variable `i` trong các `for` loop không, như tôi đã đề cập (do **scope**) chúng hoàn toàn khác nhau bất chấp việc có cái tên như nhau. `function` cũng dùng **scope** cho việc đó. Vậy nên parameter `a` và `b` ở các `function` là không hề liên quan tới nhau, chúng đơn giản chỉ là tên gọi để thuận tiện cho việc thao tác bên trong block của mỗi `function`.

📌 **Lưu ý**

-   Khi `function` gặp câu lệnh `return`, tất cả các dòng code (logic) phía sau đều bị bỏ qua.
-   `return` là duy nhất trong mỗi `function`, vì vậy nếu muốn `return` trả về giá trị khác nhau qua mỗi trường hợp khác nhau thì bạn phải sử dụng `if` statement.

Ở ví dụ `function greaterNumber`, tôi dùng 2 câu lệnh `return` nhưng `return` thứ hai không được đặt trong `else` block. Điều này rất dễ giải thích nếu chúng ta kết hợp tính chất của cả `if/else` statement. `if (a > b)` chỉ thực thi `return` nếu điều kiện `a > b` đúng, khi đó `return` được thực thi và kết thúc luôn `function` .Trong trường hợp `a > b` sai thì statement bị bỏ qua. Do vậy thường chúng ta không cần `else` khi viết `return` trong function.

🔥 **_Tổng kết_**

-   `return` trong function trả về giá trị có liên quan. Thông thường khi truyền **arguments** khác nhau thì kết quả `return` sẽ khác nhau.
-   Với function có câu lệnh `return`, chúng ta có thể gán giá trị của lần gọi function đó cho variable, điều này xảy ra thường xuyên khi lập trình.
-   Mỗi function chỉ có **1** `return` hợp lệ, sau khi gặp `return` function sẽ dừng lại và bỏ qua hết tất cả câu lệnh bên dưới `return` (nếu có).

❓ **Task**

-   Hoàn thiện `function smallerNum` sao cho giá trị `return` là số nhỏ hơn trong 2 số được truyền.
-   Gọi `smallerNum` với 2 arguments là `-9` và `-10`.
-   Gán giá trị của lần gọi đó cho `result`.
