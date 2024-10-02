const captions = [
    "Caption 1: 🌟 Discover the power of trading with Deriv! Get started today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingJourney #WomenInTrading #Deriv",
    // Add your remaining captions here...
];

const captionsList = document.getElementById('captions-list');

captions.forEach((caption) => {
    const listItem = document.createElement('li');
    listItem.classList.add('caption-item');

    const captionText = document.createElement('span');
    captionText.classList.add('caption-text');
    captionText.textContent = caption;

    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-button');
    copyButton.textContent = 'Copy';

    // Copy to clipboard functionality
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(caption)
            .then(() => {
                alert('Caption copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });

    listItem.appendChild(captionText);
    listItem.appendChild(copyButton);
    captionsList.appendChild(listItem);
});
