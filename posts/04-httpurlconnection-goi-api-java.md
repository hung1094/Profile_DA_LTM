---
title: "Gọi API và Tải Dữ Liệu Web với HttpURLConnection"
date: "2025-12-17"
excerpt: "Hướng dẫn thực hiện yêu cầu HTTP GET/POST để tương tác với các RESTful API trong môi trường Java thuần."
category: "Java Web"
tags: ["Java", "HTTP", "API", "JSON"]
---

Trong lập trình mạng hiện đại, việc giao tiếp giữa các ứng dụng thường thông qua giao thức **HTTP**. Java cung cấp lớp `HttpURLConnection` thuộc gói `java.net` để thực hiện các yêu cầu (requests) đến các Server Web mà không cần thư viện bên thứ ba.

### 1. Quy trình thực hiện một HTTP Request

Một chu kỳ Request - Response trong Java thường trải qua 5 bước:

1.  **Khởi tạo URL:** Xác định địa chỉ đích.
2.  **Mở kết nối:** Sử dụng `url.openConnection()`.
3.  **Cấu hình:** Thiết lập phương thức (GET/POST), Headers, Timeout.
4.  **Xử lý phản hồi:** Kiểm tra mã trạng thái (Response Code) và đọc dữ liệu.
5.  **Ngắt kết nối:** Giải phóng tài nguyên hệ thống.

### 2. Triển khai phương thức GET

Đây là ví dụ hoàn thiện để lấy dữ liệu JSON từ một API công khai:

```java
import java.net.*;
import java.io.*;

public class ApiClient {
    public static void main(String[] args) {
        try {
            // 1. Khởi tạo URL
            URL url = new URL("[https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // 2. Cấu hình Request
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(5000); // Đợi kết nối tối đa 5s
            conn.setReadTimeout(5000);    // Đợi đọc dữ liệu tối đa 5s

            // 3. Kiểm tra mã phản hồi (200 là thành công)
            int responseCode = conn.getResponseCode();
            System.out.println("Status Code: " + responseCode);

            if (responseCode == HttpURLConnection.HTTP_OK) {
                // 4. Đọc dữ liệu từ luồng vào
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                StringBuilder response = new StringBuilder();
                String line;

                while ((line = in.readLine()) != null) {
                    response.append(line);
                }
                in.close();

                // In kết quả
                System.out.println("Dữ liệu nhận được: " + response.toString());
            } else {
                System.out.println("Yêu cầu thất bại!");
            }

            // 5. Ngắt kết nối
            conn.disconnect();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
