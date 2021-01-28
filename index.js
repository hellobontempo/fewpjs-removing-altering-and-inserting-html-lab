// Write your code here!
let main = document.querySelector('main#main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'

let content = "YOUR-NAME is the champion"
newHeader.innerHTML = content