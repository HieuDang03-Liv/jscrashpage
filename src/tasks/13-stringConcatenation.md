---
title: String concatenation
direction: string-concatenation
course: into-programming
order: 13
task: yes
defaultEditor: 'let strA = "Tell you "

let strB = "You are greatest"


//Only change code below this line

let str = strA + strB'
numberValueTest: (str === strA + strB + "!") && strA === "Tell you " && strB === "You are greatest"
hint: Do not change value of strA, strB. Notice that str has "!" at the ending.
next: string-methods
---

Khi sử dụng **backticks** `` ` ` `` chứa variables bên trong, có nghĩa là bạn vừa ghép các string khác nhau vào một string. Thao tác này có thể hiểu đơn giản là kết nối các chuỗi với nhau (concatenate strings).

Dùng backticks rất tiện lợi, nhưng có một cách viết khác dễ hiểu hơn nhiều, và cách viết này có ở hầu hết các ngôn ngữ lập trình hiện đại. Đó là kết hợp toán tử cộng `+` với các strings.

Ví dụ, khi bạn muốn ghép `strA` và `strB` thành một `strC` mới, bạn có thể làm như sau

![example](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2013%3A%20String%20concatenation%2Ftask13.png?alt=media&token=7ea7d4b1-e09d-4aa0-9cd3-9ab7107aea6e)

Bạn thấy không, giống như cộng hai số, khi sử dụng `+` với hai strings, kết quả đơn giản là kết hợp giá trị của hai variables. Và nếu có bất đồng về việc sử dụng double hay single quotes, string kết quả sẽ sử dụng **backticks** để thay thế.

📌 **Lưu ý** : không chỉ hai strings, bạn hoàn toàn có thể kết hợp ba, bốn, ... rất nhiều strings với nhau.

Cách cộng string bằng toán tử `+` ngắn gọn, và có phần dễ hiểu với những ai đã học ngôn ngữ lập trình khác trước khi tới với JS. Nhưng khi sử dụng JS trong các chương trình hiện đại, tôi vẫn khuyên bạn nên dùng **backticks** để nối strings.

🔥 **_Tổng kết_**

-   Phần lớn các ngôn ngữ (bao gồm JS) sử dụng operator `+` để nối các string với nhau.
-   Bạn có thể nối các variable kiểu string hoặc các literal string hay cả hai loại với nhau.

❓ **Task**

-   Không thay đổi giá trị của 2 variables đầu tiên, hãy sử dụng string concatenation để `str` mang giá trị `Tell you You are greatest!`
