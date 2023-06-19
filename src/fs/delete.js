import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const fileName = join(__dirname, "files", "fileToRemove.txt");
  fs.rm(fileName, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await remove();
