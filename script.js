//your code here 



<script>
function countWords() {
  var text = document.getElementById("evaluatedText").value;
  var wordCount = text.trim().split(/\s+/).length;
  document.getElementById("wordCount").textContent = wordCount;
}
</script>
