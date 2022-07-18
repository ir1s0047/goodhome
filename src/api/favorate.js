import request from '@/utils/request'

export const getFavorate = () => {
  return request({
    url: '/user/favorites'
  })
}
