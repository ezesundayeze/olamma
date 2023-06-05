// Define the error mappings
module.exports = {
  /**
   * Maps error types to their corresponding status codes and error messages.
   * @type {Object.<string, { statusCode?: number, message: string }>}
   */
  SyntaxError: { statusCode: 500, message: "Internal server error" },
  TypeError: { statusCode: 500, message: "Internal server error" },
  ReferenceError: { statusCode: 500, message: "Reference error" },
  RangeError: { statusCode: 500, message: "Invalid input range" },
  ValidationError: { statusCode: 400, message: "Validation failed" },
  MongoError: { statusCode: 500, message: "Database error" },
  AuthenticationError: { statusCode: 401, message: "Authentication failed" },
  MySQLError: { statusCode: 500, message: "MySQL database error" },
  MongoDBError: { statusCode: 500, message: "MongoDB database error" },
  PostgreSQLError: { statusCode: 500, message: "PostgreSQL database error" },
  ConnectionError: { statusCode: 500, message: "Database connection error" },
  QueryError: { statusCode: 500, message: "Database query error" },
  DuplicateKeyError: { statusCode: 400, message: "Duplicate key violation" },
  DocumentNotFoundError: { statusCode: 404, message: "Document not found" },
  WriteError: { statusCode: 500, message: "Database write error" },
  UniqueConstraintError: {
    statusCode: 400,
    message: "Unique constraint violation",
  },
  TransactionError: { statusCode: 500, message: "Database transaction error" },
  ForeignKeyConstraintError: {
    statusCode: 400,
    message: "Foreign key constraint violation",
  },
  CastError: { statusCode: 400, message: "Invalid data type cast" },
  IndexError: { statusCode: 500, message: "Database index error" },
  NotNullConstraintError: {
    statusCode: 400,
    message: "Not null constraint violation",
  },
  TimeoutError: { statusCode: 500, message: "Database timeout error" },
  PoolError: { statusCode: 500, message: "Database connection pool error" },
  ConcurrencyError: { statusCode: 500, message: "Concurrency error" },
  ExecutionError: { statusCode: 500, message: "Database execution error" },
  AccessDeniedError: { statusCode: 403, message: "Access denied" },
  ConnectionLostError: { statusCode: 500, message: "Database connection lost" },
  CursorNotFoundError: { statusCode: 404, message: "Cursor not found" },
  ChangeStreamError: { statusCode: 500, message: "Change stream error" },
  QueryCanceledError: { statusCode: 500, message: "Query canceled" },
  BulkWriteError: { statusCode: 500, message: "Bulk write error" },
  WriteConcernError: { statusCode: 500, message: "Write concern error" },
  ExceededMemoryLimitError: {
    statusCode: 500,
    message: "Exceeded memory limit",
  },
  Error: { statusCode: 500, message: "Internal server error" }
};
