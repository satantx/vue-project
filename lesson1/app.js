var app = new Vue({
   el: '#app',
   data: {
      newName: '',
      names: ['joe', 'Mary', 'Alice', 'Jake']
   },

   methods: {
      addName() {
         this.names.push(this.newName);
         this.newName = '';
      }
   }
});
