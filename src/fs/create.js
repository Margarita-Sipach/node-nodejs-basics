import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const create = async () => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

  const fileName = join(__dirname, "files", "fresh.txt");
  fs.access(fileName, (err) => {
    if (err) {
			fs.writeFile(fileName, "I am fresh and young", (err) => {
        if (err) throw new Error("Error");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
