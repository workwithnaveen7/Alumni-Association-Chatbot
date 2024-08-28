function chatbotResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes('hello')) {
        return "Hello! How can I assist you today?";
    } else if (userInput.includes('help')) {
        return "I can help with information about events, membership, and alumni services. What do you need assistance with?";
    } else if (userInput.includes('events')) {
        return "We have various upcoming events listed on our <a href='https://sites.google.com/view/eec-alumni-association/events-and-news' target='_blank'>Events</a> page. You can find detailed information there.";
    } else if (userInput.includes('forum')) {
        return "For information about forum, please visit our <a href='https://sites.google.com/view/eec-alumni-association/student-alumni-interaction?authuser=0' target='_blank'>Forum</a> page.";
    } else if (userInput.includes('contact')) {
        return "You can reach us at <a href='https://sites.google.com/view/eec-alumni-association/contact-us?authuser=0'>Contact Us</a> for any inquiries or support.";
    } else if (userInput.includes('profile')) {
        return "You want to visit profile of which domain alumni??";
    } else if (userInput.includes('cybersecurity')) {
        return "To view our cybersecurity alumni go to the <a href='https://sites.google.com/view/eec-alumni-association/alumni-directory/region/local-in/cyber-security?authuser=0' target='_blank'>Cybersecurity</a> section.";
    } else if (userInput.includes('about')) {
        return "Our alumni association connects former students and provides opportunities for networking and professional growth.";
    } else if (userInput.includes('project')) {
        return "We appreciate your interest! Tell which domain alumni, you want to contact";
    } else if (userInput.includes('job opportunities')) {
        return "We have a dedicated <a href='/jobs' target='_blank'>Job Opportunities</a> page where you can find the latest job postings and career resources.";
    } else if (userInput.includes('alumni directory')) {
        return "Access our alumni directory here <a href='https://sites.google.com/view/eec-alumni-association/alumni-directory?authuser=0' target='_blank'>Alumni Directory</a> page.";
    } else {
        return "I'm not sure about that. Could you please provide more details or ask another question?";
    }
}

function openChat() {
    var popup = document.getElementById("chatPopup");
    popup.classList.toggle("show");
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var botResponse = chatbotResponse(userInput);

    var chatOutput = document.getElementById("chat-output");
    chatOutput.innerHTML += "<p><b>You:</b> " + userInput + "</p>";
    chatOutput.innerHTML += "<p><b>Bot:</b> " + botResponse + "</p>";
    document.getElementById("user-input").value = "";
}
