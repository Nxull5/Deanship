document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotIcon = document.querySelector('.chatbot-icon');
    const userInput = document.getElementById('user-input');

    function toggleChatbot() {
        if (chatbotContainer.style.display === 'none') {
            chatbotContainer.style.display = 'block';
            chatbotIcon.style.display = 'none';
        } else {
            chatbotContainer.style.display = 'none';
            chatbotIcon.style.display = 'block';
        }
    }

    function closeChatbot() {
        chatbotContainer.style.display = 'none';
        chatbotIcon.style.display = 'block';
    }

    window.toggleChatbot = toggleChatbot;
  

    // Function to append a message to the chat history
    function appendMessage(sender, message) {
        const chatHistory = document.getElementById('chat-history');
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;

    }
// Function to clear the last child of the chat history
    function clearChatHistory() {
        const chatHistory = document.getElementById('chat-history');
        if (chatHistory.lastChild) {
            chatHistory.removeChild(chatHistory.lastChild);
        }
    }
    // Function to process user input and generate bot response
    function processUserInput(userMessage) {
        if (userMessage.trim() === '') {
            chatHistory.removeChild(chatHistory.lastElementChild);
            return;
        }
        
        const botResponse = generateBotResponse(userMessage);
        appendMessage('Bot', botResponse);
    }
    
    // Function to generate bot response based on user input
    function generateBotResponse(userMessage) {
        
        // Check user input for specific keywords or patterns
        if (userMessage.toLowerCase().includes('hello')) {
            return 'Hello there!';
        } else if (userMessage.toLowerCase().includes('how are you')) {
            return 'I am doing well, thank you!';
        } else {
            return 'I did not understand your message.';
        }
    }

// Event listener for user input
userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        e.preventDefault();
        const userMessage = this.value;
        this.value = ''; // Clear input field before processing
        appendMessage('User', userMessage);
        processUserInput(userMessage);
    }
});
});