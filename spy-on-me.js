const os = require("os");
const path = require("path");
const fs = require("fs");

// 1. Where are we?
const currentFile = path.basename(__filename);

// 2. Who is the host?
const user = os.userInfo().username;
const memory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);

// 3. Write a report
const report = `
  SECURITY LOG:
  User: ${user}
  System Memory: ${memory} GB
  File Accessed: ${currentFile}
`;

fs.writeFileSync("security.log", report);
console.log("Report generated.");