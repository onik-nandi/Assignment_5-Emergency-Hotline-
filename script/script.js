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
// all call button function
const callBtns = document.getElementsByClassName("call-btn");
const historyList = document.getElementById("history-list");
const callCost = 20;

for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    // console.log("clicked");
    const card = this.parentNode;
    const moneyToken = parseInt(
      document.getElementById("money-token").innerText
    );
    const now = new Date().toLocaleTimeString();
    if (callCost <= moneyToken) {
      {
        const totalMoney = moneyToken - callCost;
        document.getElementById("money-token").innerText = totalMoney;
      }
      const serviceType =
        card.getElementsByClassName("service-type")[0].innerText;
      const phoneNumber =
        card.getElementsByClassName("phone-number")[0].innerText;
      const serviceName =
        card.getElementsByClassName("service-name")[0].innerText;
      alert("📞 Calling " + serviceType + " " + phoneNumber);

      const newDiv = document.createElement("div");
      newDiv.innerHTML = `  <div class="call-card flex justify-between items-center md:mx-[25px] p-[16px] bg-[#FAFAFA] rounded-lg ">
                  <div>
                    <p class="text-[#111] font-semibold inter-font text-[18px]" >${serviceName}</p>
                    <p class="hind-font text-[18px]">${phoneNumber}</p>
                  </div>
                  <p class="text-[#111] hind-font text-[18px]">${now}</p>
              </div>
      `;
      historyList.prepend(newDiv);
    } else {
      alert(" Insufficient Tokens.Atleast need 20 tokens for call");
    }
  });
}
// history clear
const clearHistory = document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    // console.log("clicked");
    historyList.innerHTML = "";
  });
