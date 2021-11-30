---
title: Assignment and augmented operators
direction: assign-augmented
course: into-programming
task: yes
order: 8
numberValueTest: x === 12 && y === 12
defaultEditor: 'let x = 84


//Only change code below this line

let y ='
hint: make sure you use += operator
next: increment-decrement-num
---

Khi làm việc với phép tính, bạn sẽ thường xuyên gặp trường hợp muốn thay đổi giá trị của một variable.

Ví dụ khi muốn tăng giá trị của variable `a` thêm 5, bạn cần thực hiện hai loại operators `+` và `=` :
`a = a + 5`

Giả sử trước đó `a` mang giá trị `10` thì sau phép gán trên `a = 15`. Tất nhiên bạn có thể không nhớ giá trị trước đó của một variable (điều này đôi khi là bất khả thi), vậy nên việc thực hiện hai loại operator sẽ là tiện lợi nhất.

Trong JS, có một thao tác nhanh hơn nhưng cũng mang ý nghĩa tương tự. Bạn sẽ không tách hai operators nữa, mà sẽ gộp lại làm một.

Trở lại với ví dụ trên, tôi sẽ viết gọn lại một chút: `a += 5`

Ý nghĩa là tương đương, với cách viết này bạn sẽ cảm thấy code gọn hơn nhưng cũng không hề khó đọc.

Không chỉ với phép công, bạn có thể làm tương tự với các phép tính còn lại.

![examples](https://firebasestorage.googleapis.com/v0/b/js-for-beginners.appspot.com/o/Task%208%3A%20Assignment%20and%20augmented%20operators%2Ftask8.png?alt=media&token=3b97d814-a77c-45af-aa9d-2b2d314ef427)

Có thể bạn thấy khó hiểu với cách viết gộp như vậy của tôi, nhưng hãy đọc phần tôi gợi ý ở dưới, bạn sẽ hiểu ngay thôi. Về cơ bản, khi bạn gộp nhiều operators như ví dụ của tôi, bạn sẽ thực hiện bên phải dấu `=` trước sau đó gán giá trị sau cùng vào variable bên trái dấu `=`. Và tất nhiên variable bên phải dấu `=` cũng bị thay đổi giá trị trước đó rồi.

🔥 **_Tổng kết_**

-   Khi muốn thay đổi giá trị cho variable, chúng ta không nhất thiết phải dùng trực tiếp `=` cùng với một con số tự do nào đó, cách tốt nhất hãy sử dụng chính giá trị hiện tại của nó cùng với toán tử gộp.
-   Thao tác rất đơn giản, dấu của **Math Operator** cùng với dấu `=` và con số. `a += 1` chính là `a = a + 1`.

❓ **Task**

-   Cho trước một Number `x` có giá trị bằng `84`, hãy dùng toán tử gộp để `y` mang giá trị bằng `12`
