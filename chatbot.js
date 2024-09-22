function toggleChatWindow() {
    const chatContainer = document.getElementById('chatbot-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
    } else {
        chatContainer.style.display = 'none';
    }
}

const chatWindow = document.getElementById('chat-output');
const inputField = document.getElementById('chat-input');
const sendButton = document.getElementById('send-btn');

const responses = {
    greeting: "Hello! How can I assist you today?",
    anxiety: "If you're feeling anxious, try deep breathing exercises. Want more tips?",
    depression: "I'm sorry you're feeling this way. Consider talking to someone. Want some exercises?",
    stress: "Feeling stressed? Would you like to try some stress-relief exercises?",
    general: "I'm here for you. Ask me about stress, anxiety, or depression.",
};

function getBotResponse(input) {
    input = input.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
        return responses.greeting;
    } else if (input.includes('anxiety')) {
        return responses.anxiety;
    } else if (input.includes('depression')) {
        return responses.depression;
    } else if (input.includes('stress')) {
        return responses.stress;
    } else {
        return responses.general;
    }
}

sendButton.addEventListener('click', function() {
    const userInput = inputField.value.trim();
    if (userInput !== '') {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = userInput;
        chatWindow.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = getBotResponse(userInput);
        chatWindow.appendChild(botMessage);

        chatWindow.scrollTop = chatWindow.scrollHeight;
        inputField.value = '';
    }
});

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});