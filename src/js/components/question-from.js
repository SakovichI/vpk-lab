import { validateForms } from "../functions/validate-forms.js";

const rules1 = [
  {
    ruleSelector: "[name='Имя']",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: "[type='tel']",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: "[name='Тема']",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните тему!",
      },
    ],
  },
  {
    ruleSelector: "[name='Вопрос']",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите ваш вопрос!",
      },
    ],
  },
  {
    ruleSelector: "[type='checkbox']",
    rules: [
      {
        rule: "required",
        value: true,
      },
    ],
    settings: {
      errorLabelStyle: { display: "none" },
    },
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".question-form", rules1, afterForm);
