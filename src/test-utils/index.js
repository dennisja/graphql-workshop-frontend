const wait = async (timeToWait = 0) => {
  await new Promise((resolve) => setTimeout(resolve, timeToWait));
};

export { wait };
