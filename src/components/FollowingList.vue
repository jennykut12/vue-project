<!-- src/components/Following.vue -->
<template>
    <div class="following-card">
      <img :src="following.avatar_url" alt="Avatar" class="avatar" />
      <div class="following-info">
        <h3>{{ following.login }}</h3>
        <a :href="following.html_url" target="_blank">View Profile</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['following'],
  };
  </script>
  
  <style scoped>
  .following-card {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .following-info {
    flex-grow: 1;
  }
  </style>
  