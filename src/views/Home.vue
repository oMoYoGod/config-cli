<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    this.init();
  },
  methods: {
    init() {
     this.$api.allApi.initData().then(res=>{
       console.log(res)
     })
    }
  }
};
</script>
