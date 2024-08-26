function printPretty(level, ...args) {
  const now = new Date();
  const formattedDate = now.toLocaleString();

  const levels = {
    info: "\x1b[32m", // Green
    warn: "\x1b[33m", // Yellow
    error: "\x1b[31m", // Red
    debug: "\x1b[34m", // Blue
  };

  if (levels[level] == null) {
    throw new Error(
      "[level] in first argument must be between [info, warn, error, debug]. Example: `printPretty('warn', 'Hello', 'World')`."
    );
  }

  const resetColor = "\x1b[0m";

  const color = levels[level] || "\x1b[37m";

  console.log(
    `${color}[${level.toUpperCase()}] [${formattedDate}]`,
    ...args,
    resetColor
  );
}

module.exports = printPretty;
