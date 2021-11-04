import { ValidationError } from "express-validator";

export class ErrorResponse extends Error {
  code: number;
  data: string | ValidationError[];
  constructor(
    code: number,
    message: string | undefined,
    data: string | ValidationError[]
  ) {
    super(message);
    this.code = code;
    this.data = data;
  }
}
