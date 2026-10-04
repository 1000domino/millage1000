(() => {
  const params = new URLSearchParams(window.location.search);
  const placeId = params.get("place");
  const places = window.EXPLORE_PLACES || {};
  const place = places[placeId];

  const $ = (selector) => document.querySelector(selector);
  const windowElement = $(".explore-window");
  const inspectButton = $("#inspect-button");
  const detailPanel = $("#detail-panel");

  if (!place) {
    windowElement.classList.add("is-error");
    $("#place-title").textContent = "404";
    $("#window-location").textContent = "NOT FOUND";
    $("#place-en").textContent = "UNKNOWN";
    $("#place-time").textContent = "--:--";
    $("#place-status").textContent = "探索場所が見つかりません。";
    document.title = "404｜探索";
    return;
  }

  $("#place-title").textContent = place.title;
  $("#window-location").textContent = place.en;
  $("#place-en").textContent = place.en;
  $("#place-time").textContent = place.time || "--:--";
  $("#place-status").textContent = place.available === false ? "現在、この場所には入れません。" : place.status;
  $("#place-intro").textContent = place.available === false ? "まだ開放されていないようです。" : place.intro;
  $("#place-detail").textContent = place.detail || "これ以上、変わったものは見つかりませんでした。";
  $("#artifact-label").textContent = place.artifact || "ARCHIVE";
  $("#pixel-scene").dataset.visual = place.visual || "book";
  document.title = `${place.title}｜探索｜再び、一千年`;

  if (place.image) {
    const image = $("#place-image");
    image.src = place.image;
    image.alt = `${place.title}で見つかったもの`;
    image.hidden = false;
    $("#pixel-scene").hidden = true;
  }

  if (place.available === false) {
    inspectButton.hidden = true;
    return;
  }

  const storageKey = `mill-age:explored:${placeId}`;
  let visited = false;
  try {
    visited = window.localStorage.getItem(storageKey) === "1";
  } catch (error) {
    // file:// での直接プレビューなど、保存領域が使えない環境でも探索は続行する。
  }
  if (visited) document.body.classList.add("has-visited");

  inspectButton.addEventListener("click", () => {
    const willOpen = detailPanel.hidden;
    detailPanel.hidden = !willOpen;
    inspectButton.setAttribute("aria-expanded", String(willOpen));
    inspectButton.querySelector("span:last-child").textContent = willOpen ? "見つけたものを閉じる <<" : "もう少し調べる >>";

    if (willOpen) {
      try {
        window.localStorage.setItem(storageKey, "1");
      } catch (error) {
        // 保存できない環境では、今回の表示だけを行う。
      }
      detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
})();
