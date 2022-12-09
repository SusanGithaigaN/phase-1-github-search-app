// Get the reference of the form.
var form = document.getElementById("github-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get the search string that the user enters by getting the reference of the element.
    var search = document.getElementById("search").value;
    var userName = search.split('').join('');
    // Empty out previous div contents.
     document.getElementById("user-list").innerHTML = "";
    // Make a fetch call to the the API.
    fetch("https://api.github.com/users/" + search)
        // Convert the result into JSON.
        .then((result) => result.json())
        .then((data) => {
            // Target where the result will be displayed.
            document.getElementById("user-list").innerHTML = `
           <a target= "_blank" href= "https://www.github.com/${userName}"> <img src= "${data.avatar_url}"/></a>
            `
        });
}); 