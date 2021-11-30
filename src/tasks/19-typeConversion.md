---
title: introducing to type conversion
direction: type-conversion
course: into-programming
order: 19
task: no
next: blocks
---

Bạn có thắc mắc "Nếu có thể so sánh string với string, number với number thì có thể so sánh string với number được không?". Câu trả lời là hoàn toàn có thể, thậm chí bạn còn có thể so sánh chúng với boolean.

Tuy nhiên, đây là một cơ chế chuyên sâu của JS. Tôi chỉ có thể giải thích ngắn gọn rằng: khi so sánh 2 giá trị không cùng kiểu dữ liệu, **JS sẽ ép buộc chúng trở về chung một kiểu dữ liệu.**

Đúng vậy, việc chuyển đổi kiểu dữ liệu của một giá trị hay một variable trong JS được thực hiện theo hai hướng: **explicit (rõ ràng, có thể nhìn thấy)** hoặc **implicit (ngầm định, behind the scene, không thấy được rõ ràng)**.

Việc JS ép buộc 2 variables có kiểu dữ liệu khác nhau về chung một kiểu chính là cơ chế implicit conversion.

Chắc chắn chúng ta sẽ tìm hiểu về điều này khi học chuyên sâu về JS ở phần sau. Bây giờ, ở bài học này, chúng ta chỉ tìm hiểu về explicit conversion.

Đúng như tên gọi, khi variable hay một giá trị được chuyển từ kiểu dữ liệu này sao kiểu dữ liệu khác, sẽ cần có code thực thi do chính lập trình viên viết.

Với 3 kiểu dữ liệu cơ bản là **Number, String, Boolean**, JS đều cung cấp cho chúng ta công cụ để chuyển đổi qua lại với nhau. Những chức năng đó sẽ được giới thiệu qua 3 bài trong phần chuyên sau về JS, để bạn có thể dễ nắm bắt hơn.

Nhưng trước hết, để kiểm tra xem giá trị hay variable `x` cần xét mang kiểu dữ liệu gì, chúng ta sử dụng:  
`typeof x`

![example](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2019%3A%20Type%20conversion%2Ftask19.1.png?alt=media&token=43f14d80-651a-4527-a7d0-8e9d045e6ddf)

Bên trên là ví dụ về các giá trị đơn thuần (literal values). Còn với variables, mọi thứ cũng tương tự:

![example2](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%2019%3A%20Type%20conversion%2Ftask19.2.png?alt=media&token=66a58354-d4b6-45ea-a902-85742c2f5afa)

📌 **Lưu ý** : kết quả trả về khi sử dụng câu lệnh `typeof` luôn là một **string** mang giá trị là kiểu dữ liệu thu được. Bạn có thể xác nhận bằng cách `typeof typeof 12`. Kết quả nhận được là một **string** mang giá trị `'string'`.

🔥 **_Tổng kết_**

-   Chúng ta có thể chuyển đổi kiểu dữ liệu qua lại giữa 3 kiểu dữ liệu cơ bản: Number, String và Boolean.
-   `typeof` trả về kiểu dữ liệu của một giá trị hay variable.
