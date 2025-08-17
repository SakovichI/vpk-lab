const elseBtns = document.querySelectorAll(".faq-content__item-question-btn");

elseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const wrapper = btn.closest(".faq-content__item");
    const answer = wrapper.querySelector(".faq-content__item-answer");

    answer.classList.toggle("active");
    btn.classList.toggle("active");

    if (answer.classList.contains("active")) {
      btn.textContent = "Закрыть ответ";
    } else {
      btn.textContent = "Показать ответ";
    }
  });
});
