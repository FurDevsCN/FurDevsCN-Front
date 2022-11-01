<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <div class="page p-2">
        <div class="glass-card-background">
            <div class="p-2-actionbar">
                <div class="actionbar" style="height: 6px;"></div>
            </div>
            <div class=" card card-member">
                <div>
                    <div class="card-member-list"></div>
                    <div class="card-member-desc">
                        <p>排名按照进入组织顺序</p>
                        <p>统计信息卡片来自于 <a href="https://github.com/anuraghazra/github-readme-stats"
                                target="_blank">anuraghazra/github-readme-stats</a> 的由玖叁魔改后的 <a
                                href="https://github.com/colour93/github-readme-stats"
                                target="_blank">colour93/github-readme-stats</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
