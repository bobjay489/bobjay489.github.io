function generateKey() {
  const keyLength = 16; // Adjust the key length as needed
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';

  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}

document.addEventListener('DOMContentLoaded', () => {
  const generatedKeyElement = document.getElementById('generated-key');
  const generateBtn = document.getElementById('generate-btn');

  generateBtn.addEventListener('click', () => {
    const generatedKey = generateKey();
    generatedKeyElement.textContent = generatedKey;

    // Here you can add logic to store the generated key on the server-side for the current user.
    // For this, you'll need to use a server-side language and database.
  });
});
