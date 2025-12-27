---
title: "Fetch API trong JavaScript – Cách Gọi HTTP Hiện Đại"
date: "2025-12-15"
excerpt: "Thay thế XMLHttpRequest rườm rà bằng cú pháp sạch sẽ, dựa trên Promise để xử lý giao tiếp mạng hiệu quả hơn."
category: "JavaScript"
tags: ["JavaScript", "Frontend", "API", "Async"]
---

Trong kỷ nguyên Web 2.0 và Single Page Applications (SPA), việc trao đổi dữ liệu không đồng bộ (Asynchronous) là kỹ năng cốt lõi. **Fetch API** cung cấp một giao diện mạnh mẽ, linh hoạt để quản lý các yêu cầu HTTP trong trình duyệt.

### 1. Tại sao nên dùng Fetch thay vì XHR?

Trước đây, chúng ta phải dùng `XMLHttpRequest` với cấu trúc code lồng nhau rất khó đọc (callback hell). Fetch API ra đời với những ưu điểm:

- **Dựa trên Promise:** Giúp quản lý các tác vụ bất đồng bộ mượt mà hơn.
- **Cú pháp sạch sẽ:** Dễ viết, dễ bảo trì.
- **Tích hợp sẵn:** Không cần cài đặt thư viện ngoài như Axios cho các tác vụ cơ bản.

### 2. Cách hoạt động cơ bản (.then)

Mặc định, `fetch()` trả về một Promise. Promise này không trả về dữ liệu ngay mà trả về một đối tượng `Response`.

```javascript
fetch(
  "[https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)"
)
  .then((response) => {
    // Bước 1: Kiểm tra phản hồi có thành công không (status 200-299)
    if (!response.ok) {
      throw new Error(`Lỗi mạng: ${response.status}`);
    }
    // Bước 2: Chuyển đổi body của response sang định dạng JSON
    return response.json();
  })
  .then((data) => {
    // Bước 3: Sử dụng dữ liệu nhận được
    console.log("Dữ liệu:", data);
  })
  .catch((error) => {
    // Xử lý lỗi (mất mạng, URL sai...)
    console.error("Lỗi:", error);
  });
```
