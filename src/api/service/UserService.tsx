import ApiInstance from '@/api'

export default class BookingService {
    
  async login(parm: any): Promise<any> {
    return ApiInstance.post('/api/v1/user/login', parm)
			.then((res) => {
				const data = res.data
				localStorage.setItem('token', data.Authorization)
				return data
			})
      .catch((error) => {
        throw error
      })
	}
}