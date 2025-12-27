---
title: "Xử Lý Ngoại Lệ: Chìa Khóa Để Ứng Dụng Mạng Hoạt Động Ổn Định"
date: "2025-12-16"
excerpt: "Đừng để chương trình của bạn bị 'crash' chỉ vì một sự cố mạng nhỏ. Tìm hiểu cách quản lý lỗi chuyên nghiệp trong Java."
category: "Java Best Practice"
tags: ["Java", "Exception", "Debugging", "Networking"]
---

Lập trình mạng là môi trường đầy rẫy những bất ngờ: Dây cáp bị rút, Server sập, hoặc đơn giản là người dùng nhập sai địa chỉ IP. Nếu không xử lý ngoại lệ tốt, ứng dụng của bạn sẽ dừng hoạt động ngay khi có sự cố xảy ra.

### 1. Các ngoại lệ "kinh điển" trong lập trình mạng

Java cung cấp một hệ thống phân cấp ngoại lệ chặt chẽ dưới lớp `IOException`. Dưới đây là những lỗi bạn chắc chắn sẽ gặp:

- **`UnknownHostException`**: Xảy ra khi hệ thống không thể phân giải tên miền (DNS). Ví dụ: Nhập sai `google.con` thay vì `google.com`.
- **`ConnectException`**: Xảy ra khi Server từ chối kết nối (có thể do sai Port hoặc Server chưa được bật).
- **`SocketTimeoutException`**: Xảy ra khi dữ liệu không được truyền/nhận trong một khoảng thời gian chờ nhất định.
- **`BindException`**: Xảy ra khi bạn cố gắng mở một `ServerSocket` trên một Port đã bị ứng dụng khác chiếm dụng.

### 2. Chiến lược xử lý ngoại lệ an toàn

Cách tiếp cận tốt nhất là xử lý cụ thể từng loại lỗi để có thể thông báo chính xác cho người dùng hoặc thực hiện cơ chế kết nối lại (Retry).

```java
import java.net.*;
import java.io.*;

public class SafeNetworkClient {
    public static void main(String[] args) {
        String host = "localhost";
        int port = 8080;

        // Sử dụng Try-with-resources để tự động đóng Socket
        try (Socket socket = new Socket()) {

            // Thiết lập Timeout để tránh đợi vô hạn
            socket.connect(new InetSocketAddress(host, port), 5000);

            System.out.println("✅ Kết nối thành công!");

        } catch (UnknownHostException e) {
            System.err.println("❌ Lỗi: Không thể tìm thấy máy chủ " + host);
        } catch (SocketTimeoutException e) {
            System.err.println("⚠️ Lỗi: Kết nối quá hạn (Timeout)!");
        } catch (ConnectException e) {
            System.err.println("❌ Lỗi: Server đang tắt hoặc từ chối kết nối ở cổng " + port);
        } catch (IOException e) {
            System.err.println("❌ Lỗi hệ thống: " + e.getMessage());
        }
    }
}
```
