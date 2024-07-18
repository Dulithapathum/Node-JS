// Import 'path' and the 'join' method from the 'path' module
import path, { join } from "path";

// Import the 'fs' module for file system operations (callback-based API)
import fs from "fs";

// Import specific methods from 'fs/promises' for file system operations (Promise-based API)
import { readFile, writeFile, rm, appendFile } from "fs/promises";

// Import the 'url' module
import url from "url";

// Convert the current module's URL to a file path
const __filename = url.fileURLToPath(import.meta.url);

// Get the directory name of the current module's file path
const __dirname = path.dirname(__filename);

// Asynchronously read the contents of 'read.txt' file using callback-based API
fs.readFile(join(__dirname, "read.txt"), "utf-8", (err, data) => {
  if (err) {
    // Log error if any occurs
    console.error(err);
  }
  // Log the file contents if read successfully
  console.log(data);
});

// Asynchronously write content to 'write.txt' file using callback-based API
fs.writeFile(
  join(__dirname, "write.txt"),
  "New File Create And Write Content",
  "utf-8",
  (err) => {
    // Log error if any occurs
    console.log(err);
  }
);

// Asynchronously append content to 'write.txt' file using callback-based API
fs.appendFile(
  join(__dirname, "write.txt"),
  "New Data Append To Write File",
  "utf-8",
  (err) => {
    // Log error if any occurs
    console.log(err);
  }
);

// Asynchronously remove 'remove.txt' file using callback-based API
fs.rm(join(__dirname, "remove.txt"), (err) => {
  // Log error if any occurs
  console.log(err);
});

// Asynchronously read the contents of 'read.txt' file using Promise-based API
readFile(join(__dirname, "read.txt"), "utf-8")
  .then((data) => {
    // Log the file contents if read successfully
    console.log(data);
  })
  .catch((err) => {
    // Log error if any occurs
    console.log(err);
  });

// Asynchronously write content to 'write.txt' file using Promise-based API
writeFile(
  join(__dirname, "write.txt"),
  "data Write using Promises",
  "utf-8"
).catch((err) => {
  // Log error if any occurs
  console.log(err);
});

// Asynchronously append content to 'write.txt' file using Promise-based API
appendFile(
  join(__dirname, "write.txt"),
  "Data Append Using Promises",
  "utf-8"
).catch((err) => {
  // Log error if any occurs
  console.log(err);
});

// Asynchronously remove 'remove.txt' file using Promise-based API
rm(join(__dirname, "remove.txt")).catch((err) => {
  // Log error if any occurs
  console.log(err);
});
