$(document).ready(function() {
  $("button#hello").click(function() {
  $("ul#user").prepend("<li>Good Afternoon!</li>");
  $("ul#webpage").prepend("<li>Oh hi, I didn't see you there!</li>");
  });

  $("button#howareyou").click(function() {
    $("ul#user").prepend("<li>I just got here!</li>");
    $("ul#webpage").prepend("<li>Well then, welcome!");
  });

  $("button#goodbye").click(function() {
  $("ul#user").prepend("<li>Already time to go, goodbye!</li>");
  $("ul#webpage").prepend("<li>Ok then, see you later!</li>");
  });
});