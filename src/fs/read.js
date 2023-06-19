import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const fileName = join(__dirname, "files", "fileToRead.txt");
  fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      console.log(data);
    }
  });
};

await read();
