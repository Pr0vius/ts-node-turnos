export class SuccessResponse {
  code: number;
  data: any;
  constructor(code: number, data: any) {
    this.code = code;
    this.data = data;
  }
}
