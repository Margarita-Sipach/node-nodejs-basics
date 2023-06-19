const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter((item) => item[0].startsWith("RSS"))
      .map((item) => `${item[0]}=${item[1]}`)
			.reduce((acc, item) => `${acc}; ${item}`)
  );
};

parseEnv();
