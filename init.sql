-- Tạo cơ sở dữ liệu
CREATE DATABASE MidTerm;

-- Sử dụng cơ sở dữ liệu vừa tạo
USE MidTerm;

-- Tạo bảng Users
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL,
    password NVARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'customer',
);


CREATE TABLE products (
    id INT IDENTITY(1,1) PRIMARY KEY,   -- Tạo cột id tự động tăng và làm khóa chính
    name VARCHAR(255) NOT NULL,          -- Tên sản phẩm
    price DECIMAL(10, 2) NOT NULL,       -- Giá sản phẩm
    des TEXT,                            -- Mô tả sản phẩm
    image VARCHAR(255)                   -- Đường dẫn hoặc URL hình ảnh sản phẩm
);

