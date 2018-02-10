<template>

    <div class="card-body">
      <p class="card-text">
        <slot></slot>
      </p>
  </div>
</template>
<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    min-height: 100px;
    transition: 0.3s;
  }
  .card-body{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
