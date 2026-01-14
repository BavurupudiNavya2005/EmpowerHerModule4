# Understanding Project Management in NodeJS

---

## a. Package Managers

### What is a package manager?
A package manager is a tool that helps developers **install, update, remove, and manage external libraries (packages)** required for a project.

Example:  
If your backend project needs a library to handle HTTP requests, a package manager can download and manage it for you automatically.

---

### Why do we need package managers in backend development?
- Backend projects depend on many external libraries
- Package managers:
  - Save time by automating installations
  - Maintain correct library versions
  - Avoid manual copying of code
  - Make collaboration easier

Example:  
Using a package manager, one command can install all required dependencies for a project.

---

### Problems faced if package managers are not used
- Manual downloading of libraries
- Version mismatch issues
- Difficult project setup on new systems
- Dependency conflicts
- Increased chances of bugs and errors

---

## b. NPM (Node Package Manager)

### What is NPM?
NPM is the **default package manager for Node.js**.  
It allows developers to install and manage JavaScript libraries used in Node.js applications.

---

### Why is NPM important for Node.js applications?
- It provides access to thousands of open-source packages
- Helps manage project dependencies efficiently
- Keeps track of package versions
- Simplifies project sharing and deployment

---

### How NPM helps in managing dependencies
- Stores dependency details in `package.json`
- Downloads required packages into `node_modules`
- Locks exact versions using `package-lock.json`
- Ensures consistent behavior across different systems

---

## c. Backend Project Initialization

### What is the command used to initialize a backend (Node.js) project?
```bash
npm init


Explain what npm init and npm init -y do
npm init

Starts an interactive process

Asks for project name, version, description, author, etc.

Creates a package.json file based on user input

npm init -y

Skips all questions

Automatically creates package.json with default values

Faster way to initialize a backend project

d. Files and Folders Created After Project Initialization
package.json

Main configuration file of a Node.js project

Contains:

Project details

Dependencies

Scripts

Required for dependency management and project execution

node_modules

Folder that stores all installed dependencies

Automatically created by NPM

Can be regenerated using npm install

Very large in size

package-lock.json

Records the exact versions of installed dependencies

Prevents version mismatch issues

Ensures consistency across all environments

Improves application stability

GitHub Best Practices
Files/Folders that should NOT be pushed to GitHub

node_modules/

Very large in size

Can be regenerated anytime

Makes repositories slow and heavy

Files that MUST be committed to GitHub

package.json

package-lock.json

Why they must be committed

Allow others to install the same dependencies

Ensure consistent project setup

Make deployment and collaboration easier