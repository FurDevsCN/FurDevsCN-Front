<script>
import axios from 'axios'
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Members: defineAsyncComponent(() =>
      import('../components/MemberItem.vue')
    )
  },
  data() {
    return {
      memberList: {}
    }
  },
  methods: {
    async loadMembers() {
      this.handleMemberList(
        await axios.get(
          'https://fur233.oss-cn-hangzhou.aliyuncs.com/common/members.json'
        )
      )
    },
    handleMemberList({ data: resp }) {
      this.memberList = resp.data
    }
  },
  mounted() {
    this.loadMembers()
  }
}
</script>
<template>
  <div class="page p-2">
    <div class="glass-card-background">
      <div class="p-2-actionbar">
        <div class="actionbar" style="height: 6px"></div>
      </div>
      <div class="card card-member">
        <div>
          <div class="card-member-list">
            <div v-for="item of memberList" :key="item">
              <Members :memberItem="item" />
            </div>
          </div>

          <div class="card-member-desc">
            <strong>
              <p>排名按照进入组织顺序</p>
              <p>
                统计信息卡片来自于由玖叁魔改后的
                <a
                  href="https://github.com/colour93/github-readme-stats"
                  target="_blank"
                  >colour93/github-readme-stats</a
                >
              </p>
            </strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* 第二页样式 */

.p-2 {
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  background-color: transparent;
}
/* 操作栏 */
.p-2-actionbar {
  padding-top: 22px;
  height: 30px;
  width: 100%;
}

.actionbar {
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.5);
  width: 100px;
  min-width: 100px;
  max-width: 50%;
  border-radius: 5px;
}

.glass-card-background {
  height: 80%;
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(5px);
  border-radius: 1rem 1rem 0rem 0rem;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
}

.card.card-member {
  background-color: transparent;
  backdrop-filter: blur(0px);
  max-width: 1440px;
  max-height: 80vh;
  width: 80vw;
  overflow: auto;
  z-index: 3;
  border-radius: 0;
  padding-top: 10px;
  box-shadow: none;
}

.card.card-member::-webkit-scrollbar {
  /* 滚动条整体 */
  width: 10px;
  border-radius: 5px;
  transition: color 0.25s, background-color 0.25s, box-shadow 0.25s;
}

.card.card-member::-webkit-scrollbar-track {
  /* 滚动条轨道 */
  background-color: rgba(204, 204, 204, 0);
  border-radius: 10px;
  margin: 10px;
}

.card.card-member::-webkit-scrollbar-thumb {
  /* 滚动条里面的滑块 */
  background-color: rgba(113, 113, 113, 0.6);
  border-radius: 10px;
}

.card.card-member::-webkit-scrollbar-thumb:hover {
  background-color: rgba(113, 113, 113);
}

.card-member-item img {
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  padding-left: 10%;
}

.card-member-item {
  margin: 15px 0;
  width: 400px;
}

.card-member-desc {
  text-align: center;
}

.card-member-desc a {
  text-decoration: none;
  color: var(--link-blue);
}
</style>
