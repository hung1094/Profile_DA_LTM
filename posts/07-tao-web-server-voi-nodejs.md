---
title: "Xây Dựng Web Server Đơn Giản Với Node.js"
date: "2025-12-14"
excerpt: "Khám phá sức mạnh của mô hình Non-blocking I/O và cách tạo một Backend Server chỉ với vài dòng mã JavaScript thuần."
category: "JavaScript"
tags: ["NodeJS", "Backend", "Server", "HTTP"]
---

Nếu Java sử dụng mô hình đa luồng (Multithreading) để xử lý nhiều kết nối, thì **Node.js** lại nổi tiếng với cơ chế **Event Loop** và **Non-blocking I/O**. Điều này cho phép Node.js xử lý hàng ngàn kết nối đồng thời trên một luồng duy nhất, cực kỳ hiệu quả cho các ứng dụng thời gian thực.

### 1. Node.js là gì?

Node.js là một môi trường chạy (runtime environment) cho phép bạn thực thi mã JavaScript ngay trên hệ điều hành thay vì chỉ trên trình duyệt. Trong lập trình mạng, Node.js cung cấp module `http` tích hợp sẵn để khởi tạo server mà không cần thêm bất kỳ thư viện ngoài nào.

### 2. Xây dựng Server HTTP thuần

Dưới đây là cách thiết lập một server có khả năng định tuyến (routing) cơ bản:

```javascript
const http = require("http");

// Khởi tạo một đối tượng Server
const server = http.createServer((req, res) => {
  // Ghi nhật ký yêu cầu từ client
  console.log(`Nhận yêu cầu: ${req.method} ${req.url}`);

  if (req.url === "/") {
    // Phản hồi trang chủ
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Xin chào từ Node.js Server!</h1>");
    res.end("<p>Đây là trang chủ của đồ án Lập trình mạng.</p>");
  } else if (req.url === "/api/info") {
    // Phản hồi dữ liệu JSON
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        author: "Hoàng Mạnh Hùng",
        version: "1.0.0",
        status: "Running",
      })
    );
  } else {
    // Xử lý lỗi 404
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Lỗi 404: Không tìm thấy trang bạn yêu cầu.");
  }
});

// Lắng nghe tại cổng 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
```
