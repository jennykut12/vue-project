<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script> -->
<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await fetch('https://api.github.com/users/jennykut12');
        const data = await response.json();
        this.user = data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
  },
};
</script>

<template>
  <div class="div">
    <h1>GitHub User Data</h1>
    <div class="repodiv" v-if="user">
      <div class="img">
        <img alt="profileImg" class="profileImg" src="@/assets/jenniferimgbg.png" width="225" height="225" />
      </div>
      <div class="repo">
        <div>
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Username:</strong> {{ user.login }}</p>
        <p><strong>Bio:</strong> {{ user.bio }}</p>
        <p><strong>Public Repos:</strong> {{ user.public_repos }}</p>
        <div class="gitdiv">
          <a href="https://github.com/jennykut12" target="_blank" rel="noopener">
            <div >
              <h5>See on GitHub</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.div{
  width: 100%;
}

.repodiv {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between
}

.repo{
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.repo p{
  display: flex;
  gap: 10px;
  font-size: 24px;

}

.repo strong{
  color: hsla(160, 100%, 37%, 1);
  font-weight: bolder;
}

.gitdiv {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid hsla(160, 100%, 37%, 1);
  margin-top: 20px;
}

.gitdiv h5{
  font-size: 18px;
  font-weight: bolder;
}

.profileImg {
  border-radius: 60%;
  width: 80%;
  height: 80%;
  background-color: bisque;
}

.img{
  width: 50%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {

  .div{
  width: 100%;
}

.repodiv {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
}
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
