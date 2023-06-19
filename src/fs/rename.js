import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const rename = async () => {
	const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = join(__dirname, "files");
  const oldFileName = join(folderName, "wrongFilename.txt");
  const newFileName = join(folderName, "properFilename .txt");
  fs.rename(oldFileName, newFileName, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await rename();