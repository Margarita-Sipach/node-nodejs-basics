const parseArgs = () => {
  const args = process.argv;
  const sortArgs = args.slice(args.findIndex((item) => item.startsWith("--")));
  for (let i = 0; i < sortArgs.length; i += 2)
    console.log(
      `${sortArgs[i].slice(2)} is ${sortArgs[i + 1]}${
        i < sortArgs.length - 2 ? "," : ""
      }`
    );
};

parseArgs();
