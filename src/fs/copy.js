import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const oldFolderName = join(__dirname, "files");
  const newFolderName = join(__dirname, "files_copy");
  fs.mkdir(newFolderName, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.cp(oldFolderName, newFolderName, {recursive: true}, (err) => {
        if (err) {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await copy();
