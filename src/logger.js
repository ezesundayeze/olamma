const winston = require("winston");
const path = require("path");

const logger = ({ filename }) => {
  // Get the root directory of the project using the package
  const rootDir = path.resolve(process.cwd());

  // Specify the log file path relative to the project's root directory
  const logFilePath = path.join(rootDir, "logs", `${filename}.log`);

  return winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.File({
        filename: logFilePath,
        level: "error",
      }),
    ],
  });
};

module.exports = logger;

