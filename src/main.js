import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
createApp(App).mount('#app')
/**
 * index.js
 */
window.addEventListener(
  'load',
  () => {
    touchMoveRegister()
    contactBarRegister()
    bioUpdate()
    consoleEgg()
  },
  {
    passive: true
  }
)
/**
 * 获得最后一次的 commit id。
 * @returns {Promise<string>} commit id
 */
async function getCommitID() {
  const {
    data: [{ sha }]
  } = await axios.get(
    'https://api.github.com/repos/FurDevsCN/FurDevsCN-Front/commits'
  )
  return sha.slice(0, 7)
}
function contactBarRegister() {
  const contactCard = document.querySelector('.fixed-navigationbar')
  const contactCardHeadroom = new window.Headroom(contactCard)
  contactCardHeadroom.init()
}
function bioUpdate() {
  const text = document.querySelector('.bio-text')

  // 文本
  const contentArray = [
    '趁喜欢，去热爱。',
    '中国小动物开发社群',
    'Furry Developers in China'
  ]
  let index = 0

  // 颜文字
  const emotionArray = [
    '(*/ω＼*)',
    '( •̀ ω •́ )y',
    '( •̀ .̫ •́ )✧',
    'ヽ(＊>∇<)ﾉ',
    'ฅ'
  ]
  let eIndex = 0

  // 变向
  let change = true

  // 拼接字符串
  let i = 0
  let tempStr = contentArray[0] + '  ' + emotionArray[0]

  setInterval(() => {
    if (change) {
      text.innerHTML = tempStr.slice(0, ++i)
    } else {
      if (i <= 0) {
        text.innerHTML = '_'
        i--
      } else {
        text.innerHTML = tempStr.slice(0, i--)
      }
    }

    if (i == tempStr.length + 10) {
      change = false
    } else if (i < 0) {
      i = 0
      change = true
      index++
      if (index >= contentArray.length) {
        text.innerHTML = '_'
        index = 0
      }
      eIndex++
      if (eIndex >= emotionArray.length) {
        eIndex = 0
      }
      tempStr = contentArray[index] + '  ' + emotionArray[eIndex]
    }
  }, 100)
}

async function consoleEgg() {
  const styleTitle1 =
    'font-size: 20px; font-weight: 600; color: rgb(244,167,89);'
  const styleTitle2 =
    'font-style: oblique; font-size:14px; color: rgb(244,167,89); font-weight: 400;'
  const styleContent = 'color: rgb(30,152,255);'

  /* 内容代码 */
  const title1 = '🌈 FurDevsCN '
  const title2 = '中国小动物开发社群'

  // => 读取配置型（在配置文件里配置这些会变动的网址）
  const offiUrl = 'https://furdevs.cn'

  const content = `
        版 本 号：${await getCommitID()}   
        欸？你发现了一个彩蛋？
        🏠官网:  ${offiUrl}
    `
  console.log(
    `%c${title1} %c${title2} \n\n%c${content}`,
    styleTitle1,
    styleTitle2,
    styleContent
  )
}

function touchMoveRegister() {
  let moveStartY = 0,
    moveY = 0,
    moving = false

  document.querySelector('.p-1')?.addEventListener(
    'touchstart',
    e => {
      moving = true
      moveStartY = e.touches[0].pageY
      e.preventDefault()
    },
    false
  )

  document.querySelector('.p-1')?.addEventListener(
    'touchmove',
    e => {
      if (moving) {
        moveY = e.touches[0].pageY - moveStartY
      }
    },
    false
  )

  document.querySelector('.p-1')?.addEventListener(
    'touchend',
    () => {
      moving = false
      moveStartY = 0

      if (moveY < -20) {
        document.querySelector('.p-2')?.scrollIntoView({
          behavior: 'smooth'
        })
      }

      if (moveY > 20) {
        document.querySelector('.p-1')?.scrollIntoView({
          behavior: 'smooth'
        })
      }

      moveY = 0
    },
    false
  )
}
