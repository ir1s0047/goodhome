import request from '@/utils/request'

/**
 *
 * @param {String} username
 * @param {String} password
 * @returns
 */
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}
export const getUserInfo = () => {
  return request({
    url: '/user'
  })
}
