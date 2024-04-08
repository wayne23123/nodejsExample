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

------ SQL or NO SQL

區別、存儲數據方面區別

1.比直接訪問文件更快，且不必為了找到一條訊息而讀取整個文件

SQL -> MySQL

NoSQL -> mongodb

SQL 表中進行思考

可能有一個用戶、一個產品、一個訂單表

每個表中有字段 or 列

每個表可以透過 id、email、name、title、price、description 這些字鍛填充數據，即所謂的紀錄，也就是表中的行

--# SQL 重要功能：允許你關聯不同的表

對於每個表，都可以清楚定義其中的數據應該是甚麼樣子的，我們擁有哪些字鍛，每個字鍛儲存的是哪種類型的數據(數字、字串...)

因此有一個嚴格定義的模式，表中的所有數據都必須符合該表的模式

而數據之間也有關係，用三種關係來關聯不同的表

一對一

一對多

多對多

意味著可以有兩個表，其中每個紀錄適合另一個紀錄

一條紀錄可以容納多條其他紀錄，

或者表 A 中的多條紀錄可以容納表 B 中的多條紀錄

--> 表是連接的

SQL 代表結構化查詢語言，查詢只是我們用來與數據庫交互的命令


SELECT * FROM users WHERE age > 28


SELECT、FROM、WHERE --> SQL keywords / Syntax

*、users、age>28 --> Parameters / Data


--# NoSQL


