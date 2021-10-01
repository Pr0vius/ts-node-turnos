export class ErrorResponse extends Error {
  code: number;
  data: string;
  constructor(code: number, message: string, data: string) {
    super(message);
    this.code = code;
    this.data = data;
  }
}