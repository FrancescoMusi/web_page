let change_image_button = document.getElementById('change_image')
let image = document.querySelector('img')

const change_image = () => {

  let image_src = image.getAttribute('src')

  if(image_src === 'images/first_image.png') {
    image.setAttribute ('src','images/second_image.png')
  } else {
    image.setAttribute ('src','images/first_image.png')
  }

}


change_image_button.onclick = function() {
	change_image()
}

image.onclick = function() {
	change_image()
}

/*
const fetch  = require('node-fetch')

let request_button = document.getElementById('request_button')
let text_request = document.getElementById()

request_button.onclick = function() {
	fetch('https://api.paninidellospalla.it/info')
	.then(res => {
		document.getElementById('text_request').innerHTML = res.json()
	})
	
}
*/

