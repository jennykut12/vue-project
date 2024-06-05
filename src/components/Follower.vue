<!-- src/components/Follower.vue -->
<template>
    <div class="follower-card">
      <img :src="follower.avatar_url" alt="Avatar" class="avatar" />
      <div class="follower-info">
        <h3>{{ follower.login }}</h3>
        <a :href="follower.html_url" target="_blank">View Profile</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['follower'],
  };
  </script>
  
  <style scoped>
  .follower-card {
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
  .follower-info {
    flex-grow: 1;
  }
  </style>
  