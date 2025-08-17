//Textarea size

const textarea = document.querySelectorAll("textarea");

textarea.forEach((item) => {
  item.addEventListener("input", () => {
    item.style.height = "auto";
    item.style.height = item.scrollHeight + "px";
  });
});

const fileInput = document.querySelector(".file-upload__input");
const previewContainer = document.querySelector(".file-upload__preview");

if (fileInput) {
  fileInput.addEventListener("change", function (e) {
    previewContainer.innerHTML = "";

    if (this.files.length > 0) {
      Array.from(this.files).forEach((file) => {
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";

        // Рассчитываем размер в MB
        const sizeMB = (file.size / (1024 * 1024)).toFixed(2);

        fileItem.innerHTML = `
            <div class="file-info">
              <span class="file-name">${file.name}</span>
              <span class="file-size">${sizeMB} MB</span>
            </div>
            <span class="file-remove">&times;</span>
          `;

        const removeBtn = fileItem.querySelector(".file-remove");
        removeBtn.addEventListener("click", () => {
          fileItem.remove();
          fileInput.dispatchEvent("change");
        });

        previewContainer.appendChild(fileItem);
      });
    }
  });
}
