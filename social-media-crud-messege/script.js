let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
let formValidation = () => {
  if (input.value === "") {
    document.getElementById("msg").innerHTML = "failure msg";
  } else {
    document.getElementById("msg").innerHTML = "";
    acceptData();
  }
};

let data = {};
const acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

const createPost = () => {
  posts.innerHTML += `
      <div class="flex justify-between bg-gray-200 p-4 mb-3 rounded-lg">
        <div>
            <p>${data.text}</p>
        </div>
        <span class="space-x-5 "><i onClick="editPost(this)" class="fa-solid fa-pen-to-square cursor-pointer"></i>
            <i onClick="deletePost(this)" class="fa-solid fa-trash-can cursor-pointer"></i>
        </span>
    </div>       
  `;
  input.value = "";
};

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

const editPost = (e) => {
  input.value = e.parentElement.parentElement.children[0].innerText;
  e.parentElement.parentElement.remove();
  // console.log(e.parentElement.parentElement.children[0].innerText);
};
