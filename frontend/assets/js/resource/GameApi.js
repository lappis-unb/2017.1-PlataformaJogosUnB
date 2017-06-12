export const gameListApi = (f) => {

  fetch("/api/list/", {
    "headers": new Headers({
      "Accept": "application/json",
    }),
    "method": "GET",
  }).then( (response) => response.json())
      .then(f)
    .catch( (error) => console.log(error) );

}
