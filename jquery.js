// $(function () {
//   $(window).scroll(function() {
//     var value = $(this).scrollTop(); //スクロールの値を取得
//     $('#scrollValue').text(value);
//   });
// });

// $(function () {
//   var top = $('#box1').offset().top; //初期値を取得。【offset】最初の要素の、ドキュメント上での表示位置を返す。
//   $(window).scroll(function() {
//     var value = $(this).scrollTop(); //スクロールの値を取得
//     $('#scrollValue').text(value); //スクロールの値を表示
//     $('#box1').css('top',top + value / 2);
//     $('#box2').css('top',top + value / 4);
//     $('#box3').css('top',top + value / 6);
//     $('#box4').css('top',top + value / 8);
//   });
// });


// $(function() {
//   var pos1 = $('#box1').offset(); //box1の初期値取得
//   var pos2 = $('#box2').offset(); //box2の初期値取得
//   var pos3 = $('#box3').offset(); //box3の初期値取得
//   var pos4 = $('#box4').offset(); //box4の初期値取得
//
//   $(window).scroll(function () {
//     var value = $(this).scrollTop(); //スクロールの値を取得
//     $('#scrollValue').text(value);
//     $('#box1').css('top', pos1.top + value / 2);
//     $('#box1').css('left', pos1.left + value / 8);
//     $('#box2').css('top', pos2.top + value / 4);
//     $('#box2').css('left', pos2.left + value / 6);
//     $('#box3').css('top', pos3.top + value / 6);
//     $('#box3').css('left', pos3.left + value / 4);
//     $('#box4').css('top', pos4.top + value / 8);
//     $('#box4').css('left', pos4.left + value / 2);
//   });
// });


$(function() {
  $(window).scroll(function() {
    var value = $(this).scrollTop(); //スクロールの値を取得
  $('#scrollValue').text(value);
  $('#box1').css('background-position', '0 '+ value +'px');
  if (value > 800) {
    $('#box2').css('background-position', '0 '+ (value - 800) +'px');
  } else {
    $('#box2').css('background-position', '0  0');
  }
  if (value > 1600) {
    $('#box3').css('background-position', '0 '+ (value - 1600) +'px');
  } else {
    $('#box3').css('background-position', '0  0');
  }
  if (value > 2400) {
    $('#box4').css('background-position', '0 '+ (value - 2400) +'px');
  } else {
    $('#box4').css('background-position', '0  0');
  }
  });
});
