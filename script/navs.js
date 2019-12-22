$(function () {
  $('#category_control')
    .click(function () {
      baseControl('.categorys')
    })
  $('#tag_control')
    .click(function () {
      baseControl('.tagnav')
    })
})

function baseControl (tag) {
  var categorys = $(tag)
  var hidden = $(categorys).hasClass('hidden')

  clear()

  if (hidden) {
    categorys.removeClass('hidden')
    $('body').addClass('stick_element')
    $('.blur_container').addClass('blur')
  }

  function clear () {
    $('.navmodal').addClass('hidden')
    $('body').removeClass('stick_element')
    $('.blur_container').removeClass('blur')
  }
}