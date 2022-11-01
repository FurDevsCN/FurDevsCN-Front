<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <div class="page p-1">
        <div class="card card-intro">
            <div class="logo">
                <p style="text-align: center;">
                    <embed src="/public/FurDevsCN.svg" type="image/svg+xml" width="100px" />
                </p>
                <span>FurDevsCN</span>
            </div>
            <div class="bio">
                <span>/* </span>
                <p class="bio-text">_</p>
                <span> */</span>
            </div>
        </div>
  </div>
</template>

