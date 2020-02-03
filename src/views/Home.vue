<template>
  <div class="home">
    <button @click="useDestructuring">解构赋值</button>
    <button @click="useClass">定义类</button>
    <button @click="useExtend">扩展运算符</button>
    <div id="content"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {},
  methods: {
    // init() {
    //  this.$api.allApi.initData().then(res=>{
    //    console.log(res)
    //  })
    // }
    useClass() {
      class Animal {
        constructor() {
          this.type = "animal";
        }
        says(say) {
          alert(this.type + " says " + say);
        }
      }
      class Cat extends Animal {
        constructor() {
          super();
          this.type = "cat";
        }
      }
      let cat = new Cat();
      cat.says("miaomiao");
    },
    useDestructuring() {
      let [a, , b] = [1, 2];
      console.log(a, b);
    },
    useExtend() {
      let obj = { a: 1, b: 2 };
      let newObj = { ...obj, ...{ c: 3 } };
      console.log(newObj);
      const arr1 = [1, 2];
      const arr2 = [...arr1];
      arr2[0] = 2;
      console.log({ arr1, arr2 });
      let { length: len } = "hello";
      console.log(len);
      function example() {
        return [1, 2, 3];
      }
      let [a,b,c]=example();
      console.log(a, b, c);
    }
  }
};
</script>

