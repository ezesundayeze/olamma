const {
  errorHandler,
  CustomError,
  setErrorMappings,
} = require("../src/errorHandler");

describe("errorHandler", () => {
  it("should return the correct status code and error message for a known error type", () => {
    const err = new SyntaxError("Something went wrong");
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: { message: "Something went wrong. We are working on it!" },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return the default status code and error message for an unknown error type", () => {
    const err = new Error("UnknownError");
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: { message: "Something went wrong. We are working on it!" },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return the specified status code and error message for a custom error type", () => {
    const err = new CustomError("Something went wrongh", 400);
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: { message: "Something went wrongh" },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should override the error mapping and return the specified status code and error message", () => {
    setErrorMappings({
      SyntaxError: {
        statusCode: 404,
        message: "Not found",
      },
    });

    const err = new SyntaxError("Not found");
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: { message: "Not found" } });
    expect(next).not.toHaveBeenCalled();
  });
});
