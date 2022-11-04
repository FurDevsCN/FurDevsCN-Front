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
<style scoped>
/* 第一页样式 */

.p-1 {
  text-align: center;
  justify-content: center;
  align-items: center;
}

span,
p {
  color: var(--gray-dark);
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo img {
  max-width: 150px;
  width: auto;
}

.logo span {
  margin: 3px;
  font-size: 24px;
  color: var(--gray-dark);
  font-weight: 900;
}

.contact {

  display: flex;
}

.contact a {
  display: block;
  text-decoration: none;
  font-size: 18px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.384);
}

.contact a {
  background-color: rgb(205, 217, 191, 0);
  padding: 15px;
  border-radius: 25px;
  transition: .25s;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease;
  transition-delay: 0s;
}

.contact a:hover {
  background-color: rgba(205, 217, 191, 0.8);
  transition: .25s;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease;
  transition-delay: 0s;
}

.fixed-navigationbar {
  position: fixed;
  width: 100%;
  pointer-events: none;
  display: flex;
  justify-content: center;
  bottom: 10px;
  z-index: 10001;
}

.contact-card {
  /* flex 布局居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(227, 239, 214, 0.8);
  z-index: 10001;
  transition: color 0.25s, background-color 0.25s, box-shadow 0.25s, left 0.25s, opacity 0.25s, top 0.25s, width 0.25s, height 0.25s;
  pointer-events: all;
}

.svglogo {
  width: 40px;
}

a.github {
  color: var(--github-purple);
  margin: 0px 10px;
  line-height: 40px;
}

a.qq {
  color: var(--qq-light-blue);
  margin: 0px 10px;
  line-height: 40px;
}

a.telegram {
  color: var(--tg-blue);
  margin: 0px 10px;
  line-height: 40px;
}

.bio {
  line-height: 30px;
  height: 30px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}

.bio p,
.bio span {
  margin: 0 10px;
  font-size: 22px;
  color: var(--note-green);
  font-weight: 600;
}

.bio-text {
  display: inline-block;
  position: relative;
}

.bio-text::after {
  content: " ";
  position: absolute;
  right: -6px;
  top: 5px;
  height: 22px;
  width: 3px;
  animation: insert 1s steps(1) infinite;
}

@keyframes insert {

  0%,
  100% {
    background-color: var(--gray);
  }

  50% {
    background-color: transparent;
  }
}

.textcolor-gray {
  color: var(--gray-dark);
}
</style>

