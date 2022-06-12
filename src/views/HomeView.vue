<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <input :value="title2" @input="title2Change" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      @titleFromChild="titleChange"
      v-model="title2"
      :show="true"
      msg="Welcome to Your Vue.js + TypeScript App"
      msg2="msg2222"
    />
    <HelloWorld
      @titleFromChild="titleChange"
      v-model="title2"
      :show="true"
      msg="Welcome to Your Vue.js + TypeScript App"
      msg2="msg2222"
    />
    <HelloWorld
      @titleFromChild="titleChange"
      v-model="title2"
      :show="show"
      msg="Welcome to Your Vue.js + TypeScript App"
      msg2="msg2222"
    />
    <HelloWorld
      @titleFromChild="titleChange"
      v-model="title2"
      :show="show"
      msg="Welcome to Your Vue.js + TypeScript App"
      msg2="msg2222"
    />
    <HelloWorld
      @titleFromChild="titleChange"
      v-model="title2"
      :show="show"
      msg="Welcome to Your Vue.js + TypeScript App"
      msg2="msg2222"
    />
    <HelloWorld
      @titleFromChild="titleChange"
      v-model="title2"
      :show="show"
      msg="Welcome to Your Vue.js + TypeScript App"
      msg2="msg2222"
    /><HelloWorld
      @titleFromChild="titleChange"
      v-model="title2"
      :show="show"
      msg="Welcome to Your Vue.js + TypeScript App"
      msg2="msg2222"
    />
    <HelloWorld
      @titleFromChild="titleChange"
      v-model="title2"
      :show="show"
      msg="Welcome to Your Vue.js + TypeScript App"
      msg2="msg2222"
    />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
} from '@vue/composition-api'

interface ITitle2 {
  target: {
    value: string
  }
}

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const show = ref<boolean>(false)
    const title = ref<string>('')
    const title2 = ref<string>('')

    const handleScroll = () => {
      if (window.scrollY > 100) {
        show.value = true
      } else {
        show.value = false
      }
    }

    const titleChange = (titleValue: string) => {
      title.value = titleValue
    }

    const title2Change = (e: ITitle2) => {
      const { value } = e.target
      title2.value = value
    }

    onMounted(() => {
      show.value = true
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      show.value = false
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      titleChange,
      title2Change,
      title,
      title2,
      show,
      handleScroll,
    }
  },
})
</script>
