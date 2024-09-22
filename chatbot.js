function toggleChatWindow() {
    const chatContainer = document.getElementById('chatbot-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
        inputField.focus();
    } else {
        chatContainer.style.display = 'none';
    }
}

const chatWindowScroll = document.getElementById('chat-window');
const chatWindow = document.getElementById('chat-output');
const inputField = document.getElementById('chat-input');
const sendButton = document.getElementById('send-btn');

function getBotResponse(userInput) {
    // Add your logic to determine the response based on user input
    if (userInput.includes("stress")) {
        return "Feeling stressed? Would you like to try some stress-relief exercises? <a href='self-help.html#stress-management'>Click here</a>.";
    } else if (userInput.includes("anxiety")) {
        return "If you're feeling anxious, try deep breathing exercises. Want more tips? <a href='resources.html'>Click here</a>.";
    } else if (userInput.includes("depression")) {
        return "I'm sorry you're feeling this way. Consider talking to someone. Want some exercises? <a href='therapists.html'>Click here</a>.";
    } else if (userInput.includes("happy")) {
        return "That's great to hear! Keep spreading positivity!";
    } else if (userInput.includes("sad")) {
        return "I'm sorry to hear that. It's okay to feel sad sometimes. Join our forum and share your problem. <a href='forum.html'>Join here</a>.";
    } else {
        return "I'm here for you. What's your mood?<br>Happy, sad, anxiety, depression, stressed.";
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
        botMessage.innerHTML = getBotResponse(userInput);
        chatWindow.appendChild(botMessage);

        chatWindowScroll.scrollTop = chatWindowScroll.scrollHeight;
        inputField.value = '';
    }
});

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});