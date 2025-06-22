let escapeHandler = null;

export function openModal(popupElement) {
  popupElement.classList.add("popup_is-opened");
  escapeHandler = function(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_is-opened');
      if (openedPopup) {
        closeModal(openedPopup);
      }
    }
  };

  document.addEventListener("keydown", escapeHandler);
}

export function closeModal(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  if (escapeHandler) {
    document.removeEventListener("keydown", escapeHandler);
    escapeHandler = null;
  }
}