const fs = require("fs");
const path = require("path");

// Get the path to the folder with text files.
const dirPath = path.join(__dirname, "text");

// Keep the names of all input files in one array.
const files = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
  "file6.txt",
  "file7.txt",
  "file8.txt",
  "file9.txt",
  "file10.txt",
];

// Save the selected lines here.
let textOut = "";

// Read each file from the array.
for (let i = 0; i < files.length; i++) {
  // Read the file as text.
  const textIn = fs.readFileSync(`${dirPath}/${files[i]}`, "utf-8");
  // Split the text into separate lines.
  const arr = textIn.split("\r\n");

  // Add the needed number of lines to the result.
  for (let j = 0; j < i + 1 && j < arr.length; j++) {
    textOut += arr[j] + "\r\n";
  }
}

// Write all selected lines to the output file.
fs.writeFileSync(`${dirPath}/output.txt`, textOut);
