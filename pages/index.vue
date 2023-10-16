<!--
 * @Author: libo02 libo02@dobest.com
 * @Date: 2023-10-12 10:46:26
 * @LastEditors: libo02 libo02@dobest.com
 * @LastEditTime: 2023-10-16 12:45:55
 * @FilePath: /nuxt3-app/pages/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h1>heleo nuxt</h1> 
    <img src="~/assets/img/libologo.png" style="height: 180px; width: 180px;" alt="的；拉；"/>
    <p>
        <NuxtLink to='/detail'>detail</NuxtLink>
    </p>
    <p>
        <NuxtLink to='/user-[admin]/1'>user</NuxtLink>
    </p>
    <p>
        <NuxtLink to='/user-[admin]/2'>user2</NuxtLink>
    </p>
    <p>
        <NuxtLink to='/parent/child'>/parent/child</NuxtLink>
    </p>
    <p>  <NuxtLink to='/hilayout'>hilayout</NuxtLink></p>
    <p>
    <button>我是按钮组件</button>
    <ViewButton></ViewButton>
    {{ foo }}
    </p>
    <main>
    <ContentDoc />
   </main>

   <div>
    {{ $hello('world') }}
  </div>
</template>
<script setup>
const foo = useFoo()
const { $hello } = useNuxtApp()
const appConfig = useAppConfig()
console.log(appConfig.theme)

</script>