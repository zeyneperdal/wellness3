

var d = new Date();
var todaysDate = d.getDate();
var target = $('#calendar .week .day .date');

target.each(function () {
  var day = $(this).html();
  if (todaysDate == day) {
    $(this).parent().addClass('today');
  }
  if (todaysDate < day) {
    $(this).parent().addClass('future');
  }
  if (todaysDate > day) {
    $(this).parent().addClass('past');
  }
});

// handle clicks on days

          
$('.day').click(function () {
  if ($(this).hasClass('future')) {
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html("<h2>Naughty, naughty.</h2> <p>You can't look early! Check back on that day to see what I've left for you.</p>");
  } else if ($(this).hasClass('past')) {
    // Message for trying to access past content
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html("<h2>Oh no!</h2> <p>You can't look back! Stay in the present moment.</p>");
  } else {
    // This is for the current day
    var content = $(this).children('.surprise').html();
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html('');
    $('#modal .wrapper .content .box').html(content);
  }
});          
          
          
          
// close modal

$('.close').click(function () {
  var ultimateParent = $(this).parent().parent().parent();
  ultimateParent.addClass('moveOut');
  setTimeout(function () {
    ultimateParent.removeClass('moveOut').removeClass('active');
  }, 250);
});