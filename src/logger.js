const winston = require("winston");
const path = require("path");

const logger = ({ filename }) => {
  // Get the root directory of the project using the package
  const rootDir = path.resolve(process.cwd());

  // Specify the log file path relative to the project's root directory
  const logFilePath = path.join(rootDir, "logs", `${filename}.log`);

  return winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      //
      new winston.transports.File({
        filename: logFilePath,
        level: "error",
      }),
    ],
  });
};

module.exports = logger;
