const { StatusCodes } = require("http-status-codes");
const CustomError = require("./custom_error");

class NotFound extends CustomError {
    constructor(message) {
        super(message);
        this.status = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFound;