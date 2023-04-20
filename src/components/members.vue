<script>
export default {
  props: {
    memberItem: Object,
  },
  data(){
    return {
        stat: `https://github-readme-stats.furriesclub.online/api?username=${this.memberItem.login}&locale=cn&show_avatar=true&show_icons=true`,
        mostUse: `https://github-readme-stats.furriesclub.online/api/top-langs/?username=${this.memberItem.login}&layout=compact&locale=cn`
    }
  }
}
</script>
<template>
        <div class="card-member-item">
            <a :href=stat target="_blank">
                <img :src="stat">
                <img :src="mostUse">
            </a>
        </div>
</template>

<style>
.card-member-list {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
</style>