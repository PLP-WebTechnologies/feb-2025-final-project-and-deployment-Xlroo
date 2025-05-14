// Load likes from localStorage
let likeCount = localStorage.getItem("likeCount") || 0;
document.querySelectorAll("#like-count").forEach(el => el.innerText = likeCount);

function toggleLike() {
  likeCount++;
  localStorage.setItem("likeCount", likeCount);
  document.querySelectorAll("#like-count").forEach(el => el.innerText = likeCount);
}
