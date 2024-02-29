enum BookingQueueType {
  NORMAL = '일반대기열',
  PRIORITY = '우선순위대기열'
}

export interface BookingInfo {
  bookingQueueId: number;
  userId: number;
  userName: string;
  shopId: number;
  shopName: string;
  shopBookingNumberAsString: string;
  bookingQueueType: BookingQueueType;
  adultHeadCount: number;
  childHeadCount: number;
  bookingDateTime: Date;
  priorityDateTime: Date;
}
