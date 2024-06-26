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

不遵循 SQL ，用不同的查詢語言，但它沒有模式和關係

NoSQL 中仍然有一個數據庫


SQL 中有：表 、 用戶 、 訂單

NoSQL 中：表 被稱為 集合，但可是視為表

在集合中找不到紀錄，而是文檔

┌-------用戶集合
├-------{ name: 'Wayne', age: 30 }
├-------{ name: 'Jack' }

而 NoSQL 沒有嚴格的模式 ↑ Schemaless

可以看到 在同一個集合中有兩個文檔，Jack 沒有 age

也就是可以在同一個集合中，儲存具有不同結構的多個文檔

另一件事： 在 NoSQL 中，沒有真實的關係

而是去重複數據，

例如在 Orders 集合中
{ id:'test1', user: { id: 1, email: 'wayne@test.com'}, product: { id: 2, price: 20 } }

在 Users 集合中
{ id: 1, name: 'wayne', email: 'wayne@test.com'}
{ id: 2, name: 'jack', email: 'jack@test.com'}

在 Products 集合中
{ id: 1, name: 'book', price: 10 }
{ id: 2, name: 'chair', price: 20 }

所以數據發生改變，必須在多個位置更新它，

也就是檢索數據，而不必將多個表連接在一起

可以從 Orders 集合中讀取數據，例如在訂單頁面上需要顯示的數據 -> 優：不用訪問其他集合，快速和高效

NoSQL 特色

1. No Data Schema --> { name, id } { id, age }

2. No Data Relations


擴展數據庫，以跟上用戶越來越多的應用程序發展

Horizontal Scaling VS Vertical Scaling

在橫向擴展中，添加更多服務器

垂直擴展中，添加更多 CPU 或內存 來增強服務器的性能


--# SQL

Data uses Schemas

Relations

Data is distributed across multiple tables

Horizontal scaling is difficult

Vertical scaling is possible


--# NoSQL

Schema-less

No Relations

Data is typically merged in a few collections

Both horizontal and vertical scaling is possible

Great performance for mass read & write requests


6. --# 安裝 MySQL 數據庫

https://www.mysql.com/downloads/

選 MySQL Community (GPL) Downloads »

選 MySQL Community Server 同時也要 MySQL Workbench



Windows (x86, 64-bit), MSI Installer

No thanks, just start my download.


使用方法

1. MySQL 8.3 Configurator

2. 在 MySQL Workbench 開啟應用

點 Create a new schema in the connected server

填寫 Name 點擊 Apply


--# 要讓 node 和 SQL 交互，需要安裝新的包 npm install --save mysql2



--# 創建 product Table

1. 選 Schemas

2. 選 node-complete

3. 選 Tables 右鍵 Create Table