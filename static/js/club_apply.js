//공연, 봉사, 체육, 문화, 학술, 종교
campus = {
  가좌: {
    공연: [
      "기라성",
      "햇귀",
      "피오니어챔버오케스트라",
      "퍼포먼스",
      "토네이도",
      "악상",
      "소리울림",
      "빛소리",
      "빅이글",
      "베이비스트링스",
      "바로크",
      "다운타운",
      "남가람",
      "경상극예술연구회",
      "악동",
    ],
    봉사: [
      "해피빌더스",
      "한울회",
      "유니피스",
      "로타랙트",
      "동그리",
      "도담",
      "다정",
      "굿네이버스",
      "Country",
      "A to Z",
      "진주대학생연합봉사동아리 위더스",
    ],
    체육: [
      "화랑회",
      "카운터",
      "점보",
      "오반칙",
      "산악부",
      "민턴사랑",
      "락 FC",
      "두바퀴",
      "경상탁구가족",
      "경상정도회",
      "경상EB",
      "kvc 경상배구회",
      "KTC 경상테니스클럽",
      "KOJ",
      "Jamas X LTJ",
      "FC BB",
      "ELEVEN",
    ],
    문화: [
      "그릴자유",
      "경상바둑회(돌밭)",
      "죽로다우회",
      "페이드인(FADE_IN)",
      "흔적",
      "얼사랑",
    ],
    학술: [
      "핀스킨(Pinskin)",
      "APLUSES",
      "경상타임연구회",
      "미네르바",
      "역사의 참견",
      "하소연",
      "고나푸스",
    ],
    종교: [
      "인터콥",
      "JDM",
      "IVF",
      "ESF",
      "CCC",
      "증산도 학생회",
      "네비게이토 동아리",
      "가톨릭학생회",
      "SFC",
      "CMI",
      "GNU Cross",
    ],
  },
  칠암: {
    공연: ["파랑새", "NAND", "COLORS", "반하나", "메아리", "나이테"],
    봉사: ["다소다", "로타렉트", "유니피스", "흙", "해병동지회"],
    체육: [
      "하이브리드",
      "퍼펙트",
      "탑스핀",
      "산악부",
      "백구회",
      "배드갓",
      "멀구슬 FC",
      "JTC",
      "J&J",
    ],
    문화: [
      "청리",
      "방울방울",
      "IF",
      "앤유(ANDYOU)",
      "로망스",
      "순간",
      "마인드디자인",
      "칠차삼정",
    ],
    학술: ["칠엽수", "올 메이커즈", "천도", "수", "이카루스"],
    종교: [
      "IVF 한국기독학생회",
      "EBS (English Bible Study)",
      "SFC",
      "CCC",
      "원진회",
    ],
  },
};
function search() {
  choiced_campus = campus[document.getElementById("campus-select").value];
  choiced_property =
    choiced_campus[document.getElementById("property-select").value];
  let input = document.getElementById("club-name").value;
  input = input.toLowerCase();
  search_result = new Array();
  for (let i = 0; i < choiced_property.length; i++) {
    if (choiced_property[i].toLowerCase().includes(input)) {
      search_result.push(choiced_property[i]);
    }
  }
  let club = document.getElementById("club-name");
  for (let i = 0; i < search_result.length; i++) {
    club.innerHTML += `<option value="${search_result[i]}">${search_result[i]}</option>`;
  }
}

let modal_background = document.getElementById("modal-background");
let apply_modal = document.getElementById("apply-modal");
modal_background.style.display = "none";
apply_modal.style.display = "none";

let apply_btn = document.getElementById("apply-btn");

apply_btn.onclick = function () {
  modal_background.style.display = "block";
  apply_modal.style.display = "block";
  modal_background.addEventListener("click", function () {
    modal_background.style.display = "none";
    apply_modal.style.display = "none";
  });
};
