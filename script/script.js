// heart count start

const heart = document.getElementsByClassName("fav-heart-c");
for (const heartElement of heart) {
  heartElement.addEventListener("click", function () {
    // console.log("Clicked");
    const heartCounts = parseInt(
      document.getElementById("heart-counts").innerText
    );
    const totalHeartCount = heartCounts + 1;
    document.getElementById("heart-counts").innerText = totalHeartCount;
  });
}
// copy section
const copyBtns = document.getElementsByClassName("copy-btn");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    // console.log("clicked");
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const totalCopyCount = copyCount + 1;
    document.getElementById("copy-count").innerText = totalCopyCount;

    const card = this.parentNode;

    const copyText = card.getElementsByClassName("phone-number")[0].innerText;
    navigator.clipboard.writeText(copyText);
    alert("Number Copied: " + copyText);
  });
}
