<template>
  <div class="options-container">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  background: white;
  border-radius: 5px;
  border: 1px solid blanchedalmond;
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}
.options-container {
  display: flex;
  justify-content: center;
  background: rgb(197, 226, 153);
}
li:hover {
  background: rgba(238, 168, 63, 0.4);
}
</style>
