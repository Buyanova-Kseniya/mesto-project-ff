// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData, deleteCallback) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = `Фотография ${cardData.name}`;
  cardTitle.textContent = cardData.name;

  // Обработчик клика по кнопке удаления
  deleteButton.addEventListener('click', () => {
    deleteCallback(cardElement);
  });
  
  return cardElement;
}

// @todo: Функция удаления карточки
function handleDeleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
  const newCard = createCard(cardData, handleDeleteCard);
  placesList.append(newCard);
});
