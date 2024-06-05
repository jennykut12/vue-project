<template>
    <div class="repo-card">
        <div class="repo-header">
      <h2>{{ repo.name }}</h2>
      <p class="public">{{ repo.visibility }}</p>
    </div>
      <p class="description">{{ repo.description }}</p>
      <p><strong>Stars:</strong> {{ repo.stargazers_count }}</p>
      <p><strong>Forks:</strong> {{ repo.forks_count }}</p>
        <router-link :to="{ name: 'repo-detail', params: { username: repo.owner.login, repoName: repo.name } }">
            <div class="view">

            <p class="description">
                View Repository
            </p>
    </div>
</router-link>
      <!-- <a :href="repo.html_url" target="_blank">View Repository</a> -->
    </div>
  </template>
  
  <script>
  export default {
    // props: ['repo'],
    props: {
      repo: Object,
    },
  };
  </script>
  
  <style scoped>
  .view{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 2px solid hsla(160, 100%, 37%, 1);
    width: 20vw;
    height: 7vh;
    border-radius: 20px;
  }
  .repo-card {
    border: 2px solid hsla(160, 100%, 37%, 1);
    padding: 20px;
    width: 40vw;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .repo-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .public{
    color: hsla(160, 100%, 37%, 1);
    font-size: 16px;
    font-weight: bold;
  }
  .description{
    font-size: 16px;
    font-weight: bold;
  }
  .repo-card h2 {
    margin: 0 0 10px;
  }
  .repo-card p {
    margin: 0 0 10px;
  }
  .repo-card a {
    color: hsla(160, 100%, 37%, 1);
    text-decoration: none;
  }
  .repo-card a:hover {
    text-decoration: underline;
  }
  </style>
  