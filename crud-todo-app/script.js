const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const emptyImage = document.getElementById("empty-image");

const emptyImg = () => {
  emptyImage.style.display = taskList.children.length === 0 ? "blcok" : "none";
};

const addTask = (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (!taskText) {
    return;
  }
  // const li = document.getElementById("li");
  const div = document.createElement("div");
  div.innerHTML = `
    <li
        class="flex items-center justify-between bg-[#ad7e964d] mb-3 py-2 px-3 text-white relative transition-shadow duration-75 ease rounded-4xl shadow-[0_0_30px_rgba(0,0,0,0.1)]">
        <input type="checkbox" class="checkbox">
        <span> ${taskText}</span>
        <div class="flex gap-2 ml-3">
          <button class="bg-[#993669a9] border-none rounded-full w-[30px] h-[30px] text-white cursor-pointer transition-all duration-100 ease flex justify-center items-center transform-sc"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="bg-[#d3db88b6] border-none rounded-full w-[30px] h-[30px] text-white cursor-pointer transition-all duration-100 ease flex justify-center items-center transform-sc"><i class="fa-solid fa-trash"></i></button>
        </div>
    </li>
  `;
  taskList.appendChild(div);
  taskInput.value = "";

  emptyImg();
};
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask(e);
  }
});
