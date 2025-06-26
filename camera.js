
window.addEventListener("DOMContentLoaded", () => {
  const markerURL = localStorage.getItem("ar_marker");
  const modelURL = localStorage.getItem("ar_model");
  const audioURL = localStorage.getItem("ar_audio");

  if (!markerURL || !modelURL) {
    alert("لا توجد بطاقة مخزنة!");
    return;
  }

  const marker = document.querySelector("#custom-marker");
  marker.setAttribute("url", markerURL);

  const model = document.querySelector("#ar-model");
  model.setAttribute("gltf-model", modelURL);

  if (audioURL) {
    const audio = document.querySelector("#ar-audio");
    audio.src = audioURL;
    audio.play();
  }
});
