<!-- src/components/FollowingList.vue -->
<template>
    <div class="following">
    <!-- <h1>Following</h1> -->
    <div class="following" v-if="error">
      <p class="error">OOPS!!!</p>
      <svg class="icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="hsla(160, 100%, 37%, 1)"  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
      <p class="error">{{ error }}</p>
    </div>
    <div v-else-if="followingUsers.length === 0">
      <p>No following users found.</p>
    </div>
    <div v-else>
      <Following v-for="following in followingUsers" :key="following.id" :following="following" />
    </div>
  </div>
  </template>
  
  <script>
  import Following from '../components/FollowingList.vue';
  
  export default {
  components: {
    Following,
  },
  data() {
    return {
      followingUsers: [],
      error: null,
    };
  },
  async created() {
    this.fetchFollowing();
  },
  methods: {
    async fetchFollowing() {
      try {
        const response = await fetch('https://api.github.com/users/jennykut12/following');
        if (!response.ok) {
          if (response.status === 404) {
            this.error = 'Error 404: Following not found';
          } else {
            this.error = `Error ${response.status}: ${response.statusText}`;
          }
          return;
        }
        const data = await response.json();
        if (data.length === 0) {
          this.error = 'No following users found.';
        } else {
          this.error = null;
          this.followingUsers = data;
        }
      } catch (error) {
        this.error = 'An unexpected error occurred.';
      }
    },
  },
};
  </script>
  
  <style scoped>
  .following{
    display: flex;
    height: 50vh;
    gap:10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  .icon{
    width: 20vw;
    height: 20vw;
    color: hsla(160, 100%, 37%, 1);
    
  }
  h1 {
    color: hsla(160, 100%, 37%, 1);
    font-size: 24px;
    margin-bottom: 10px;
  }
  .error {
  font-size: 24px;
  color: hsla(160, 100%, 37%, 1);
    font-weight: bolder;
}
  </style>
  