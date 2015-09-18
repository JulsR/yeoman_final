// JavaScript Document
  $("#getting-started")
  .countdown("2015/09/24", function(event) {
   $(this).text(
      event.strftime('%D days %H:%M:%S')
   );
  });
