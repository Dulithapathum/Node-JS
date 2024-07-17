// Import the 'os' module to access operating system-related utility methods
import os from "os";

// Import the 'path' module to work with file and directory paths
import path from "path";

// Import 'fileURLToPath' from the 'url' module to convert a URL to a file path
import { fileURLToPath } from "url";

// Convert the current module's URL to a file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module's file path
const __dirname = path.dirname(__filename);

// Output the operating system platform (e.g., 'darwin', 'win32')
console.log(os.platform());

// Output the OS version (e.g., '20.3.0' for macOS)
console.log(os.version());

// Output the directory name of the current module's file path
console.log(__dirname);

// Output the full file path of the current module
console.log(__filename);

// Output the base name of the current module's file (e.g., 'script.js')
console.log(path.basename(__filename));

// Output the extension of the current module's file (e.g., '.js')
console.log(path.extname(__filename));

// Output an object containing information about the current module's file
// { root: '/', dir: '/path/to/directory', base: 'script.js', ext: '.js', name: 'script' }
console.log(path.parse(__filename));
