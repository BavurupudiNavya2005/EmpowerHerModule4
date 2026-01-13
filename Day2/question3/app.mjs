import os from "os";
import { writeFile, readFile, appendFile, unlink } from "fs/promises";

console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

async function fileOperations() {
    try {
        await writeFile("data.txt", "Hello World");
        await writeFile("Readme.md", "## This is first line in Readme");
        const data = await readFile("data.txt", "utf-8");
        console.log(data);
        await appendFile("data.txt", "\nThis is second line");
        await unlink("Readme.md");
        console.log("All operations completed successfully");
    } catch (error) {
        console.error("Error occurred:", error.message);
    }
}

fileOperations();