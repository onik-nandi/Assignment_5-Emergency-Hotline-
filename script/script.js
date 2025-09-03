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
