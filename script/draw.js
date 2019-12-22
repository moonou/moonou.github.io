var canvas = document.querySelector('#lines')
  
var width = window.innerWidth
var height = window.innerHeight

window.onload = function () {
  resize()
  paper.setup(canvas)
  draw()
}

window.onresize = function () {
  resize()
}

function resize () {
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width
  canvas.height = height
  paper.view && paper.view.setViewSize(new paper.Size(width, height))
}

function draw () {
  paper.project.clear()
  var stops = [generateColor(), generateColor()]
  generateData().forEach(function (linePoint) {
    var path = new paper.Path()
    path.strokeColor = {
      gradient: {
        stops: stops
      },
      origin: [0, height / 2],
      destination: [width, height /2]
    }
    path.strokeWidth = 3

    linePoint.forEach(function (point) {
      path.add(point)
    })
    path.smooth()
    paper.view.update()
  })

}

function generateData () {
  var arr = []
  var a = width * ( 1 / 5 )
  var startPoint = [0, generateY(height)]

  for (var line = 0; line < 2; line ++) {
    arr[line] = [startPoint]
    for (var i = 2; i <= 5; i++) {
      var b = (i - 1) * a
      var c = Math.random() * a + b
      var y = generateY(height)
      arr[line].push([c, y])
    }
    arr[line].push([width, generateY(height)])
  }

  return arr
}

function generateY (value) {
  var deviation = 100
  return Math.random() * (value -  deviation * 2) + deviation
}

function generateColor () {
  return new paper.Color(Math.random(), Math.random(), Math.random())
}

window.onclick = function () {
  draw()
}