import ApiInstance from '@/api'
import { BookingInfo } from '@/api/types/BookingTypes'

export default class BookingService {

  async getBookingList(): Promise<Array<BookingInfo>> {
    return ApiInstance.get('/api/v1/booking/list')
      .then((res) => {
        const data = res.data
        return data as Array<BookingInfo>
      })
      .catch((error) => {
        throw error
      })
  }

  async booking(): Promise<any> {
    const parm = {
      "shopId": 1,
      "adultHeadCount": 2,
      "childHeadCount": 0
    }
    return ApiInstance.post('/api/v1/booking', parm)
      .then((res) => {
        const data = res.data
        return data
      })
      .catch((error) => {
        throw error
      })
  }
}
