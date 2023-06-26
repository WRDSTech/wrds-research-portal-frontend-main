<template>
  <div class="container page-wrapper-container home">
    <PaperAbstract />
  </div>
</template>

<script>
// @ is an alias to /src
import PaperAbstract from '@/components/PaperAbstract.vue'

export default {
  name: 'Home',
  components: {
    PaperAbstract
  }
}
</script>

<style lang="less" scoped>
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 15%;
    margin-left: 15%;
}

</style>
