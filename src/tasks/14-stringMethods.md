---
title: String methods
direction: string-methods
course: into-programming
order: 14
task: no
next: access-string
---

Tương tự Number, String cũng có nhiều methods cho bạn sử dụng.

📌 **Lưu ý**

-   Bạn cứ hiểu đơn giản methods là các hành động, có chức năng gì đó thú vị và luôn đi kèm với `()`. Về bản chất, methods là các **function** (tôi sẽ giải thích kĩ hơn khi ta học function).
-   Vị trí bắt đầu của string (ký tự đầu tiên) là **0** chứ không phải ~1~. Vậy nên số thứ tự của một string dài 8 ký tự là từ **0 - 7**.

Nhiều khi, chương trình cần thay đổi string thành viết hoa hay viết thường (mỗi kiểu viết được gọi là một **case**). Bạn có thể sử dụng hai methods `Uppercase` và `toLowerCase()` tương ứng để thực hiện.

Bạn cũng có thể tìm vị trí của một ký tự hay đoạn ký tự trong string: `indexOf()`.

Kiểm tra xem string có chứa ký tự hay đoạn ký tự chỉ định hay không: `includes()`.

Kiểm tra string bắt đầu/kết thúc bằng ký tự hay đoạn ký tự chỉ định hay không: `startsWith()` / `endsWith()`

Cắt một chuỗi con từ chuỗi ban đầu (giữ nguyên chuỗi ban đầu): `slice()`

![example](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2014%3A%20String%20methods%2Ftask14.png?alt=media&token=a4e52c48-4125-45b2-b567-c113fae29242)

🔥 **_Tổng kết_**

-   Có nhiều thao tác bạn sẽ được học để vận dụng string vào lập trình.
-   Đây chỉ là bài giới thiêu, nếu hứng thú tìm hiểu thêm nhiều methods, [**xem tại đây**](https://javascript.info/string#changing-the-case)
