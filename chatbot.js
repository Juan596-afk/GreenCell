function sendToAI() {
  const userInput = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");
  const userMessage = document.createElement("div");
  userMessage.textContent = "You: " + userInput;
  chatBox.appendChild(userMessage);

  const aiMessage = document.createElement("div");
  aiMessage.textContent = "AI: " + getAIResponse(userInput);
  chatBox.appendChild(aiMessage);

  document.getElementById("userInput").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(input) {
  input = input.toLowerCase();
  if (input.includes("bioenergy")) {
    return "Bioenergy is renewable energy made from organic materials like plants and waste.";
  } else {
    return "Sorry, I can only answer questions about bioenergy.";
  }
}