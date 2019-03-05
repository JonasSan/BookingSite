export class Customer {
  constructor(
    public customerId: number,
    public firstName: string,
    public lastName: string,
    public personalIdentityNumber: number,
    public payType: string,
    public wantsConfirmationMail: boolean
  ) {}
}
