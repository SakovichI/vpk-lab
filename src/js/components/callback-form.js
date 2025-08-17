import { validateForms } from "../functions/validate-forms.js";

const rules1 = [
  {
    ruleSelector: "[type='text']",
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
    ruleSelector: "[name='Сообщение']",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите ваше сообщение!",
      },
    ],
  },
  {
    ruleSelector: "[type='email']",
    rules: [
      {
        rule: "email",
        value: true,
        errorMessage: "Введите корректную почту!",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните почту!",
      },
    ],
  },
  {
    ruleSelector: ".file-upload__input",
    rules: [
      {
        rule: "files",
        value: {
          files: {
            extensions: ["pdf", "doc", "docx", "txt"],
            maxSize: 25000,
            minSize: 0,
            types: [
              "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, text/txt",
            ],
          },
        },
        errorMessage:
          "Неверный формат файла, допустимые форматы: pdf, doc, docx, txt, размер файла не должен превышать 25 МБ",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".callback-form", rules1, afterForm);

const rules2 = [
  {
    ruleSelector: "[type='text']",
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
    ruleSelector: "[type='email']",
    rules: [
      {
        rule: "email",
        value: true,
        errorMessage: "Введите корректную почту!",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните почту!",
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

validateForms(".form-classic--callback", rules2, afterForm);

const rules3 = [
  {
    ruleSelector: "[type='text']",
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

validateForms(".contacts-form", rules3, afterForm);
