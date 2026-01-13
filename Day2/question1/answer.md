
## 1. Node.js Architecture

Node.js follows an **event-driven, non-blocking I/O architecture**.  
It is designed to handle a large number of concurrent connections efficiently using a **single main thread**.

### Key Components
- JavaScript Engine (V8)
- Node.js Core APIs
- Native Bindings
- Event Loop
- libuv
- Thread Pool
- Worker Threads

---

## 2. JavaScript Engine (V8)

- V8 is the JavaScript engine developed by Google.
- It compiles JavaScript code directly into **machine code**.
- This makes JavaScript execution very fast.

### Role in Node.js
- Executes JavaScript code
- Handles memory management (heap and garbage collection)
- Converts JS into optimized machine-level instructions

---

## 3. Node.js Core APIs

- Core APIs provide built-in functionalities such as:
  - File system (`fs`)
  - HTTP (`http`)
  - Timers (`setTimeout`, `setInterval`)
  - Streams
  - Crypto

### Characteristics
- Written mostly in C++ and JavaScript
- Exposed to developers as JavaScript modules
- Use native bindings to communicate with lower-level code

---

## 4. Native Bindings

- Native bindings act as a **bridge between JavaScript and C++ code**.
- They allow Node.js core APIs to access system-level features.

### Purpose
- Connect JavaScript with libuv and OS-level functions
- Improve performance for low-level operations

---

## 5. Event Loop

- The Event Loop is the **heart of Node.js asynchronous behavior**.
- It continuously checks for pending tasks and executes them in order.

### Responsibilities
- Executes callbacks
- Handles asynchronous operations
- Ensures non-blocking execution

---

## 6. libuv

### What is libuv?
- libuv is a **C library** that provides asynchronous I/O support.
- It works across different operating systems.

### Why Node.js Needs libuv
- JavaScript alone cannot perform non-blocking I/O
- libuv handles OS-level async operations
- Provides a consistent API across platforms

### Responsibilities of libuv
- Event loop implementation
- Asynchronous file system operations
- Network I/O
- Thread pool management
- Timers and scheduling

---

## 7. Thread Pool

### What is a Thread Pool?
- A group of background threads managed by libuv
- Used for executing blocking operations without blocking the main thread

### Why Node.js Uses a Thread Pool
- Some tasks cannot be handled asynchronously by the OS
- Prevents blocking the event loop
- Improves application responsiveness

### Operations Handled by Thread Pool
- File system operations (fs)
- DNS lookups
- Compression
- Cryptographic operations

---

## 8. Worker Threads

### What are Worker Threads?
- Worker threads allow running JavaScript code in **parallel threads**
- Each worker has its own event loop and memory

### Why Worker Threads Are Needed
- To handle CPU-intensive tasks
- To avoid blocking the main thread
- To improve performance for heavy computations

### Difference Between Thread Pool and Worker Threads

| Thread Pool | Worker Threads |
|------------|----------------|
| Managed by libuv | Managed by Node.js |
| Used for internal tasks | Used by developers |
| No direct JS execution | Executes JavaScript |
| Limited control | Full control |

---

## 9. Event Loop Queues

### Macro Task Queue
- Handles large asynchronous tasks

**Examples**
- setTimeout
- setInterval
- setImmediate
- I/O callbacks

---

### Micro Task Queue
- Handles high-priority tasks
- Executed immediately after the current operation

**Examples**
- Promises (`then`, `catch`)
- `process.nextTick`

---

### Execution Priority
1. Current JavaScript execution
2. Micro Task Queue
3. Macro Task Queue

Micro tasks always execute **before** macro tasks.

---

## Summary

- Node.js uses a single-threaded event loop for scalability
- libuv enables asynchronous, non-blocking I/O
- Thread pool handles blocking tasks internally
- Worker threads handle CPU-intensive JavaScript work
- Event loop queues manage execution order efficiently