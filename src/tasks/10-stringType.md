---
title: String type
direction: string-type
course: into-programming
order: 10
task: yes
numberValueTest: str === "What\'s happened to me? he thought.\n\nIt wasn\'t a dream."
defaultEditor: let str = "change this variable"
hint: Remember to use add new lines syntax and single quotes rule.
next: less-common-characters
---

Được rồi, có lẽ bạn đã chán với những con sô, hãy đến với kiểu dữ liệu String.

Nhắc lại một chút, variables mang kiểu dữ liệu String có giá trị là một chuỗi ký tự được đặt trong cặp dấu `""` hoặc `''`.

Chuỗi ký tự đó có thể là bất cứ điều gì: chữ cái, số, ký tự đặc biệt và thậm chỉ cả emoji (icon) nếu bạn có thể đánh máy ra được.

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2010%3A%20String%20type%2Ftask10.1.png?alt=media&token=5f0f167b-39cb-494a-9c15-41289f1bead2)

Vậy khi nào dùng `""` khi nào dùng `''`? Câu trả lời là tùy thuộc vào sở thích của mỗi người. Sự thật là khi bạn làm việc nhóm, để thống nhất code style với nhau, sẽ có những công cụ tự động sửa code style của bạn để đồng bộ code style của cả nhóm. Ví dụ: bình thường bạn hay sử dụng `""` nhưng nhóm bọn thống nhất dùng `''` cho strings, khi code strings của bạn tự động chuyển sang dùng `''`.

📌 **Lưu ý** : trong trường hợp muốn xuất hiện dấu **quote** ở trong string, thì bắt buộc bạn phải sử dụng dấu **quote** còn lại để chứa cả string. Còn khi bạn chỉ muốn **single quote** `'` thì hãy dùng ký hiệu `\` kèm với dấu đơn đó.

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2010%3A%20String%20type%2Ftask10.2.png?alt=media&token=c506d580-4dda-4e73-bfea-861413d8228c)

Như tôi đã nói, String chứa bất cứ thứ gì bạn nghĩ ra. Vậy nên bạn muốn một string ở nhiều dòng là hoàn toàn có thể. Để làm được điều này bạn cũng sẽ chèn thêm ký hiệu `\`, cụ thể là `\n` để xuống dòng. Nếu bạn không dùng `\n` mà chỉ đơn thuần nhấn **enter** thì string sẽ không xuống dòng mà còn trở thành một **invalid** string.

![example3](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2010%3A%20String%20type%2Ftask10.3.png?alt=media&token=57f30bc7-41b0-4fdc-a349-9fcd14cc4710)

Với `\` bạn có thể thêm rất nhiều thứ hay ho vào trong strings. Tôi sẽ giới thiệu một vài trong số chúng ở bài sau.

🔥 **_Tổng kết_**

-   Cùng với Number, String là kiểu dữ liệu thường xuyên được sử dụng trong lập trình.
-   String được đặt trong cặp dấu **single quote** `''` hoặc **single quote** `""`.
-   Nếu muốn xuất hiện **single quote** hoặc **single quote** trong string, hãy dùng cặp dấu còn lại để bọc bên ngoài string, hoặc sử dung `\'` và `\"`.
-   `\n` để tạo ra string nhiều dòng, còn nếu dùng phím **enter**, sẽ xuất hiện lỗi đó.

❓ **Task**

-   Hãy sửa `str` thành một string có dạng như sau:

"What's happened to me?" he thought.

It wasn't a dream.
