<!--
 * @Author: libo02 libo02@dobest.com
 * @Date: 2023-10-12 12:42:25
 * @LastEditors: libo02 libo02@dobest.com
 * @LastEditTime: 2023-10-12 15:42:35
 * @FilePath: /nuxt3-app/layouts/default.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        一些在所有页面共享的默认布局
        <TheHeader />
        <slot></slot>
        <TheFooter />
    </div>
</template>