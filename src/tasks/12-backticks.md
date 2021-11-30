---
title: Backticks
direction: backticks
course: into-programming
order: 12
task: yes
assertReg: str\s*=\s*`\${ourCountry}\s\${quote}-\${year}\!;*
hint: Make sure you use backticks, combine with 3 variables and other characters (like - !).
next: string-concatenation
---

Ngoài cặp dấu single quotes và double quote, JS hiện đại còn có thêm một cặp dấu nữa có thể chứa giá trị của một string. Tuy rằng có thể không phù hợp khi nói tới nó ở phần **Into programming** nhưng sẽ thật thiếu sót nếu không đề cập tới nó: **backticks**

Về cơ bản, bạn viết giá trị của string bên trong `` ` ` `` như khi viết bên trong`' '`hoăc`" "`.

Có hai lợi ích cơ bản khi dùng **backticks**:

-   Bạn có thể viết ký tự `'` hay `"` tùy ý mà không cần quan tâm điều gì (không cần thiết phải sử dụng `\`).
-   String dùng backticks có thể xuống dòng tùy ý (bằng cách nhấn **enter** trên bàn phím) mà không gặp lỗi.

![example1](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2012%3A%20Backticks%2Ftask12.png?alt=media&token=d3be465a-ff67-41a0-8b32-561b54c70028)

Cuối cùng, điều hay ho nhất backticks mang lại chính là hiển thị giá trị của variables khác.

Wow, cái này hay nha. Nghe thôi đã thấy lạ và hấp dẫn phải không. Không chỉ thế đâu, đây là thao tác mà bạn sẽ sử dụng rất nhiều khi code website bằng JS (cùng các thư viện gốc JS). Nó trông như thế này:

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2012%3A%20Backticks%2Ftask12.2.png?alt=media&token=b5be2175-195f-4203-bf86-b4fb94b779e7)

Bạn thấy đó, không chỉ một mà nhiều variables có thể được hiển thị trong một giá trị string duy nhất. Không yêu cầu variable đó phải mang kiểu String (`year` là một Number). Trong quá trình thực hiện, Number `2019` đã được chuyển thành String `` `2019` `` (bạn sẽ hiểu về cơ chế này ở những phần chuyên sâu về JS sau).

🔥 **_Tổng kết_**

-   Bạn có thể dùng **backticks** `` ` ` `` để bọc lấy ký tự của variables mang kiểu String.
-   Backticks rất tiện lợi nếu trong chuỗi ký tự có nhiều `"` `'` hay ký hiệu xuống dòng.
-   Điều hay ho nhất là nó có thể hiển thị giá trị của bất cứ variable nào bạn muốn.

❓ **Task**

-   Giả sử chúng ta đã có variable `ourCountry` mang giá trị `Việt Nam`, `quote` mang giá trị `quyết tâm chiến thắng đại dịch COVID`, `year` là số `19` và `str` chưa được khởi tạo giá trị. Hãy sử dụng backticks ghép 3 variables có sẵn (behind the scene) để tạo ra `str` có giá trị là một string `Việt Nam quyết tâm chiến thắng đại dịch COVID-19!`.
