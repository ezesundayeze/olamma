const { errorHandler, CustomError, setError } = require("../src/errorHandler");


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
      error: { message: "Something went wrong" },
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
      error: { message: "Something went wrong" },
    });
    expect(next).not.toHaveBeenCalled();
  });



  it("should return the specified status code and error message for a custom error type", () => {
    const err = new CustomError("Something went wrongh", 400, true);
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

  it("should return the default error message when not explicitly set", () => {
    const err = new Error("UnknownError");
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next = jest.fn();
    setError("New default error")
    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: { message: "New default error" },
    });
    expect(next).not.toHaveBeenCalled();
  });

});
