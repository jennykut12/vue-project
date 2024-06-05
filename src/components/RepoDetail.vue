
  
  <script>
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

  export default {
    data() {
      return {
        repo: null,
      };
    },
    created() {
      this.fetchRepoDetails();
    },
    methods: {
      async fetchRepoDetails() {
        const { username, repoName } = this.$route.params;
        try {
          const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
          if (!response.ok) {
            throw new Error('Repository not found');
          }
          this.repo = await response.json();
        } catch (error) {
          console.error('Error fetching repository details:', error);
          this.repo = null;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  </style>
  

  <template>
    
    <div class="header" v-if="repo">
        
        <div class="repo-header">
            <div>
      <router-link to="/" class="back-link">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>            
    </router-link>
    </div>
      <h2>{{ repo.name }}</h2>
      <p class="public">{{ repo.visibility }}</p>
    </div>
      <p>{{ repo.description }}</p>
      <p><strong>Owner:</strong> {{ repo.owner.login }}</p>
    <div class="gitHub">
        <div class="repo-header">
            <p><strong>Stars:</strong> {{ repo.stargazers_count }}</p>
            <p><strong>Forks:</strong> {{ repo.forks_count }}</p>
            <p><strong>Open Issues:</strong> {{ repo.open_issues_count }}</p>
        </div>
        <a :href="repo.html_url" target="_blank">View on GitHub</a>
    </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>

  <style>

  .header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon{
    width: 3vw;
    height: 3vw;
    color: hsla(160, 100%, 37%, 1);
    
  }
.repo-header{
    display: flex;
    gap:30px;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .gitHub{
    display: flex;
    align-items: center;
    margin-top: 40px;
    gap:40px;
    font-weight: bolder;
    border: 2px solid hsla(160, 100%, 37%, 1);
    width: 50vw;
    height: 5vh;
    padding: 30px 15px;
    border-radius: 10px;
  }
  .public{
    color: hsla(160, 100%, 37%, 1);
    font-size: 16px;
    font-weight: bold;
  }</style>