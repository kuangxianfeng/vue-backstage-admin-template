<script>
export default {
  name: "Redirect",
  created() {
    this.$router.replace({
      path: this.$route.query.path,
      query: this.$route.query.query
    });
  },
  render: function(h) {
    return h();
  }
};
</script>
