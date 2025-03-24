# Cappacitor-Temp
Create Temperature App

🌡️ Giới Thiệu

Create Temperature App là một ứng dụng đo nhiệt độ, được phát triển bằng Angular và chuyển đổi thành ứng dụng Android sử dụng Capacitor. Ứng dụng cung cấp giao diện thân thiện với người dùng và các tính năng hữu ích để theo dõi nhiệt độ môi trường.

🚀 Công Nghệ Sử Dụng

Angular: Framework phát triển ứng dụng web.

Capacitor: Dùng để convert ứng dụng web thành ứng dụng di động.

Android Studio: Dùng để build và chạy ứng dụng trên thiết bị Android.

SCSS: Styling cho giao diện ứng dụng.

🎯 Tính Năng Chính

✅ Hiển thị nhiệt độ theo thời gian thực.✅ Chọn đơn vị đo: Celsius (°C) hoặc Fahrenheit (°F).✅ Cập nhật nhiệt độ từ API bên ngoài hoặc cảm biến thiết bị.✅ Giao diện trực quan, dễ sử dụng.✅ Hỗ trợ dark mode cho trải nghiệm tốt hơn.✅ Chạy được trên cả trình duyệt web và ứng dụng Android.

📸 Hình Ảnh Minh Họa

![Screenshot 2025-03-24 141916](https://github.com/user-attachments/assets/e3d87b21-3b7c-4ed2-9775-ad40ad13e317)


🛠️ Cách Cài Đặt & Chạy Ứng Dụng

🔹 1. Cài Đặt Dự Án


# Cài đặt dependencies
npm install

🔹 2. Chạy Ứng Dụng trên Trình Duyệt

ng serve

Ứng dụng sẽ chạy trên http://localhost:4200/

🔹 3. Convert sang Android App bằng Capacitor

# Cài đặt Capacitor
npm install @capacitor/core @capacitor/cli

# Thêm nền tảng Android
npx cap add android

# Build ứng dụng Angular
ng build --configuration=production

# Đồng bộ dữ liệu với Capacitor
npx cap sync android

# Mở Android Studio
npx cap open android

🔹 4. Chạy trên Android Studio

Mở Android Studio

Chọn Run > Run 'app' hoặc nhấn Shift + F10

Kiểm tra ứng dụng trên thiết bị thật hoặc trình giả lập

