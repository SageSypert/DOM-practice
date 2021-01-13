$(document).ready(function() {
  $("button#hello").click(function() {
  $("ul").prepend("<li>Good Afternoon!</li>");
  });

  $("button#howareyou").click(function() {
    $("ul").prepend("<li>How are you?</li>");
  });

  $("button#goodbye").click(function() {
  $("ul").prepend("<li>See you later!</li>");
  });
});