export class SuccessResponse {
  code: number;
  data: any;
  message:string;
  constructor(code: number, data: any) {
    this.code = code;
    this.message = 'Ok'
    this.data = data;
  }
}
