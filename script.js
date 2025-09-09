let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
let formValidation = () => {
  if (input.value === "") {
    document.getElementById("msg").innerHTML = "failur msg";
  } else {
    document.getElementById("msg").innerHTML = "succes msg";
    acceptData();
  }
};

let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
      <div class="flex justify-between bg-gray-200 p-4 mb-3 rounded-lg">
        <div>
            <p>${data.text}</p>
        </div>
        <span class="space-x-5 "><i class="fa-solid fa-pen-to-square cursor-pointer"></i>
            <i class="fa-solid fa-trash-can cursor-pointer"></i>
        </span>
    </div>       
  `;
  input.value = "";
};
