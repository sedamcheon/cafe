"use strict";

const CATEGORIES = ["커피", "라떼", "에이드", "아이스티", "스무디", "기타 음료"];
const AUTH_KEY = "cafe_admin_session_v1";

const SAMPLE_CAFES = {
  mega_coffee: {
    name: "메가커피",
    area: "정문 근처",
    locationDetail: "부경대학교 대연캠퍼스 정문 근처",
    distanceText: "정문 도보 3분",
    distanceMinutes: 3,
    hours: "08:00-22:00",
    features: ["대용량", "테이크아웃 가능"],
    updatedAt: "2026-06-10",
    menus: {
      ice_americano: { name: "아이스 아메리카노", category: "커피", price: 2000, updatedAt: "2026-06-10" },
      cafe_latte: { name: "카페라떼", category: "라떼", price: 3200, updatedAt: "2026-06-10" },
      vanilla_latte: { name: "바닐라라떼", category: "라떼", price: 3700, updatedAt: "2026-06-10" },
      grapefruit_ade: { name: "자몽에이드", category: "에이드", price: 3900, updatedAt: "2026-06-10" }
    }
  },
  compose_coffee: {
    name: "컴포즈커피",
    area: "후문 근처",
    locationDetail: "부경대학교 후문 상권",
    distanceText: "후문 도보 5분",
    distanceMinutes: 5,
    hours: "08:00-22:30",
    features: ["가격 저렴", "메뉴 다양"],
    updatedAt: "2026-06-10",
    menus: {
      ice_americano: { name: "아이스 아메리카노", category: "커피", price: 1800, updatedAt: "2026-06-10" },
      cafe_latte: { name: "카페라떼", category: "라떼", price: 3000, updatedAt: "2026-06-10" },
      lemon_ade: { name: "레몬에이드", category: "에이드", price: 3800, updatedAt: "2026-06-10" },
      peach_iced_tea: { name: "복숭아 아이스티", category: "아이스티", price: 2500, updatedAt: "2026-06-10" }
    }
  },
  front_alley_cafe: {
    name: "학교 앞 개인카페",
    area: "정문 골목",
    locationDetail: "정문에서 가까운 골목 안쪽",
    distanceText: "정문 도보 2분",
    distanceMinutes: 2,
    hours: "09:00-21:00",
    features: ["조용함", "공부 가능"],
    updatedAt: "2026-06-10",
    menus: {
      ice_americano: { name: "아이스 아메리카노", category: "커피", price: 1500, updatedAt: "2026-06-10" },
      cafe_latte: { name: "카페라떼", category: "라떼", price: 3500, updatedAt: "2026-06-10" },
      peach_iced_tea: { name: "복숭아 아이스티", category: "아이스티", price: 2800, updatedAt: "2026-06-10" },
      grapefruit_ade: { name: "자몽에이드", category: "에이드", price: 4000, updatedAt: "2026-06-10" }
    }
  },
  station_cafe: {
    name: "역 앞 개인카페",
    area: "경성대·부경대역",
    locationDetail: "경성대·부경대역 3번 출구 주변",
    distanceText: "역 도보 3분",
    distanceMinutes: 8,
    hours: "10:00-23:00",
    features: ["좌석 많음", "늦게까지 운영"],
    updatedAt: "2026-06-10",
    menus: {
      ice_americano: { name: "아이스 아메리카노", category: "커피", price: 2500, updatedAt: "2026-06-10" },
      cafe_latte: { name: "카페라떼", category: "라떼", price: 3600, updatedAt: "2026-06-10" },
      grapefruit_ade: { name: "자몽에이드", category: "에이드", price: 4500, updatedAt: "2026-06-10" },
      strawberry_smoothie: { name: "딸기 스무디", category: "스무디", price: 4800, updatedAt: "2026-06-10" }
    }
  },
  side_gate_takeout: {
    name: "쪽문 테이크아웃",
    area: "쪽문 근처",
    locationDetail: "쪽문 버스정류장 주변",
    distanceText: "쪽문 도보 1분",
    distanceMinutes: 1,
    hours: "07:30-20:00",
    features: ["빠른 주문", "테이크아웃 전문"],
    updatedAt: "2026-06-10",
    menus: {
      ice_americano: { name: "아이스 아메리카노", category: "커피", price: 1700, updatedAt: "2026-06-10" },
      cafe_latte: { name: "카페라떼", category: "라떼", price: 3300, updatedAt: "2026-06-10" },
      chocolate_latte: { name: "초코라떼", category: "라떼", price: 3200, updatedAt: "2026-06-10" },
      lemon_ade: { name: "레몬에이드", category: "에이드", price: null, updatedAt: "2026-06-10" }
    }
  },
  library_lounge: {
    name: "도서관 라운지카페",
    area: "대연캠퍼스 안쪽",
    locationDetail: "도서관 방향 학내 이동 동선",
    distanceText: "정문 도보 7분",
    distanceMinutes: 7,
    hours: "09:00-19:00",
    features: ["학내 이동 편함", "간단한 디저트"],
    updatedAt: "2026-06-10",
    menus: {
      ice_americano: { name: "아이스 아메리카노", category: "커피", price: null, updatedAt: "2026-06-10" },
      peach_iced_tea: { name: "복숭아 아이스티", category: "아이스티", price: 3000, updatedAt: "2026-06-10" },
      plain_smoothie: { name: "요거트 스무디", category: "스무디", price: 4500, updatedAt: "2026-06-10" },
      bottled_water: { name: "생수", category: "기타 음료", price: 1000, updatedAt: "2026-06-10" }
    }
  }
};

const state = {
  cafes: [],
  selectedCategory: "커피",
  selectedDrink: "아이스 아메리카노",
  selectedCafeId: "",
  search: "",
  dataSource: "sample",
  auth: null,
  isAdmin: false,
  adminTab: "cafes",
  reports: {},
  stream: null,
  streamReloadTimer: null
};

const el = {};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  collectElements();
  bindEvents();
  state.auth = loadSavedAuth();
  await loadCafeData();
  await restoreAdminSession();
  renderAll();
}

function collectElements() {
  Object.assign(el, {
    statusStrip: document.getElementById("statusStrip"),
    categoryTabs: document.getElementById("categoryTabs"),
    drinkGrid: document.getElementById("drinkGrid"),
    drinkSearch: document.getElementById("drinkSearch"),
    rankingHeader: document.getElementById("rankingHeader"),
    rankingList: document.getElementById("rankingList"),
    detailSection: document.getElementById("detailSection"),
    reportSection: document.getElementById("reportSection"),
    reportForm: document.getElementById("reportForm"),
    reportCafe: document.getElementById("reportCafe"),
    reportDrink: document.getElementById("reportDrink"),
    reportCurrentPrice: document.getElementById("reportCurrentPrice"),
    reportNewPrice: document.getElementById("reportNewPrice"),
    reportNote: document.getElementById("reportNote"),
    reporterName: document.getElementById("reporterName"),
    adminSection: document.getElementById("adminSection"),
    adminLoginForm: document.getElementById("adminLoginForm"),
    adminDashboard: document.getElementById("adminDashboard"),
    adminUserLabel: document.getElementById("adminUserLabel"),
    adminCafePane: document.getElementById("adminCafePane"),
    adminReportPane: document.getElementById("adminReportPane"),
    adminCafeList: document.getElementById("adminCafeList"),
    adminReportList: document.getElementById("adminReportList"),
    cafeForm: document.getElementById("cafeForm"),
    editingCafeId: document.getElementById("editingCafeId"),
    cafeName: document.getElementById("cafeName"),
    cafeArea: document.getElementById("cafeArea"),
    cafeLocation: document.getElementById("cafeLocation"),
    cafeDistanceText: document.getElementById("cafeDistanceText"),
    cafeDistanceMinutes: document.getElementById("cafeDistanceMinutes"),
    cafeHours: document.getElementById("cafeHours"),
    cafeUpdatedAt: document.getElementById("cafeUpdatedAt"),
    cafeFeatures: document.getElementById("cafeFeatures"),
    menuRows: document.getElementById("menuRows"),
    toast: document.getElementById("toast")
  });
}

function bindEvents() {
  document.addEventListener("click", handleDocumentClick);

  el.drinkSearch.addEventListener("input", () => {
    state.search = el.drinkSearch.value.trim();
    renderDrinks();
    renderRanking();
  });

  el.reportCafe.addEventListener("change", () => {
    renderReportDrinkOptions();
    updateReportCurrentPrice();
  });

  el.reportDrink.addEventListener("change", updateReportCurrentPrice);
  el.reportForm.addEventListener("submit", handleReportSubmit);
  el.adminLoginForm.addEventListener("submit", handleAdminLogin);
  el.cafeForm.addEventListener("submit", handleCafeSave);
}

function handleDocumentClick(event) {
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const action = actionButton.dataset.action;
    if (action === "home") return goHome();
    if (action === "open-report") return openReportFromSelection();
    if (action === "close-report") return closeReport();
    if (action === "open-admin") return openAdmin();
    if (action === "close-admin") return closeAdmin();
    if (action === "admin-logout") return adminLogout();
    if (action === "new-cafe") return editCafe("");
    if (action === "add-menu-row") return addMenuRow();
    if (action === "remove-menu-row") return removeMenuRow(actionButton);
    if (action === "delete-cafe") return deleteCurrentCafe();
    if (action === "approve-report") return approveReport(actionButton.dataset.reportId);
    if (action === "reject-report") return rejectReport(actionButton.dataset.reportId);
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.selectedCategory = categoryButton.dataset.category;
    state.search = "";
    el.drinkSearch.value = "";
    renderCategories();
    renderDrinks();
    renderRanking();
    return;
  }

  const drinkButton = event.target.closest("[data-drink]");
  if (drinkButton) {
    state.selectedDrink = drinkButton.dataset.drink;
    state.selectedCafeId = "";
    renderDrinks();
    renderRanking();
    closeDetail();
    return;
  }

  const rankingCard = event.target.closest("[data-ranking-cafe-id]");
  if (rankingCard) {
    openCafeDetail(rankingCard.dataset.rankingCafeId);
    return;
  }

  const reportFromDetail = event.target.closest("[data-report-cafe-id]");
  if (reportFromDetail) {
    openReport(reportFromDetail.dataset.reportCafeId, reportFromDetail.dataset.reportMenuId || "");
    return;
  }

  const adminTab = event.target.closest("[data-admin-tab]");
  if (adminTab) {
    switchAdminTab(adminTab.dataset.adminTab);
    return;
  }

  const adminCafeButton = event.target.closest("[data-admin-cafe-id]");
  if (adminCafeButton) {
    editCafe(adminCafeButton.dataset.adminCafeId);
  }
}

async function loadCafeData() {
  if (!hasFirebaseConfig()) {
    state.cafes = normalizeCafes(SAMPLE_CAFES);
    state.dataSource = "sample";
    return;
  }

  try {
    const data = await dbGet("cafes");
    state.cafes = normalizeCafes(data || SAMPLE_CAFES);
    state.dataSource = data ? "firebase" : "firebase-empty";
    connectCafeStream();
  } catch (error) {
    console.error(error);
    state.cafes = normalizeCafes(SAMPLE_CAFES);
    state.dataSource = "sample-error";
    showToast("Firebase 데이터를 불러오지 못해 예시 데이터로 표시합니다.");
  }
}

async function reloadCafesOnly() {
  if (!hasFirebaseConfig()) return;

  try {
    const data = await dbGet("cafes");
    state.cafes = normalizeCafes(data || SAMPLE_CAFES);
    state.dataSource = data ? "firebase" : "firebase-empty";
    renderAll();
  } catch (error) {
    console.error(error);
  }
}

function connectCafeStream() {
  if (!window.EventSource || state.stream || !hasFirebaseConfig()) return;

  try {
    const stream = new EventSource(firebaseUrl("cafes"));
    stream.addEventListener("put", handleStreamEvent);
    stream.addEventListener("patch", handleStreamEvent);
    stream.addEventListener("cancel", () => {
      state.dataSource = "sample-error";
      renderStatus();
    });
    state.stream = stream;
  } catch (error) {
    console.warn("Realtime stream unavailable", error);
  }
}

function handleStreamEvent(event) {
  try {
    const payload = JSON.parse(event.data || "{}");
    if (payload.path === "/" && payload.data) {
      state.cafes = normalizeCafes(payload.data);
      state.dataSource = "firebase";
      renderAll();
      return;
    }
  } catch (error) {
    console.warn("Stream parse failed", error);
  }

  clearTimeout(state.streamReloadTimer);
  state.streamReloadTimer = setTimeout(reloadCafesOnly, 300);
}

function renderAll() {
  ensureSelection();
  renderStatus();
  renderCategories();
  renderDrinks();
  renderRanking();
  renderDetail();
  renderReportOptions();
  renderAdminState();
}

function renderStatus() {
  const cafeCount = state.cafes.length;
  const menuCount = flattenMenus().length;
  const pricedCount = flattenMenus().filter((item) => isKnownPrice(item.price)).length;
  const sourceLabel = getSourceLabel();

  el.statusStrip.innerHTML = [
    statusPill(cafeCount, "등록 카페"),
    statusPill(menuCount, "등록 메뉴"),
    statusPill(pricedCount, sourceLabel)
  ].join("");
}

function statusPill(value, label) {
  return `
    <div class="status-pill">
      <strong>${escapeHtml(String(value))}</strong>
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function getSourceLabel() {
  if (state.dataSource === "firebase") return "Firebase 실시간";
  if (state.dataSource === "firebase-empty") return "DB 비어 있음";
  if (state.dataSource === "sample-error") return "예시 데이터";
  return "예시 데이터";
}

function renderCategories() {
  const categories = getAvailableCategories();
  el.categoryTabs.innerHTML = categories
    .map((category) => {
      const active = category === state.selectedCategory ? "active" : "";
      return `<button class="tab-button ${active}" type="button" role="tab" data-category="${escapeAttr(category)}">${escapeHtml(category)}</button>`;
    })
    .join("");
}

function renderDrinks() {
  const drinks = getVisibleDrinks();
  if (drinks.length && !drinks.includes(state.selectedDrink)) {
    state.selectedDrink = drinks[0];
  }

  if (!drinks.length) {
    state.selectedDrink = "";
    el.drinkGrid.innerHTML = `<div class="empty-state">검색한 음료가 없습니다.</div>`;
    return;
  }

  el.drinkGrid.innerHTML = drinks
    .map((drink) => {
      const rows = getRankingsForDrink(drink);
      const minPrice = rows.filter((row) => isKnownPrice(row.price)).map((row) => row.price).sort((a, b) => a - b)[0];
      const active = drink === state.selectedDrink ? "active" : "";
      const meta = isKnownPrice(minPrice) ? `${rows.length}곳 · 최저 ${formatPrice(minPrice)}` : `${rows.length}곳 · 가격 확인 필요`;
      return `
        <button class="drink-button ${active}" type="button" data-drink="${escapeAttr(drink)}">
          ${escapeHtml(drink)}
          <small>${escapeHtml(meta)}</small>
        </button>
      `;
    })
    .join("");
}

function renderRanking() {
  const drink = state.selectedDrink;
  if (!drink) {
    el.rankingHeader.innerHTML = `
      <div>
        <p class="eyebrow">최저가 랭킹</p>
        <h2>음료를 선택해 주세요</h2>
        <p>검색어를 지우거나 다른 카테고리를 선택하면 음료 목록이 다시 표시됩니다.</p>
      </div>
    `;
    el.rankingList.innerHTML = `<div class="empty-state">표시할 랭킹이 없습니다.</div>`;
    return;
  }

  const rows = getRankingsForDrink(drink);
  const knownRows = rows.filter((row) => isKnownPrice(row.price));
  const best = knownRows[0];

  el.rankingHeader.innerHTML = `
    <div>
      <p class="eyebrow">최저가 랭킹</p>
      <h2>${escapeHtml(drink)} 최저가 랭킹</h2>
      <p>가격이 같으면 학교에서 가까운 카페를 먼저 보여줍니다.</p>
    </div>
    <div class="ranking-summary">
      <span class="mini-chip">${escapeHtml(String(rows.length))}곳 비교</span>
      <span class="mini-chip">${best ? `최저 ${escapeHtml(formatPrice(best.price))}` : "가격 확인 필요"}</span>
    </div>
  `;

  if (!rows.length) {
    el.rankingList.innerHTML = `<div class="empty-state">아직 이 음료를 판매하는 카페 정보가 없습니다.</div>`;
    return;
  }

  el.rankingList.innerHTML = rows.map(renderRankingCard).join("");
}

function renderRankingCard(row, index) {
  const isUnknown = !isKnownPrice(row.price);
  const rankLabel = isUnknown ? "확인" : `${index + 1}위`;
  const priceHtml = isUnknown
    ? `<strong class="unknown">가격 정보 확인 필요</strong>`
    : `<strong>${escapeHtml(formatPrice(row.price))}</strong>`;
  const features = row.cafe.features.slice(0, 3).map((feature) => `<span class="tag">${escapeHtml(feature)}</span>`).join("");

  return `
    <button class="ranking-card" type="button" data-ranking-cafe-id="${escapeAttr(row.cafe.id)}">
      <span class="rank-badge ${isUnknown ? "needs-check" : ""}">${escapeHtml(rankLabel)}</span>
      <span class="ranking-main">
        <strong>${escapeHtml(row.cafe.name)}</strong>
        <span>${escapeHtml(row.cafe.distanceText)} · ${escapeHtml(row.cafe.area || "위치 확인 필요")}</span>
        <span class="tag-row">${features}</span>
      </span>
      <span class="price-block">
        ${priceHtml}
        <span>최근 수정 ${escapeHtml(formatDate(row.menu.updatedAt || row.cafe.updatedAt))}</span>
      </span>
    </button>
  `;
}

function openCafeDetail(cafeId) {
  state.selectedCafeId = cafeId;
  renderDetail();
  el.detailSection.classList.remove("hidden");
  el.detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeDetail() {
  state.selectedCafeId = "";
  el.detailSection.classList.add("hidden");
}

function renderDetail() {
  if (!state.selectedCafeId) {
    el.detailSection.classList.add("hidden");
    el.detailSection.innerHTML = "";
    return;
  }

  const cafe = findCafe(state.selectedCafeId);
  if (!cafe) {
    closeDetail();
    return;
  }

  const menus = Object.entries(cafe.menus)
    .map(([menuId, menu]) => ({ menuId, ...menu }))
    .sort((a, b) => CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category) || a.name.localeCompare(b.name, "ko"));

  const reportTarget = menus.find((menu) => menu.name === state.selectedDrink) || menus[0];
  const menuRows = menus
    .map((menu) => `
      <tr>
        <td>${escapeHtml(menu.category)}</td>
        <td>${escapeHtml(menu.name)}</td>
        <td>${escapeHtml(formatPrice(menu.price))}</td>
        <td>${escapeHtml(formatDate(menu.updatedAt))}</td>
      </tr>
    `)
    .join("");

  el.detailSection.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow">카페 상세</p>
        <h2>${escapeHtml(cafe.name)}</h2>
      </div>
      <button class="primary-button" type="button" data-report-cafe-id="${escapeAttr(cafe.id)}" data-report-menu-id="${escapeAttr(reportTarget.menuId)}">
        가격 제보
      </button>
    </div>
    <div class="detail-grid">
      <div class="info-list">
        ${infoRow("위치", cafe.locationDetail || cafe.area || "확인 필요")}
        ${infoRow("학교 기준 거리", cafe.distanceText || "확인 필요")}
        ${infoRow("영업시간", cafe.hours || "확인 필요")}
        ${infoRow("특징", cafe.features.join(", ") || "확인 필요")}
        ${infoRow("최근 수정", formatDate(cafe.updatedAt))}
      </div>
      <div>
        <table class="menu-table">
          <thead>
            <tr>
              <th>카테고리</th>
              <th>음료명</th>
              <th>가격</th>
              <th>수정일</th>
            </tr>
          </thead>
          <tbody>${menuRows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function infoRow(label, value) {
  return `
    <div class="info-row">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function openReportFromSelection() {
  const firstRanking = getRankingsForDrink(state.selectedDrink)[0];
  if (firstRanking) {
    openReport(firstRanking.cafe.id, firstRanking.menuId);
  } else {
    openReport("", "");
  }
}

function openReport(cafeId, menuId) {
  el.adminSection.classList.add("hidden");
  el.reportSection.classList.remove("hidden");
  renderReportOptions();

  if (cafeId) {
    el.reportCafe.value = cafeId;
    renderReportDrinkOptions();
  }
  if (menuId) {
    el.reportDrink.value = menuId;
  }

  updateReportCurrentPrice();
  el.reportSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeReport() {
  el.reportSection.classList.add("hidden");
}

function renderReportOptions() {
  if (!el.reportSection || el.reportSection.classList.contains("hidden")) return;

  const previousCafe = el.reportCafe.value;
  el.reportCafe.innerHTML = state.cafes
    .map((cafe) => `<option value="${escapeAttr(cafe.id)}">${escapeHtml(cafe.name)}</option>`)
    .join("");

  const fallbackCafeId = state.cafes[0] ? state.cafes[0].id : "";
  el.reportCafe.value = findCafe(previousCafe) ? previousCafe : fallbackCafeId;
  renderReportDrinkOptions();
  updateReportCurrentPrice();
}

function renderReportDrinkOptions() {
  const cafe = findCafe(el.reportCafe.value);
  if (!cafe) {
    el.reportDrink.innerHTML = "";
    return;
  }

  const previousDrink = el.reportDrink.value;
  const options = Object.entries(cafe.menus)
    .map(([menuId, menu]) => `<option value="${escapeAttr(menuId)}">${escapeHtml(menu.name)}</option>`)
    .join("");

  el.reportDrink.innerHTML = options;
  if (cafe.menus[previousDrink]) {
    el.reportDrink.value = previousDrink;
  }
}

function updateReportCurrentPrice() {
  const cafe = findCafe(el.reportCafe.value);
  const menu = cafe ? cafe.menus[el.reportDrink.value] : null;
  el.reportCurrentPrice.value = menu ? formatPrice(menu.price) : "확인 필요";
}

async function handleReportSubmit(event) {
  event.preventDefault();

  const cafe = findCafe(el.reportCafe.value);
  const menuId = el.reportDrink.value;
  const menu = cafe ? cafe.menus[menuId] : null;

  if (!cafe || !menu) {
    showToast("카페와 음료를 다시 선택해 주세요.");
    return;
  }

  if (!hasFirebaseConfig()) {
    showToast("Firebase 설정을 입력한 뒤 제보를 저장할 수 있습니다.");
    return;
  }

  const newPrice = Number(el.reportNewPrice.value);
  if (!Number.isFinite(newPrice) || newPrice < 0 || newPrice > 20000) {
    showToast("새로운 가격을 0원부터 20,000원 사이로 입력해 주세요.");
    return;
  }

  const report = {
    cafeId: cafe.id,
    cafeName: cafe.name,
    menuId,
    drinkName: menu.name,
    newPrice,
    note: el.reportNote.value.trim(),
    reporter: el.reporterName.value.trim(),
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (isKnownPrice(menu.price)) {
    report.currentPrice = menu.price;
  }

  try {
    await dbPut(`reports/${makeId("report")}`, compactObject(report));
    el.reportForm.reset();
    renderReportOptions();
    closeReport();
    showToast("제보가 저장되었습니다. 관리자가 확인한 뒤 반영합니다.");
  } catch (error) {
    console.error(error);
    showToast("제보 저장에 실패했습니다. Firebase 규칙을 확인해 주세요.");
  }
}

function openAdmin() {
  el.reportSection.classList.add("hidden");
  el.adminSection.classList.remove("hidden");
  renderAdminState();
  el.adminSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeAdmin() {
  el.adminSection.classList.add("hidden");
}

async function restoreAdminSession() {
  if (!state.auth || !hasFirebaseConfig()) {
    state.isAdmin = false;
    return;
  }

  try {
    const token = await getFreshIdToken();
    const adminFlag = await dbGet(`admins/${state.auth.localId}`, token);
    state.isAdmin = adminFlag === true;
    if (state.isAdmin) {
      await loadReports();
    }
  } catch (error) {
    console.warn("Admin session restore failed", error);
    clearSavedAuth();
    state.auth = null;
    state.isAdmin = false;
  }
}

function renderAdminState() {
  if (!el.adminSection || el.adminSection.classList.contains("hidden")) return;

  const canUseFirebase = hasFirebaseConfig();
  el.adminLoginForm.classList.toggle("hidden", state.isAdmin);
  el.adminDashboard.classList.toggle("hidden", !state.isAdmin);

  if (!canUseFirebase) {
    el.adminLoginForm.querySelector(".helper-text").textContent = "firebase-config.js에 웹 앱 설정을 넣으면 관리자 로그인을 사용할 수 있습니다.";
  }

  if (!state.isAdmin) return;

  el.adminUserLabel.textContent = `${state.auth.email} 로그인 중`;
  renderAdminTabs();
  renderAdminCafes();
  renderAdminReports();
}

function renderAdminTabs() {
  document.querySelectorAll("[data-admin-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminTab === state.adminTab);
  });
  el.adminCafePane.classList.toggle("hidden", state.adminTab !== "cafes");
  el.adminReportPane.classList.toggle("hidden", state.adminTab !== "reports");
}

function switchAdminTab(tab) {
  state.adminTab = tab;
  if (tab === "reports") {
    loadReports().then(renderAdminState).catch((error) => {
      console.error(error);
      showToast("제보 목록을 불러오지 못했습니다.");
    });
  } else {
    renderAdminState();
  }
}

async function handleAdminLogin(event) {
  event.preventDefault();

  if (!hasFirebaseConfig()) {
    showToast("먼저 firebase-config.js에 Firebase 웹 앱 설정을 입력해 주세요.");
    return;
  }

  const email = document.getElementById("adminEmail").value.trim();
  const password = document.getElementById("adminPassword").value;

  try {
    const auth = await signInWithPassword(email, password);
    state.auth = auth;
    saveAuth(auth);
    const adminFlag = await dbGet(`admins/${auth.localId}`, auth.idToken);
    if (adminFlag !== true) {
      adminLogout();
      showToast("로그인 계정에 관리자 권한이 없습니다.");
      return;
    }

    state.isAdmin = true;
    await loadReports();
    el.adminLoginForm.reset();
    renderAdminState();
    showToast("관리자로 로그인했습니다.");
  } catch (error) {
    console.error(error);
    showToast(getFirebaseErrorMessage(error));
  }
}

function adminLogout() {
  clearSavedAuth();
  state.auth = null;
  state.isAdmin = false;
  state.reports = {};
  renderAdminState();
  showToast("로그아웃했습니다.");
}

function renderAdminCafes() {
  const editingId = el.editingCafeId.value || (state.cafes[0] ? state.cafes[0].id : "");

  if (!el.editingCafeId.value && editingId) {
    editCafe(editingId, false);
  }

  el.adminCafeList.innerHTML = state.cafes
    .map((cafe) => {
      const active = cafe.id === editingId ? "active" : "";
      return `
        <button class="admin-cafe-button ${active}" type="button" data-admin-cafe-id="${escapeAttr(cafe.id)}">
          <strong>${escapeHtml(cafe.name)}</strong><br>
          <small>${escapeHtml(cafe.distanceText)}</small>
        </button>
      `;
    })
    .join("") || `<div class="empty-state">등록된 카페가 없습니다.</div>`;
}

function editCafe(cafeId, shouldRenderList = true) {
  const cafe = cafeId ? findCafe(cafeId) : null;
  el.editingCafeId.value = cafe ? cafe.id : "";
  el.cafeName.value = cafe ? cafe.name : "";
  el.cafeArea.value = cafe ? cafe.area : "";
  el.cafeLocation.value = cafe ? cafe.locationDetail : "";
  el.cafeDistanceText.value = cafe ? cafe.distanceText : "";
  el.cafeDistanceMinutes.value = cafe ? cafe.distanceMinutes : 0;
  el.cafeHours.value = cafe ? cafe.hours : "";
  el.cafeUpdatedAt.value = cafe ? normalizeDateInput(cafe.updatedAt) : todayInputValue();
  el.cafeFeatures.value = cafe ? cafe.features.join(", ") : "";
  el.menuRows.innerHTML = "";

  const menus = cafe ? Object.entries(cafe.menus) : [];
  if (menus.length) {
    menus.forEach(([menuId, menu]) => addMenuRow(menuId, menu));
  } else {
    addMenuRow("", { name: "", category: state.selectedCategory, price: "", updatedAt: todayInputValue() });
  }

  if (shouldRenderList) {
    renderAdminCafes();
  }
}

function addMenuRow(menuId = "", menu = {}) {
  const row = document.createElement("div");
  row.className = "menu-row";
  row.dataset.menuId = menuId || makeId("menu");

  const categoryOptions = CATEGORIES
    .map((category) => `<option value="${escapeAttr(category)}" ${category === menu.category ? "selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");

  row.innerHTML = `
    <label>
      메뉴명
      <input class="menu-name-input" type="text" maxlength="50" value="${escapeAttr(menu.name || "")}" required>
    </label>
    <label>
      카테고리
      <select class="menu-category-input">${categoryOptions}</select>
    </label>
    <label>
      가격
      <input class="menu-price-input" type="number" min="0" max="20000" step="100" value="${isKnownPrice(menu.price) ? escapeAttr(String(menu.price)) : ""}" placeholder="확인 필요">
    </label>
    <label>
      수정일
      <input class="menu-date-input" type="date" value="${escapeAttr(normalizeDateInput(menu.updatedAt) || todayInputValue())}" required>
    </label>
    <button class="remove-menu-button" type="button" data-action="remove-menu-row">삭제</button>
  `;
  el.menuRows.appendChild(row);
}

function removeMenuRow(button) {
  const rows = [...el.menuRows.querySelectorAll(".menu-row")];
  if (rows.length <= 1) {
    showToast("메뉴는 최소 1개가 필요합니다.");
    return;
  }
  button.closest(".menu-row").remove();
}

async function handleCafeSave(event) {
  event.preventDefault();

  if (!state.isAdmin) {
    showToast("관리자 로그인 후 저장할 수 있습니다.");
    return;
  }

  const cafeId = el.editingCafeId.value || makeId("cafe");
  const cafe = {
    name: el.cafeName.value.trim(),
    area: el.cafeArea.value.trim(),
    locationDetail: el.cafeLocation.value.trim(),
    distanceText: el.cafeDistanceText.value.trim(),
    distanceMinutes: Number(el.cafeDistanceMinutes.value),
    hours: el.cafeHours.value.trim() || "확인 필요",
    features: parseFeatures(el.cafeFeatures.value),
    updatedAt: el.cafeUpdatedAt.value || todayInputValue(),
    menus: readMenuRows()
  };

  if (!cafe.name || !cafe.distanceText || !Number.isFinite(cafe.distanceMinutes)) {
    showToast("카페명, 거리 표시, 거리 분을 확인해 주세요.");
    return;
  }

  if (!Object.keys(cafe.menus).length) {
    showToast("메뉴를 1개 이상 입력해 주세요.");
    return;
  }

  try {
    const token = await getFreshIdToken();
    await dbPut(`cafes/${cafeId}`, cafe, token);
    await reloadCafesOnly();
    editCafe(cafeId);
    showToast("카페 정보가 저장되었습니다.");
  } catch (error) {
    console.error(error);
    showToast("저장에 실패했습니다. 관리자 권한과 Database Rules를 확인해 주세요.");
  }
}

function readMenuRows() {
  const rows = [...el.menuRows.querySelectorAll(".menu-row")];
  return rows.reduce((menus, row) => {
    const name = row.querySelector(".menu-name-input").value.trim();
    if (!name) return menus;

    const priceValue = row.querySelector(".menu-price-input").value;
    const price = priceValue === "" ? null : Number(priceValue);
    menus[row.dataset.menuId || makeId("menu")] = {
      name,
      category: row.querySelector(".menu-category-input").value,
      price: Number.isFinite(price) ? price : null,
      updatedAt: row.querySelector(".menu-date-input").value || todayInputValue()
    };
    return menus;
  }, {});
}

async function deleteCurrentCafe() {
  const cafeId = el.editingCafeId.value;
  const cafe = findCafe(cafeId);
  if (!cafe) {
    showToast("삭제할 카페를 선택해 주세요.");
    return;
  }

  const ok = window.confirm(`${cafe.name} 정보를 삭제할까요?`);
  if (!ok) return;

  try {
    const token = await getFreshIdToken();
    await dbDelete(`cafes/${cafeId}`, token);
    await reloadCafesOnly();
    editCafe(state.cafes[0] ? state.cafes[0].id : "");
    showToast("카페 정보가 삭제되었습니다.");
  } catch (error) {
    console.error(error);
    showToast("삭제에 실패했습니다.");
  }
}

async function loadReports() {
  if (!state.isAdmin && !state.auth) return;
  const token = await getFreshIdToken();
  state.reports = (await dbGet("reports", token)) || {};
}

function renderAdminReports() {
  const reports = Object.entries(state.reports || {})
    .map(([id, report]) => ({ id, ...report }))
    .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));

  if (!reports.length) {
    el.adminReportList.innerHTML = `<div class="empty-state">아직 들어온 가격 제보가 없습니다.</div>`;
    return;
  }

  el.adminReportList.innerHTML = reports.map(renderAdminReport).join("");
}

function renderAdminReport(report) {
  const statusText = report.status === "approved" ? "반영 완료" : report.status === "rejected" ? "반려" : "대기";
  const actions = report.status === "pending"
    ? `
      <div class="form-actions">
        <button class="plain-button" type="button" data-action="reject-report" data-report-id="${escapeAttr(report.id)}">반려</button>
        <button class="primary-button" type="button" data-action="approve-report" data-report-id="${escapeAttr(report.id)}">반영 후 완료</button>
      </div>
    `
    : "";

  return `
    <article class="report-item">
      <div class="report-item-head">
        <div>
          <strong>${escapeHtml(report.cafeName || "카페명 없음")} · ${escapeHtml(report.drinkName || "음료명 없음")}</strong>
          <p>${escapeHtml(formatPrice(report.currentPrice))} → ${escapeHtml(formatPrice(report.newPrice))} · ${escapeHtml(statusText)}</p>
        </div>
        <span class="mini-chip">${escapeHtml(formatDateTime(report.createdAt))}</span>
      </div>
      <p>${escapeHtml(report.note || "제보 내용 없음")}</p>
      ${actions}
    </article>
  `;
}

async function approveReport(reportId) {
  const report = state.reports[reportId];
  if (!report) return;

  try {
    const token = await getFreshIdToken();
    const today = todayInputValue();
    await dbPatch(`cafes/${report.cafeId}/menus/${report.menuId}`, {
      price: Number(report.newPrice),
      updatedAt: today
    }, token);
    await dbPatch(`cafes/${report.cafeId}`, { updatedAt: today }, token);
    await dbPatch(`reports/${reportId}`, {
      status: "approved",
      reviewedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      reviewerUid: state.auth.localId
    }, token);
    await reloadCafesOnly();
    await loadReports();
    renderAdminState();
    showToast("제보 가격을 반영했습니다.");
  } catch (error) {
    console.error(error);
    showToast("제보 반영에 실패했습니다.");
  }
}

async function rejectReport(reportId) {
  const report = state.reports[reportId];
  if (!report) return;

  try {
    const token = await getFreshIdToken();
    await dbPatch(`reports/${reportId}`, {
      status: "rejected",
      reviewedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      reviewerUid: state.auth.localId
    }, token);
    await loadReports();
    renderAdminState();
    showToast("제보를 반려했습니다.");
  } catch (error) {
    console.error(error);
    showToast("제보 반려에 실패했습니다.");
  }
}

function goHome() {
  closeReport();
  closeAdmin();
  closeDetail();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function ensureSelection() {
  const categories = getAvailableCategories();
  if (!categories.includes(state.selectedCategory)) {
    state.selectedCategory = categories[0] || CATEGORIES[0];
  }

  const drinks = getVisibleDrinks();
  if (drinks.length && !drinks.includes(state.selectedDrink)) {
    state.selectedDrink = drinks[0];
  }
}

function getAvailableCategories() {
  const categoriesInData = new Set(flattenMenus().map((item) => item.category || "기타 음료"));
  const ordered = CATEGORIES.filter((category) => categoriesInData.has(category));
  const extras = [...categoriesInData].filter((category) => !CATEGORIES.includes(category)).sort((a, b) => a.localeCompare(b, "ko"));
  return [...ordered, ...extras];
}

function getVisibleDrinks() {
  const term = normalizeText(state.search);
  const menus = flattenMenus();
  const names = new Map();

  menus.forEach((item) => {
    const matchesCategory = item.category === state.selectedCategory;
    const matchesSearch = term && normalizeText(item.name).includes(term);
    if ((!term && matchesCategory) || matchesSearch) {
      names.set(item.name, item.name);
    }
  });

  return [...names.values()].sort((a, b) => a.localeCompare(b, "ko"));
}

function getRankingsForDrink(drink) {
  const wanted = normalizeText(drink);
  const rows = [];

  state.cafes.forEach((cafe) => {
    Object.entries(cafe.menus).forEach(([menuId, menu]) => {
      if (normalizeText(menu.name) === wanted) {
        rows.push({ cafe, menuId, ...menu });
      }
    });
  });

  return rows.sort((a, b) => {
    const aKnown = isKnownPrice(a.price);
    const bKnown = isKnownPrice(b.price);
    if (aKnown !== bKnown) return aKnown ? -1 : 1;
    if (aKnown && a.price !== b.price) return a.price - b.price;
    return a.cafe.distanceMinutes - b.cafe.distanceMinutes || a.cafe.name.localeCompare(b.cafe.name, "ko");
  });
}

function flattenMenus() {
  return state.cafes.flatMap((cafe) =>
    Object.entries(cafe.menus).map(([menuId, menu]) => ({
      cafe,
      menuId,
      ...menu
    }))
  );
}

function normalizeCafes(data) {
  return Object.entries(data || {})
    .map(([id, raw]) => {
      const menus = normalizeMenus(raw.menus || {});
      const updatedAt = raw.updatedAt || newestMenuDate(menus) || todayInputValue();
      return {
        id,
        name: String(raw.name || "이름 확인 필요"),
        area: String(raw.area || ""),
        locationDetail: String(raw.locationDetail || raw.location || ""),
        distanceText: String(raw.distanceText || raw.distance || "거리 확인 필요"),
        distanceMinutes: Number(raw.distanceMinutes ?? parseDistanceMinutes(raw.distanceText || raw.distance)),
        hours: String(raw.hours || "확인 필요"),
        features: normalizeFeatures(raw.features),
        updatedAt,
        menus
      };
    })
    .sort((a, b) => a.distanceMinutes - b.distanceMinutes || a.name.localeCompare(b.name, "ko"));
}

function normalizeMenus(menus) {
  return Object.entries(menus || {}).reduce((result, [menuId, raw]) => {
    const price = raw.price === null || raw.price === undefined || raw.price === "" ? null : Number(raw.price);
    const name = String(raw.name || "음료명 확인 필요");
    result[menuId] = {
      name,
      category: String(raw.category || guessCategory(name)),
      price: Number.isFinite(price) ? price : null,
      updatedAt: raw.updatedAt || todayInputValue()
    };
    return result;
  }, {});
}

function normalizeFeatures(features) {
  if (Array.isArray(features)) {
    const cleaned = features.map((feature) => String(feature).trim()).filter(Boolean);
    return cleaned.length ? cleaned : ["정보 확인 필요"];
  }
  if (typeof features === "string") {
    return parseFeatures(features);
  }
  return ["정보 확인 필요"];
}

function parseFeatures(value) {
  const features = value
    .split(",")
    .map((feature) => feature.trim())
    .filter(Boolean)
    .slice(0, 8);
  return features.length ? features : ["정보 확인 필요"];
}

function newestMenuDate(menus) {
  return Object.values(menus)
    .map((menu) => menu.updatedAt)
    .filter(Boolean)
    .sort()
    .pop();
}

function findCafe(cafeId) {
  return state.cafes.find((cafe) => cafe.id === cafeId);
}

function hasFirebaseConfig() {
  const config = getFirebaseConfig();
  return Boolean(
    config.apiKey &&
      config.databaseURL &&
      !/여기에|입력|YOUR_|PASTE_/i.test(config.apiKey) &&
      !/여기에|입력|YOUR_|PASTE_/i.test(config.databaseURL)
  );
}

function getFirebaseConfig() {
  const config = window.CAFE_FIREBASE_CONFIG || {};
  return {
    apiKey: String(config.apiKey || "").trim(),
    databaseURL: String(config.databaseURL || "").trim().replace(/\/$/, ""),
    projectId: String(config.projectId || "").trim()
  };
}

function firebaseUrl(path, token = "") {
  const config = getFirebaseConfig();
  const cleanPath = String(path || "").replace(/^\/+|\/+$/g, "");
  const url = `${config.databaseURL}/${cleanPath ? `${cleanPath}.json` : ".json"}`;
  return token ? `${url}?auth=${encodeURIComponent(token)}` : url;
}

async function dbGet(path, token = "") {
  const response = await fetch(firebaseUrl(path, token), {
    method: "GET",
    headers: { Accept: "application/json" }
  });
  return parseFirebaseResponse(response);
}

async function dbPut(path, value, token = "") {
  const response = await fetch(firebaseUrl(path, token), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value)
  });
  return parseFirebaseResponse(response);
}

async function dbPatch(path, value, token = "") {
  const response = await fetch(firebaseUrl(path, token), {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value)
  });
  return parseFirebaseResponse(response);
}

async function dbDelete(path, token = "") {
  const response = await fetch(firebaseUrl(path, token), {
    method: "DELETE"
  });
  return parseFirebaseResponse(response);
}

async function parseFirebaseResponse(response) {
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = data && data.error ? data.error : `Firebase request failed: ${response.status}`;
    throw new Error(message);
  }

  return data;
}

async function signInWithPassword(email, password) {
  const config = getFirebaseConfig();
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(config.apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  });

  const data = await parseFirebaseResponse(response);
  return {
    email: data.email,
    idToken: data.idToken,
    refreshToken: data.refreshToken,
    localId: data.localId,
    expiresAt: Date.now() + Number(data.expiresIn || 3600) * 1000
  };
}

async function refreshAuthToken(refreshToken) {
  const config = getFirebaseConfig();
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken
  });

  const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${encodeURIComponent(config.apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });

  const data = await parseFirebaseResponse(response);
  return {
    idToken: data.id_token,
    refreshToken: data.refresh_token,
    localId: data.user_id,
    expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000
  };
}

async function getFreshIdToken() {
  if (!state.auth) {
    throw new Error("로그인이 필요합니다.");
  }

  if (Date.now() < state.auth.expiresAt - 5 * 60 * 1000) {
    return state.auth.idToken;
  }

  const refreshed = await refreshAuthToken(state.auth.refreshToken);
  state.auth = { ...state.auth, ...refreshed };
  saveAuth(state.auth);
  return state.auth.idToken;
}

function loadSavedAuth() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
    if (!saved || !saved.refreshToken || !saved.localId) return null;
    return saved;
  } catch {
    return null;
  }
}

function saveAuth(auth) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}

function clearSavedAuth() {
  localStorage.removeItem(AUTH_KEY);
}

function compactObject(value) {
  return Object.entries(value).reduce((result, [key, item]) => {
    if (item !== "" && item !== undefined && item !== null) {
      result[key] = item;
    }
    return result;
  }, {});
}

function isKnownPrice(price) {
  return price !== null && price !== undefined && price !== "" && Number.isFinite(Number(price));
}

function formatPrice(price) {
  if (!isKnownPrice(price)) return "가격 확인 필요";
  return `${Number(price).toLocaleString("ko-KR")}원`;
}

function formatDate(value) {
  if (!value) return "확인 필요";
  const datePart = String(value).slice(0, 10);
  const match = datePart.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return String(value);
  return `${Number(match[1])}년 ${Number(match[2])}월 ${Number(match[3])}일`;
}

function formatDateTime(value) {
  if (!value) return "시간 확인 필요";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return formatDate(value);
  return date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function todayInputValue() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function normalizeDateInput(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : "";
}

function parseDistanceMinutes(value) {
  const match = String(value || "").match(/(\d+)/);
  return match ? Number(match[1]) : 99;
}

function guessCategory(name) {
  if (/아메리카노|커피|콜드브루/.test(name)) return "커피";
  if (/라떼|초코/.test(name)) return "라떼";
  if (/에이드/.test(name)) return "에이드";
  if (/아이스티|티/.test(name)) return "아이스티";
  if (/스무디/.test(name)) return "스무디";
  return "기타 음료";
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, "").toLowerCase();
}

function makeId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    el.toast.classList.remove("show");
  }, 3200);
}

function getFirebaseErrorMessage(error) {
  const message = String(error && error.message ? error.message : error);
  if (message.includes("EMAIL_NOT_FOUND") || message.includes("INVALID_PASSWORD") || message.includes("INVALID_LOGIN_CREDENTIALS")) {
    return "관리자 이메일 또는 비밀번호가 올바르지 않습니다.";
  }
  if (message.includes("PERMISSION_DENIED")) {
    return "권한이 없습니다. admins UID와 Database Rules를 확인해 주세요.";
  }
  return "로그인에 실패했습니다. Firebase 설정을 확인해 주세요.";
}
