
const vm = new Vue( {
    el: '#selection',
    data: {
	menu: menu,
    }
})

/*
<script src="https://vuejs.org/js/vue.js"></script>
<div id="myID">
  <h1>
    Välj en burgare
  </h1>
  <ul>
    <li v-for="item in menu">
      {{item.info()}}
      <p v-if="item.lactose">
      Lactose
      </p>
      <p v-if="item.gluten">
      Gluten
      </p>
      <p v-if="item.vegan">
      Vegan
      </p>
    </li>
  </ul>
</div>
*/
