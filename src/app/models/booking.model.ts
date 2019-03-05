export class Booking {
  constructor(
    public bookingId: number,
    public customerId: number,
    public room: string,
    public bookingDate: string,
    public checkoutDate: string,
    public hasChosenRoomError: boolean,
    public hasChosenDateError: boolean
  ) {}
}
