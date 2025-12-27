---
title: "Async/Await: Viết Code Mạng Sạch Sẽ Trong JavaScript"
date: "2025-12-12"
excerpt: "Giải quyết triệt để Callback Hell và Promise Chain. Cách biến những dòng code bất đồng bộ phức tạp trở nên dễ đọc và bảo trì."
category: "JavaScript"
tags: ["JavaScript", "Async", "Await", "Clean Code"]
---

Lập trình mạng vốn dĩ là các tác vụ tiêu tốn thời gian (đợi Server phản hồi, đợi tải dữ liệu). Trước đây, JavaScript xử lý việc này bằng Callback hoặc `.then()`. Tuy nhiên, khi các yêu cầu phụ thuộc lẫn nhau, mã nguồn sẽ rất nhanh chóng trở nên khó kiểm soát. **Async/Await** ra đời như một "cú pháp đường đường" (syntactic sugar) giúp giải quyết vấn đề này.

### 1. Vấn đề của Promise Chaining

Hãy xem xét tình huống: Bạn cần lấy thông tin người dùng, sau đó dùng thông tin đó để lấy danh sách các kho lưu trữ (repositories) của họ.

Nếu dùng `.then()`, code sẽ bắt đầu "trôi" về bên phải và trở nên rắc rối. Với `async/await`, mọi thứ được viết theo chiều dọc, từ trên xuống dưới.

### 2. Triển khai Async/Await thực tế

Dưới đây là cách gọi API GitHub theo phong cách chuyên nghiệp:

```javascript
async function layThongTinNguoiDung() {
  try {
    console.log("🚀 Đang bắt đầu lấy dữ liệu...");

    // Bước 1: Lấy thông tin User (Phải đợi xong mới làm bước tiếp theo)
    const responseUser = await fetch(
      "[https://api.github.com/users/octocat](https://api.github.com/users/octocat)"
    );
    if (!responseUser.ok) throw new Error("Không tìm thấy người dùng");

    const user = await responseUser.json();

    // Bước 2: Dùng dữ liệu từ Bước 1 để gọi API lấy danh sách Repos
    const responseRepos = await fetch(user.repos_url);
    if (!responseRepos.ok) throw new Error("Không thể lấy danh sách repos");

    const repos = await responseRepos.json();

    // Kết quả
    console.log(
      `✅ Thành công! Người dùng ${user.login} có ${repos.length} repository.`
    );
    return repos;
  } catch (error) {
    // Xử lý lỗi tập trung tại một nơi duy nhất
    console.error("🚨 Lỗi khi gọi API:", error.message);
  } finally {
    console.log("🏁 Hoàn tất tác vụ mạng.");
  }
}

layThongTinNguoiDung();
```
