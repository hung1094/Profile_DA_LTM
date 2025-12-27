---
title: "WebSocket: Giao Tiếp Thời Gian Thực Trong JavaScript"
date: "2025-12-13"
excerpt: "Xây dựng ứng dụng Chat, thông báo tức thì và Dashboard cập nhật dữ liệu sống với kết nối hai chiều Full-Duplex."
category: "JavaScript"
tags: ["WebSocket", "Realtime", "JavaScript", "Networking"]
---

Trong giao thức HTTP truyền thống, Client phải luôn là người chủ động gửi yêu cầu để nhận dữ liệu (Request-Response). Nhưng với **WebSocket**, chúng ta có một kênh giao tiếp **hai chiều (Full-Duplex)**: Server có thể chủ động đẩy dữ liệu xuống Client bất cứ lúc nào mà không cần đợi yêu cầu.

### 1. Tại sao cần WebSocket?

Hãy tưởng tượng bạn đang xây dựng một ứng dụng Chat. Nếu dùng HTTP, trình duyệt phải liên tục hỏi Server: "Có tin nhắn mới không?" (Polling) cứ mỗi 1 giây. Việc này gây lãng phí tài nguyên cực lớn.
**WebSocket giải quyết vấn đề này bằng cách:**

- Giữ một kết nối duy nhất luôn mở.
- Độ trễ (Latency) cực thấp.
- Tiết kiệm băng thông vì không phải gửi kèm Header HTTP rườm rà trong mỗi tin nhắn.

### 2. Triển khai phía Client (Trình duyệt)

JavaScript cung cấp đối tượng `WebSocket` mặc định rất dễ sử dụng:

```javascript
// 1. Khởi tạo kết nối tới Server (Sử dụng giao thức ws:// hoặc wss://)
const socket = new WebSocket("ws://localhost:8080");

// 2. Sự kiện khi kết nối thành công
socket.onopen = (event) => {
  console.log("🚀 Đã thiết lập kết nối WebSocket thành công!");

  // Gửi tin nhắn chào mừng lên Server
  socket.send(
    JSON.stringify({
      user: "Hoàng Mạnh Hùng",
      message: "Xin chào Server từ Client!",
    })
  );
};

// 3. Sự kiện lắng nghe dữ liệu từ Server gửi về
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("📩 Tin nhắn mới từ Server:", data);

  // Hiển thị lên giao diện người dùng (UI)
  // document.getElementById('chat-box').innerHTML += `<p>${data.message}</p>`;
};

// 4. Sự kiện khi kết nối bị đóng
socket.onclose = (event) => {
  if (event.wasClean) {
    console.log(`✅ Kết nối đóng sạch sẽ, code=${event.code}`);
  } else {
    console.error("❌ Kết nối bị ngắt đột ngột!");
  }
};

// 5. Xử lý lỗi
socket.onerror = (error) => {
  console.error(`🚨 Lỗi WebSocket: ${error.message}`);
};
```
