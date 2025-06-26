
document.getElementById("save").addEventListener("click", () => {
  const marker = document.getElementById("marker").files[0];
  const model = document.getElementById("model").files[0];
  const audio = document.getElementById("audio").files[0];
  if (!marker || !model || !audio) return alert("يرجى اختيار جميع الملفات.");
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("ar_marker", reader.result);
    const reader2 = new FileReader();
    reader2.onload = () => {
      localStorage.setItem("ar_model", reader2.result);
      const reader3 = new FileReader();
      reader3.onload = () => {
        localStorage.setItem("ar_audio", reader3.result);
        alert("✅ تم حفظ البطاقة!");
      };
      reader3.readAsDataURL(audio);
    };
    reader2.readAsDataURL(model);
  };
  reader.readAsDataURL(marker);
});

document.getElementById("deleteCard").addEventListener("click", () => {
  localStorage.removeItem("ar_marker");
  localStorage.removeItem("ar_model");
  localStorage.removeItem("ar_audio");
  alert("تم حذف البطاقة.");
});
