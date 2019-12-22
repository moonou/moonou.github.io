var postitionArr = []

$(function () {
  $('.post_container .headerlink').each(function(i, element) {
    postitionArr.push(getElementTop(element))
  })
  updateUI()
  $(window).on('scroll', updateUI)

  $('.toc_switch').on('click', function () {
    console.log('click')
    var showToc = !$('.toc_container').hasClass('hidden')
    if (showToc) {
      $('.toc_container').addClass('hidden')
    } else {
      // $('.post_container').addClass('fold')
      $('.toc_container').removeClass('hidden')
    }
  })
})

function updateUI () {
  var scroll = $(window).scrollTop()
  scrollIndex = 0
  postitionArr.forEach(function (item, index) {
    if (scroll > item - 20) scrollIndex = index
  })
  $('.toc_container .toc-link').removeClass('active')
  $('.toc_container .toc-link:eq('+scrollIndex+')').addClass('active')

  // switch header
  if (scroll > 100) {
    $('.fixed_head').addClass('show')
  } else {
    $('.fixed_head').removeClass('show')
  }
}

function getElementTop(element){
  var actualTop = element.offsetTop;
  var current = element.offsetParent;

  while (current !== null){
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}