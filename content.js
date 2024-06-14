let chatInterval;

function listenChatContainer() {
  const containerSelector =
    '#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary > div > div > div > div > nav > div.flex-col.flex-1.transition-opacity.duration-500.-mr-2.pr-2.overflow-y-auto';
  const chatSelector = '.relative.mt-5.empty\\:mt-0.empty\\:hidden.juice\\:first\\:mt-0.juice\\:last\\:mb-5 ol li';

  const chatContainer = document.querySelector(containerSelector);

  if (chatContainer) {
    console.log('Container encontrado:', chatContainer);
    clearInterval(chatInterval);
    chatInterval = null;

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Buscar chats...');
    searchInput.setAttribute('id', 'chatSearchInput');

    chatContainer.parentElement.insertBefore(searchInput, chatContainer);

    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
      const chatNodes = document.querySelectorAll(chatSelector);

      chatNodes.forEach((chat) => {
        const chatText = chat.textContent.toLowerCase();
        if (chatText.includes(searchTerm)) {
          chat.style.display = '';
        } else {
          chat.style.display = 'none';
        }
      });
    });
  }
}

chatInterval = setInterval(listenChatContainer, 500);
