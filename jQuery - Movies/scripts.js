//use eventpreventdefault in the event listener

let unorderList = $('ul')

$('form').on('submit', getValueAndappendDOM)

function getValueAndappendDOM(evt){
    evt.preventDefault()
    const titleText = $('#title').val();
    const ratingNum = $('#rating').val();

    let newLI = $("<li>").text(`${titleText}: Rating ${ratingNum}`)
    unorderList.append(newLI)
}