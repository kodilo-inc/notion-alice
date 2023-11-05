// Фразы активации навыка
const nameForSkillToLaunchList = ['добавить в мой список', 'добавить в список', 'добавить список'];
const ACTIVATION_PHRASE = 'попроси';

// Диалоги
const HELP_TXT =
  "Через меня можно голосом наполнять списки в Notion.\n" +
  'Чтобы не заходя в навык добавить в список, например, молоко, скажите Алисе: "Попроси добавить в список молоко"\n' +
  "Чтобы сбросить настройки навыка, пришлите мне слово reset с маленькой буквы.\n" +
  'Отправьте "Покажи настройки", чтобы посмотреть сохраненный токен и id-заметки.\n' +
  "Если есть непреодолимые проблемы, напишите мне в телеграм: @novitckas";
const HELP_TXT_DURING_SETTING_UP =
  "Через меня можно голосом наполнять списки в Notion. Но для начала работы меня нужно настроить. Для настройки вам понадобится аккаунт в Notion.\n" +
  "Если есть непреодолимые проблемы, напишите мне в телеграм: @novitckas \n\n" +
  "Готовы начать настройку навыка?";
const INITIAL_WITH_SCREEN_TXT =
  "Через меня можно голосом наполнять списки в Notion. Но для начала работы меня нужно настроить. Готовы начать настройку?";
const INITIAL_WITHOUT_SCREEN_TXT =
  'Через меня можно голосом наполнять списки в Notion. Но для начала работы меня нужно настроить. Чтобы начать настройку, запустите навык на устройстве с клавиатурой. Например, в приложении "Яндекс" на смартфоне.';
const INITIAL_AFTER_RESET_TXT =
  "Сбросила настройки навыка. Начнём настройку заново?";
const HERE_INSTRUCTION_TXT =
  "Я подготовила инструкцию. Настройка займёт 5-10 минут.\n" +
  "\n" +
  "Настройки сохранятся для всех устройств, привязанных к вашему аккаунту Яндекса.\n" +
  "\n" +
  'Чтобы открыть инструкцию, нажмите кнопку "Инструкция"';
const IS_IT_TOKEN_TXT = "Это токен Notion'а?";
const IS_IT_ARTICLE_ID_TXT = "Это id-заметки?";
const TOKEN_SAVED_TXT = "Сохранила токен";
const ARTICLE_ID_SAVED_TXT = "Сохранила id заметки";
const TOKEN_SAVED_SETTING_UP_FINISHED =
  "Сохранила токен Notion'а!\n" +
  "\n" +
  "Навык настроен. Теперь можно пользоваться. Просто скажите, что добавить в список.\n" +
  "\n" +
  'Чтобы добавить в список, не заходя в навык, скажите Алисе: "попроси добавить в список молоко"\n' +
  "\n" +
  'Если захотите сбросить настройки, скажите отправьте слово "reset" (с маленькой буквы).';

const ARTICLE_ID_SAVED_SETTING_UP_FINISHED =
  "Сохранила id заметки!\n" +
  "\n" +
  "Навык настроен. Теперь можно пользоваться. Просто скажите, что добавить в список.\n" +
  "\n" +
  'Чтобы добавить в список, не заходя в навык, скажите Алисе: "попроси добавить в список молоко"\n' +
  "\n" +
  'Если захотите сбросить настройки, скажите отправьте слово "reset" (с маленькой буквы).';

// Кнопки
const YES = "Да";
const NO = "Нет";
const INSTRUCTION = "Инструкция";
const NO_ITS_ID = "Нет, это id заметки";
const NO_ITS_TOKEN = "Нет, это токен Notion'а";

module.exports = {
  HELP_TXT,
  HELP_TXT_DURING_SETTING_UP,
  INITIAL_WITH_SCREEN_TXT,
  INITIAL_WITHOUT_SCREEN_TXT,
  INITIAL_AFTER_RESET_TXT,
  HERE_INSTRUCTION_TXT,
  IS_IT_TOKEN_TXT,
  IS_IT_ARTICLE_ID_TXT,
  TOKEN_SAVED_TXT,
  ARTICLE_ID_SAVED_TXT,
  TOKEN_SAVED_SETTING_UP_FINISHED,
  ARTICLE_ID_SAVED_SETTING_UP_FINISHED,
  YES,
  NO,
  INSTRUCTION,
  NO_ITS_ID,
  NO_ITS_TOKEN,
  ACTIVATION_PHRASE,
  nameForSkillToStartList: nameForSkillToLaunchList
};
