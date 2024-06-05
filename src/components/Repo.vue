
  
  <script>
  import RepoItem from './RepoItem.vue';
  
  export default {
    components: {
      RepoItem,
    },
    data() {
      return {
        repos: [],
        searchTerm: '',
        currentPage: 1,
        perPage: 2,
        error: null,
      };
    },
    computed: {
      filteredRepos() {
        return this.repos.filter(repo =>
          repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
      totalPages() {
        return Math.ceil(this.filteredRepos.length / this.perPage);
      },
      paginatedRepos() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.filteredRepos.slice(start, end);
      },
    },
    created() {
      this.fetchRepos();
    },
    methods: {
        async fetchRepos() {
      try {
        console.log('Fetching repositories...');
        const response = await fetch('https://api.github.com/users/jennykut12/repos');
        console.log('Response:', response);
        if (!response.ok) {
            console.error('Response not OK', response.status);
          if (response.status === 404) {
            this.error = 'Error 404: Not Found';
          } else if (response.status === 403) {
            this.error = 'Error 403: Forbidden';
          } else {
            this.error = `Error ${response.status}: ${response.statusText}`;
          }
          console.error('Error:', this.error);
          return;
        }
        const data = await response.json();
        this.repos = data;
        this.error = null; // Reset error in case of successful fetch
        console.log('Fetched data:', data);
      } catch (error) {
        this.error = 'An unexpected error occurred.';
        console.error('Error fetching repositories:', error);
      }
    },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
    },
  };
  </script>

<template>
    <div>
      <h1>Search GitHub Repositories</h1>
      <input type="text" v-model="searchTerm" placeholder="Search for a repository..." />
      
      <div v-if="error">
      <p>{{ error }}</p>
    </div>

      <div class="repo" v-else-if="paginatedRepos.length">
        <RepoItem v-for="repo in paginatedRepos" :key="repo.id" :repo="repo" />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      
      <div class="repo" v-if="filteredRepos.length && !error">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <style scoped>

  .repo{
    display: flex;
    justify-content: space-evenly;
  }
  input {
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  button {
    padding: 10px;
    margin: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f5f5f5;
    cursor: pointer;
  }
  button:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  </style>
  