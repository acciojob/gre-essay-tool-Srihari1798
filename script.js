//your code here 
function countWords() {
  var text = document.getElementById("evaluatedText").value;
  if (text.trim() === "") {
    document.getElementById("wordCount").textContent = 0;
  } else {
    var wordCount = text.trim().split(/\s+/).length;
    document.getElementById("wordCount").textContent = wordCount;
  }
}

