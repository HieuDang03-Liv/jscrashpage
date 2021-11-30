---
title: Input, output and comment
direction: io-and-comment
course: into-programming
order: 2
task: no
next: variables-values
---

Để bắt đầu, tôi sẽ giới thiệu về nơi bạn viết code bằng JS (**input**) và làm sao để nhìn thấy kết quả (**output**) đi kèm với đó là một kĩ thuật quan trọng trong lập trình (**comment**).

Cần phải biết: cách đơn giản nhất bạn có thể viết code JS là mở mục **console** trên trình duyệt (nên là Chrome, Firefox vì trình duyệt khác tôi không cách khởi động giống nhau). Để tôi nhắc lại, nếu bạn đang dùng **Windows**, dùng tổ hợp **Ctrl + Shift + J** ; nếu đang dùng **Mac OS**, hãy dùng tổ hợp **Cmd + Opt + J**. Sau đó chọn vào mục **console** và bắt đầu viết code (**enter** để chạy code, **shift + enter** để xuống dòng).

Sau này, khi viết các dự án web, bạn cần một **code editor** tốt và phù hợp với style của mình. Tôi đề xuất sử dụng **Visual Studio Code**. Một file code chạy JS sẽ có phần đuôi (extension) là **.js**. Với các bài học có phần **task**, tôi cũng đã có một editor cho người dùng tương tác, nhưng editor đó tôi lập trình với mục đích để test code của bạn có đúng yêu cầu không. Vậy nên editor đó chạy không thực sự tốt cho việc thử code.

Về **input** (cung cấp dữ liệu cho chương trình), JS cung cấp 2 functions cho bạn làm điều này: `prompt` và `confirm`. Còn **output** chúng ta cũng có 2 functions: `alert` cùng `console.log`

📌 **Lưu ý** : bạn không cần rõ chính xác function là gì, hãy cứ thư giản và hiểu đơn giản chúng là những công cụ có sẵn cho chúng ta làm nhiều điều hay ho với code.

Input functions không quá quan trọng trong bài học, và bạn có thể tìm hiểu [**tại đây**](https://javascript.info/alert-prompt-confirm).

Tôi sẽ chỉ nói về output functions. Hãy mở ngay console và gõ `console.log("Hello World")`, bạn sẽ thấy một dòng chữ `"Hello world"` xuất hiện. Đó chính là kết quả trả về khi chúng ta thực hiện function.

Chúng ta chỉ có thể nhìn thấy console khi mở, nhưng với `alert`, nó sẽ là một cửa sổ nhỏ mà bạn có thể nhìn được. Hãy gõ thử `alert("Hello World")` thử xem.

Quan trọng hơn, bạn cần biết về **comment** trong lập trình. Khi chạy code, chương trình sẽ bắt buộc chúng ta viết bằng các keyword hoặc các câu lệnh xem chừng không dễ hiểu. Vậy nên để người khác hiểu code chúng ta làm gì khi đọc, hay chính bản thân khi xem lại code của mình, chúng ta cần ghi chú. Và đó là nhiệm vụ của **comment**. Comment là những dòng chữ bạn có thể viết bất cứ thứ gì mình muốn mà không lo gặp lỗi khi chạy chương trình. Bởi trong quá trình chạy, chương trình sẽ tự động bỏ qua các dòng comment. Chỉ có người làm việc với code mới thấy được **comment**.

Trong JS, có hai cách để comment nội dung:

-   `/content/` để comment dòng đơn.
-   `/* multiple lines content */` để comment nội dung gồm nhiều dòng, các ký tự có thể để ở nhiều dòng miễn là chúng ở trong cặp dấu.

🔥 **_Tổng kết_**

-   Console là nơi viết code JS đơn giản nhất.
-   Comment là vô cùng hữu dụng và cần thiết khi lập trình.
