JavaScript;
// 取得 HTML 元素
const title = document.getElementById("title");
const btn = document.getElementById("btn");

// 設定點擊事件
btn.addEventListener("click", () => {
  title.textContent = "按鈕被點擊了！程式正常運作 🎉";
  title.style.color = "#e63946";
});

// 全家人資料清單
const familyMembers = [
  {
    name: "爹爹",
    role: "老爸",
    birthday: "1965-06-18",
    hobby: "賺錢、喝咖啡",
    // 填寫圖片路徑，若沒有照片可先放預設圖片網址
    avatar: "images/dad.jpg",
  },
  {
    name: "媽咪",
    role: "媽媽",
    birthday: "1981-09-19",
    hobby: "賺很多錢、看劇",
    avatar: "images/mom.jpg",
  },
  {
    name: "金智宣",
    role: "女兒",
    birthday: "2011-08-17",
    hobby: "畫圖、打電動",
    avatar: "images/daughter.jpg",
  },
  {
    name: "金智恩",
    role: "兒子",
    birthday: "2014-06-23",
    hobby: "玩樂高、貓咪大作戰、戰鬥陀螺",
    avatar: "images/son.jpg",
  },
];

// 計算年齡的輔助函式
function getAge(birthdayString) {
  const birthDate = new Date(birthdayString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// 產生卡片時即可加入：
// `<p class="info-item">🎂 年齡：${getAge(member.birthday)} 歲</p>`

<img
  class="avatar-img"
  src="${member.avatar}"
  alt="${member.name}"
  onerror="this.src='https://api.dicebear.com/7.x/thumbs/svg?seed=Family'"
>
  <span class="role-badge ${member.role.includes('父') || member.role.includes('母') ? 'role-parent' : 'role-child'}">
    ${member.role}
  </span>
  <h2 class="member-name">${member.name}</h2>
  <ul class="info-list">
    <li>
      🎂 <strong>生日：</strong>${member.birthday}
    </li>
    <li>
      🎯 <strong>興趣：</strong>${member.hobby}
    </li>
  </ul>
</img>;
