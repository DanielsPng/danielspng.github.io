$('.tilt').on('mouseenter', function () {
  animate = false;
}).on('mousemove', mouseMove).on('mouseleave', mouseLeave);

function mouseMove(e) {
  var bRect = this.getBoundingClientRect();
  var mX = e.pageX;
  var mY = e.pageY;
  var pX = Math.floor((mX - bRect.left) / bRect.width * 100);
  var pY = Math.floor((mY - bRect.top) / bRect.height * 100);
  var bgi = 'radial-gradient(' + bRect.width + 'px at ' + pX + '% ' + pY + '%, rgba(255,255,255,.5), rgba(255,255,255,0))';
  var rotX = (pY - 50) / 5;
  var rotY = -(pX - 50) / 5;
  var shd = '0 ' + rotX + 'px ' + Math.abs(rotX) * 5 + 'px rgba(0,0,50,.15), 0 ' + pY / 10 + 'px ' + pY / 5 + 'px rgba(0,0,0,.25)';
  var trs = 'rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';

  $('.tilt').css('background-image', bgi).addClass('hover');
  $('.tilt').css('box-shadow', shd);
  $('.tilt').css('transform', trs);
}

function mouseLeave() {
  $('.tilt').css('background-image', '').removeClass('hover');
  $('.tilt').css('box-shadow', '');
  $('.tilt').css('transform', '');
}