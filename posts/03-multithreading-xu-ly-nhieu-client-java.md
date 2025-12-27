---
title: "Xử Lý Đa Luồng (Multithreading) Cho Server Nhiều Client"
date: "2025-12-18"
excerpt: "Giải quyết bài toán thắt nút cổ chai: Làm thế nào để Server xử lý hàng nghìn kết nối cùng lúc mà không bị treo?"
category: "Java Advanced"
tags: ["Java", "Multithreading", "Performance", "Thread Pool"]
---

Trong các bài học trước, chúng ta đã xây dựng một Server đơn luồng. Vấn đề của nó là: **Nếu một Client đang kết nối và chưa ngắt, mọi Client khác sẽ phải đứng đợi trong hàng chờ.** Để giải quyết vấn đề này, chúng ta cần cơ chế **Đa luồng (Multithreading)**.

### 1. Tại sao cần Đa luồng?

Mỗi khi `serverSocket.accept()` trả về một kết nối mới, chúng ta sẽ "ủy quyền" kết nối đó cho một luồng (Thread) riêng biệt xử lý. Server chính sau đó sẽ quay lại trạng thái lắng nghe ngay lập tức mà không bị chặn (blocked).

### 2. Triển khai với Anonymous Thread

Đây là cách tiếp cận nhanh nhất: Mỗi yêu cầu là một Thread mới.

```java
while (true) {
    // 1. Chấp nhận kết nối mới
    Socket client = serverSocket.accept();
    System.out.println("New client connected!");

    // 2. Tạo một Thread mới (Anonymous) để xử lý riêng cho client này
    new Thread(() -> {
        try (
            InputStream input = client.getInputStream();
            OutputStream output = client.getOutputStream()
        ) {
            // Logic xử lý giao tiếp (đọc/ghi dữ liệu) tại đây
            handleClientRequest(input, output);
        } catch (IOException e) {
            System.err.println("Error handling client: " + e.getMessage());
        } finally {
            try { client.close(); } catch (IOException e) {}
        }
    }).start(); // 3. Kích hoạt luồng chạy song song
}
```
