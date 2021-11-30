---
title: Types of variable
direction: types-of-variable
course: into-programming
order: 5
task: yes
assertReg: let\s+yourYearOfBirth\s*=\s*\d+;*#+let\s+yourCity\s*=\s*".+";*#+let\s+areYouVietnamese\s*=\s*(true|false);*#*
hint: make sure 3 variables in order, and they have 3 corresponding types of data relatively
next: number-type
---

Phần quan trọng tiếp theo liên quan variable chính là các kiểu dữ liệu.

Đợi chút, có gì đó không đúng, phải chăng tôi đã nói rằng khi khai báo bạn không cần phải quan tâm về kiểu dữ liệu cho cho variable hay sao. Đúng, tôi đã viết như vậy, nhưng tôi không hề viết rằng kiểu **(type)** của chúng là không quan trọng.

Nếu bạn không quên, trong ngôn ngữ JS khi khai báo variables thì chúng ta chỉ cần có keyword `let`. Nhưng khi bạn khởi tạo giá trị cho chúng, thì kiểu dữ liệu của chúng cũng đã được xác định tùy thuộc theo những giá trị đó.

Trước tiên bạn cần biết rằng, có 8 kiểu dữ liệu trong JavaScript, được chia ra làm 2 nhóm (**nguyên thủy** và **không nguyên thủy**). 6 kiểu nguyên thủy gồm: **Number**, **String**, **Boolean**, **Null**, **Undefined**, **Symbol**; và bộ đôi còn lại: **Object**, **RegExp**.

Vì đây mới là khởi đầu, tôi sẽ chỉ giới thiệu 3 loại cơ bản nhất trong nhóm **nguyên thủy**: **Number**, **String**, **Boolean**.

Number là tất cả những giá trị số.
String là các giá trị kí tự (bao gồm cả chữ, số, kí hiệu đặc biệt) được viết trong cặp dấu **" "** hoặc **' '**.
Boolean chỉ bao gồm 2 giá trị logic `True` và `False`.

Sau đây là ví dụ cụ thể:  
`let daysOfNovember = 30` (kiểu Number)  
`let famousFootballer = "Cristiano Ronaldo"` (kiểu String)  
`let isSingle = false` (kiểu Boolean)

🔥 **_Tổng kết_**

-   Khi khởi tạo giá trị cho variables tức là đã gán kiểu dữ liệu cho nó.
-   JS có 8 kiểu dữ liệu, và cơ bản nhất gồm Number, String, Boolean.
-   Number là giá trị số, String gồm các kí tự trong dấu " " hoặc ' ' và Boolean chỉ có 2 giá trị True và False.

❓ **Task**

-   Khởi tạo 3 variables theo thứ tự gồm: `yourYearOfBirth`, `yourCity`, `areYouVietnamese` với 3 kiểu dữ kiệu Number, String và Boolean tương ứng.
