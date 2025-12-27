---
title: "Socket Programming: Xây Dựng Ứng Dụng Client-Server"
date: "2025-12-19"
excerpt: "Hướng dẫn chi tiết cách thiết lập luồng giao tiếp TCP/IP bằng Socket và ServerSocket trong Java."
category: "Java"
tags: ["Java", "Socket", "Tutorial"]
---

Socket là một trong những khái niệm quan trọng nhất của lập trình mạng. Hãy tưởng tượng Socket giống như một chiếc điện thoại, cho phép hai chương trình ở hai máy tính khác nhau "nhấc máy" và nói chuyện với nhau qua giao thức TCP/IP.

### Mô hình hoạt động

- **ServerSocket (Server):** Đóng vai trò là người trực tổng đài, luôn lắng nghe yêu cầu từ một cổng (port) xác định.
- **Socket (Client):** Đóng vai trò là người gọi, chủ động thiết lập kết nối tới địa chỉ IP và Port của server.

### Ví dụ mã nguồn Server thực tế

Dưới đây là cách tạo một Server đơn giản:

```java
import java.net.*;
import java.io.*;

public class SimpleServer {
    public static void main(String[] args) {
        try (ServerSocket server = new ServerSocket(8080)) {
            System.out.println("🚀 Server đang lắng nghe tại cổng 8080...");

            // Chấp nhận kết nối từ client
            try (Socket client = server.accept()) {
                System.out.println("✅ Client đã kết nối: " + client.getInetAddress());

                // Gửi thông điệp chào mừng
                PrintWriter out = new PrintWriter(client.getOutputStream(), true);
                out.println("Chào mừng bạn đã kết nối đến Java Server!");
            }
        } catch (IOException e) {
            System.err.println("❌ Lỗi Server: " + e.getMessage());
        }
    }
}
```
