import Axios from "axios";

export function photoList(pageNumber, numberOfImage) {
  return Axios.get(
    `https://picsum.photos/v2/list?page=${pageNumber}&limit=${numberOfImage}`
  )
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
