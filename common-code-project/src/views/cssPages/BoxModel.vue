<template>
    <div class="box-model-wrap">
      <header>
        <h1>Franklin Running Club</h1>
      </header>
      <div class="container">
        <main class="main">
          <h2>Come join us!</h2>
          <p>
            The Franklin Running club meets at 6:00pm every Thursday ath the town square.Runs are three to five miles,at your own pace.
          </p>
        </main>
        <aside class="sidebar">
          <div class="widget"></div>
          <div class="widget"></div>
        </aside>
      </div>
    </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped>
  .box-model-wrap {
    background-color: #eee;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
  }
  header {
    color: #fff;
    background-color: #0072b0;
    border-radius: .5em;
  }
  .main {
    float: left;
    width: 70%;
    background-color: #fff;
    border-radius: .5em;
  }
  .sidebar {
    float: left;
    width: 30%;
    padding: 1.5em;
    background-color: #fff;
    border-radius: .5em;
  }
</style>