<template>
    <div class="login sDiv" v-loading="loading">
        <form class="login-wrap sDiv" method="POST" @submit.prevent="loginHandle">
            <h1>Login</h1>
            <input type="text" placeholder="请填写用户名" v-model="userName" name="userName" autocomplete/>
            <input type="password" placeholder="请填写密码" v-model="password" name="password" autocomplete/>
            <input type="submit" value="登陆" />
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "admin1", //admin1
      password: "admin1", //admin1
      loading: false
    };
  },
  methods: {
    loginHandle() {
      let userName = this.userName;
      let password = this.password;
      if (!userName) {
        this.$message.error("请填写用户名");
        return false;
      } else if (!password) {
        this.$message.error("请填写密码");
        return false;
      }
      this.loading = true;
      this.$api
        .login({
          userName,
          password
        })
        .then(async res => {
          if (res.data.code === 200) {
            this.$store.commit("setToken", res.data.data.token);
            this.loading = false;
            this.$router.push("/");
          }
        });
    }
  },
  created() {
    this.$store.commit("setToken", "");
    this.$store.commit("setMeauBarData", []);
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/Login/Index.scss";
</style>