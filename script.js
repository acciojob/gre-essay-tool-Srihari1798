//your code here
<textarea id="evaluatedText" oninput="countWords()"></textarea>
<h3 id="wordCount">0</h3>

<script>
function countWords() {
  var text = document.getElementById("evaluatedText").value;
  var wordCount = text.trim().split(/\s+/).length;
  document.getElementById("wordCount").textContent = wordCount;
}
</script>
