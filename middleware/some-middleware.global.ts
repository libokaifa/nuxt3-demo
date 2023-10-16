/*
 * @Author: libo02 libo02@dobest.com
 * @Date: 2023-10-16 10:13:49
 * @LastEditors: libo02 libo02@dobest.com
 * @LastEditTime: 2023-10-16 10:56:11
 * @FilePath: /nuxt3-app/middleware/some-middleware
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '2') {
    return abortNavigation('Insufficient permissions.')
  }else if(to.params.id === '1'){
    return navigateTo('/user-[admin]/3')
  }
})
