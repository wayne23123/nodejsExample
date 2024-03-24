# nodejsExample

1. npm init
   --npm start
   --npm run start-server

2. --# 安裝 nodemon
   npm install nodemon --save-dev(開發依賴項目(正式服務器不要安裝))
   npm install nodemon -g (全局安裝在計算機上，而不是只在這個項目中安裝)

3. dubugger

4. --# 安裝 express
   npm install --save express(不只開發中要用，正式也要用)

5. --# 安裝 ejs pug
   npm install --save ejs pug express-handlebars

Model View Controller (MVC)

1. 什麼是 MVC

關注點分離，確保不同部分執行不同操作

Model - 負責在代碼中表示數據，並允許使用數據

Views - 負責用戶最終看到的內容

Controller - 是在 Model 和 Views 之間的連接點，因為視圖層不應該關心應用程序邏輯，而是關心如何保存和獲取數據
