import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = join(__dirname, "files");
  fs.readdir(folderName, (err, filenames) => {
    if (err) {
      throw new Error("FS operation failed");
    }	else{
			console.log(filenames.reduce((acc, filename) => `${acc}, ${filename}`))
		}
  });
};

await list();
