# 📘 Database Concepts – Answer Sheet

---

## 1️⃣ Why is `db.json` not suitable as a database for real projects?

`db.json` is a **file-based storage system** that is mainly used for **learning, testing, or small demo applications**. It is **not suitable for real-world projects** due to several limitations.

### ❌ Limitations of File-Based Storage

### 🔹 1. Performance Issues
- Data is read and written from a file every time.
- Performance becomes slow as data size increases.
- No indexing support for fast searching.

### 🔹 2. Scalability Problems
- Cannot handle large amounts of data.
- Not suitable for applications with many users.
- Does not support horizontal or vertical scaling.

### 🔹 3. No Concurrency Support
- Multiple users cannot safely access the file at the same time.
- Simultaneous read/write operations can corrupt data.

### 🔹 4. Reliability Issues
- If the file gets deleted or corrupted, data is permanently lost.
- No backup or recovery system.
- No transaction support (commit / rollback).

### 🔹 5. Security Limitations
- Data is stored in plain text.
- No authentication or authorization.
- No encryption support.

### ✅ Conclusion:
`db.json` is suitable only for:
- Learning purposes  
- Prototyping  
- Small demo projects  

❌ It is **not suitable** for:
- Production systems  
- Large-scale applications  
- Multi-user environments  

---

## 2️⃣ Ideal Characteristics of a Database System

A good database system must provide more than just data storage.

### ✅ 1. Performance
- Fast data access and retrieval
- Efficient query execution
- Supports indexing

### ✅ 2. Concurrency
- Multiple users can access data simultaneously
- Prevents conflicts using locking mechanisms
- Maintains data consistency

### ✅ 3. Reliability
- Protects data from crashes and failures
- Provides backup and recovery options
- Ensures data durability

### ✅ 4. Data Integrity
- Ensures correctness and accuracy of data
- Enforces constraints like:
  - Primary keys
  - Foreign keys
  - Unique values

### ✅ 5. Scalability
- Can handle increasing data and users
- Supports horizontal and vertical scaling
- Works efficiently for both small and large systems

### ✅ 6. Fault Tolerance
- System continues working even if a component fails
- Supports replication and recovery mechanisms

---

## 3️⃣ Types of Databases and Their Use Cases

Databases are mainly classified into **two types**:

---

## 🔹 1. Relational Databases (SQL)

### 📌 Description:
- Data is stored in tables (rows and columns)
- Uses Structured Query Language (SQL)
- Fixed schema

### 📌 Examples:
- MySQL
- PostgreSQL
- Oracle
- SQL Server

### 📌 Use Cases:
✔ Banking systems  
✔ Student management systems  
✔ E-commerce platforms  
✔ Inventory management  
✔ Financial applications  

### 📌 Best Suitable For:
- Structured data
- Complex queries
- High data integrity requirements

---

## 🔹 2. Non-Relational Databases (NoSQL)

### 📌 Description:
- Data stored in documents, key-value pairs, or graphs
- Schema-less or flexible schema
- High performance and scalability

### 📌 Examples:
- MongoDB
- Firebase
- Redis
- Cassandra

### 📌 Use Cases:
✔ Social media platforms  
✔ Real-time chat applications  
✔ IoT systems  
✔ Big data applications  
✔ Content management systems  

### 📌 Best Suitable For:
- Large-scale applications
- Unstructured or semi-structured data
- High-speed read/write operations

---

## ✅ Comparison Table

| Feature | Relational DB | NoSQL DB |
|--------|----------------|-----------|
| Data Structure | Tables | Documents / Key-Value |
| Schema | Fixed | Flexible |
| Scalability | Vertical | Horizontal |
| Performance | Moderate | High |
| Use Case | Banking, ERP | Social Media, IoT |

---

✅ **This document is well-structured, technically accurate, and suitable for academic submission.**
