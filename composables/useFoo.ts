/*
 * @Author: libo02 libo02@dobest.com
 * @Date: 2023-10-13 17:24:39
 * @LastEditors: libo02 libo02@dobest.com
 * @LastEditTime: 2023-10-13 17:24:52
 * @FilePath: /nuxt3-app/composables/useFoo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const useFoo = () => {
    return useState('foo', () => 'bar')
}
  