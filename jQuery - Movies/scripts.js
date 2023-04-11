//use eventpreventdefault in the event listener

let unorderList = $("ul");

$("form").on("submit", getValueAndappendDOM);
$("ul").on("click", "button", deleteMovie);

function getValueAndappendDOM(evt) {
  evt.preventDefault();
  const titleText = $("#title").val();
  const ratingNum = $("#rating").val();

  //build the button -> going to need to use event delegation
  const deleteButton = $("<button>", { text: "Delete" });

  let newLI = $("<li>").text(`Title:${titleText} Rating: ${ratingNum}`);
  newLI.append(deleteButton);

  unorderList.append(newLI);
}

function deleteMovie(evt) {
  let movieToDelete = $(evt.currentTarget.parentElement);

  movieToDelete.remove();
}

//sorting
//grab the UL jquery array object
//convert the jQ object into an array
//call sort on the array
//delete the contents of the current UL
//iterate over the array like object and append each element to the dom
