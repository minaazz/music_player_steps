const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const len = list.length;
const deg = 360/len;

// 패널의 개수만큼 반복을 돌면서 일정 각도마다 회전
for(let i=0; i<len; i++) {
    list[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
}