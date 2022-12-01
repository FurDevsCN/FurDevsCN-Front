import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
createApp(App).mount('#app')

/**
 * index.js
 */
 window.onload = () => {

    // 加载翻页
    touchMoveRegister();

    // 注册 contact 为 headroom
    contactBarRegister();

    // 加载滚动注释
    bioUpdate();

    // 加载成员
    loadMembers();

    // 加载console彩蛋
    consoleEgg();
}
function contactBarRegister () {
    const contactCard = document.querySelector(".fixed-navigationbar");
    const contactCardHeadroom = new Headroom(contactCard);
    contactCardHeadroom.init();
}

function bioUpdate() {
    const text = document.querySelector('.bio-text');

    // 文本
    const contentArray = ["趁喜欢，去热爱。", "中国小动物开发社群", "Furry Developers in China"];
    let index = 0;

    // 颜文字
    const emotionArray = ["(*/ω＼*)", "( •̀ ω •́ )y", "( •̀ .̫ •́ )✧", "ヽ(＊>∇<)ﾉ", "ฅ"];
    let eIndex = 0;

    // 变向
    let change = true;

    // 拼接字符串
    let i = 0;
    let tempStr = contentArray[0] + "  " + emotionArray[0];

    setInterval(() => {

        if (change) {
            text.innerHTML = tempStr.slice(0, ++i);
        } else {
            if (i <= 0) {
                text.innerHTML = "_";
                i--;
            } else {
                text.innerHTML = tempStr.slice(0, i--);
            }
        }

        if (i == tempStr.length + 10) {
            change = false;
        } else if (i < 0) {
            i = 0;
            change = true;
            index++;
            if (index >= contentArray.length) {
                text.innerHTML = "_";
                index = 0;
            }
            eIndex++;
            if (eIndex >= emotionArray.length) {
                eIndex = 0;
            }
            tempStr = contentArray[index] + "  " + emotionArray[eIndex];
        }

    }, 100)
}

async function loadMembers() {

    // 获取父卡片元素
    const card = document.querySelector(".card-member-list");

    // 获取数据
    const memberList = await axios.get("https://fur233.oss-cn-hangzhou.aliyuncs.com/common/members.json").then(res => res.data.data);

    for (let i = 0; i < memberList.length; i++) {
        const memberItem = memberList[i];
        
        // 创建游离节点
        const newDiv = document.createElement('div');

        // 添加类
        newDiv.setAttribute('class', 'card-member-item');

        // 创建内部节点

        // 链接
        const aNode = document.createElement('a');
        aNode.setAttribute('href', `https://github.com/${memberItem.login}`);
        aNode.setAttribute('target', '_blank')
        // 图片
        const img1Node = document.createElement('img');
        const img2Node = document.createElement('img');
        img1Node.setAttribute('src', `https://github-readme-stats.furriesclub.online/api?username=${memberItem.login}&locale=cn&show_avatar=true&show_icons=true`);
        img2Node.setAttribute('src', `https://github-readme-stats.furriesclub.online/api/top-langs/?username=${memberItem.login}&layout=compact&locale=cn`);
        img1Node,img2Node.onerror=function(){
            img1Node.setAttribute('style','display:none;')//出错隐藏
            img2Node.setAttribute('style','display:none;')
        }
        // 合并节点
        aNode.appendChild(img1Node);
        aNode.appendChild(img2Node);
        newDiv.appendChild(aNode);

        // 插入文档
        card.appendChild(newDiv);
    }
}

function consoleEgg() {

    const styleTitle1 = "font-size: 20px; font-weight: 600; color: rgb(244,167,89);"
    const styleTitle2 = "font-style: oblique; font-size:14px; color: rgb(244,167,89); font-weight: 400;"
    const styleContent = "color: rgb(30,152,255);"

    /* 内容代码 */
    const title1 = '🌈 FurDevsCN '
    const title2 = '中国小动物开发社群'

    // => 读取配置型（在配置文件里配置这些会变动的网址）
    const offiUrl = 'https://furdevs.cn'
    const content = `
        版 本 号：1.0.0    
        欸？你发现了一个彩蛋？
        🏠官网:  ${offiUrl}
    `
    console.log(`%c${title1} %c${title2} \n\n%c${content}`, styleTitle1, styleTitle2, styleContent)
}

function touchMoveRegister () {
    let moveStartY = 0;
    let moveY = 0;
    let moving = false;

    document.querySelector('.p-1').addEventListener('touchstart', function(e){
        moving = true;
        moveStartY = e.touches[0].pageY;
        e.preventDefault();
    } , false);

    document.querySelector('.p-1').addEventListener('touchmove', function(e){
        if (moving) {
            moveY = e.touches[0].pageY - moveStartY;
        }
    } , false);

    document.querySelector('.p-1').addEventListener('touchend', function(e){
        moving = false;
        moveStartY = 0;

        if (moveY < -20) {
            document.querySelector('.p-2').scrollIntoView({
                behavior: "smooth"
            })
        }

        if (moveY > 20) {
            document.querySelector('.p-1').scrollIntoView({
                behavior: "smooth"
            })
        }

        moveY = 0;

    } , false);
}