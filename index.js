// Import the 'createServer' function from the 'http' module to create an HTTP server
import { createServer } from "node:http";

// Import 'IncomingForm' from the 'formidable' module to handle form data parsing
import { IncomingForm } from "formidable";

// Import custom modules for user form, form success, and form error messages
import { userForm } from "./UserForm.js";
import { Formsuccess } from "./FormSuccess.js";
import { FormError } from "./FormError.js";

// Import functions from 'fs' module for file operations
import { copyFile, rm, existsSync, mkdir, writeFile } from "fs";

// Import 'log' from 'console' to log messages
import { log } from "node:console";

// Import 'dirname' and 'join' from 'path' for path operations
import { dirname, join } from "node:path";

// Import 'path' module
import path from "path";

// Import 'fileURLToPath' from 'url' to handle file paths
import { fileURLToPath } from "url";

// Get the current file's path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an HTTP server
createServer((req, res) => {
  // Handle POST requests (form submissions)
  if (req.method === "POST") {
    // Create a new instance of IncomingForm to handle the incoming form data
    const userData = new IncomingForm();

    // Parse the incoming form data
    userData.parse(req, (error, fields, files) => {
      if (error) {
        // If there is an error during parsing, send a form error message
        res.end(FormError);
      } else {
        // If parsing is successful, send a form success message
        res.end(Formsuccess);

        // Get the source path of the uploaded file
        const fileSrcPath = files.userfile[0].filepath;

        // Define the destination path for the file
        const fileDestPath = `upload/${files.userfile[0].originalFilename}`;

        // Check if the 'upload' folder exists
        if (existsSync("upload")) {
          log("upload Folder exists");
        } else {
          // If the 'upload' folder does not exist, create it
          mkdir("upload", (error) => {
            if (error) {
              log(error);
            } else {
              log("upload Folder created");
            }
          });
        }

        // Copy the uploaded file to the destination path
        copyFile(fileSrcPath, fileDestPath, (error) => {
          if (error) {
            log(error);
          } else {
            log("File successfully copied");
          }
        });

        // Remove the temporary uploaded file
        rm(fileSrcPath, (error) => {
          if (error) {
            log(error);
          } else {
            log("Temporary file removed");
          }
        });
      }

      // Check if the 'formtext' folder exists
      if (existsSync("formtext")) {
        log("formtext Folder exists");
      } else {
        // If the 'formtext' folder does not exist, create it
        mkdir("formtext", (error) => {
          if (error) {
            log(error);
          } else {
            log("formtext Folder created");
          }
        });
      }

      // Get the username field from the form data
      const inputText = fields.username[0];

      // Write the input text to a file in the 'formtext' folder
      writeFile(
        join(__dirname, "formtext/text.txt"),
        inputText,
        "utf-8",
        (error) => {
          if (error) {
            log(error);
          } else {
            log("Input text successfully written to file");
          }
        }
      );
    });
  } else if (req.method === "GET") {
    // Handle GET requests (serving the user form)
    res.end(userForm);
  }
}).listen(4000, () => {
  // Log a message when the server starts listening on port 4000
  log("Server is running");
});
