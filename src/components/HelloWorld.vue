<template>
  <div class="hello">
    <dl v-for="(item, index) in katexs" :key="index">
      <dt v-text="item.name">
      </dt>
      <dd v-katex="'$$'+ item.katex + '$$'">
      </dd>
    </dl>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      katexs: [
          {name:"特殊符号", katex:"\\$ \\%  \\& \\_ \\{ \\}  \\# "},
          {name:"上下标", katex:"a_{1}\\qquad x^2 \\quad  b^{3}_{ij} \\quad e^{2}\\neq (e^x)^2 \\quad e^{x^2}"},
          {name:"平方根", katex:"\\sqrt{x} \\quad \\sqrt[3]{x} \\quad \\sqrt{x^{2}+ \\sqrt{y}}"},
          {name:"分数", katex:"\\frac{x^2}{k+1} \\quad  x^{\\frac{2}{k+1}} \\quad x^{1/2}"},
          {name:"向量", katex:"\\vec a  \\qquad  \\overrightarrow{AB}  \\qquad  \\overleftarrow{AB}"},
          {name:"求和运算符", katex:"\\displaystyle{\\sum_{i=4}^{10}}"},
          {name:"希腊字母", katex:"\\alpha \\beta \\gamma \\sigma \\omega \\delta \\pi \\rho \\epsilon \\eta \\lambda \\mu \\xi \\tau \\kappa \\zeta \\phi \\chi"},
          {name:"常用的数学运算符", katex:"\> \< \\le  \\ge  \\ne  \\approx  \\sim  \\subseteq  \\in  \\notin  \\times  \\div  \\pm  \\Rightarrow  \\rightarrow  \\infty  \\partial  \\angle  \\triangle"},
          {name:"小括号,中括号", katex:"\\left (1,2,4\\right) \\qquad \\left [ 3,5,9 \\right ]"},
          {name:"尖括号", katex:"\\left \\langle  \\right \\rangle \\qquad \\left \\langle 3,4 \\right \\rangle"},
          {name:"水平线", katex:"\\overline{.oschina.io}+\\underline{lindexi.github.io}"},
          {name:"上下大括号", katex:"\\overbrace{blog.csdn.net/lindexi_gd}_{lindexi} + \\underbrace{lindexi.github.io}_{doubi}"},
          {name:"三角函数", katex:"\\sin\\theta \\qquad \\cos\\theta \\qquad \\tan\\theta \\qquad \\cot \\theta"},
          {name:"对数函数", katex:"\\lg X \\qquad \\log X \\qquad \\log_ 3 10"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
dl {
    font-size: 0;
    line-height: 40px;
}
dt {
    display: inline-block;
    text-align: left;
    width: 130px;
    vertical-align: middle;
    font-size: 14px;
}
dd {
    display: inline-block;
    width: calc(100% - 200px);
    font-size: 14px;
    vertical-align: middle;
    margin: 0;
    text-align: left;
}
</style>
