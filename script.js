const captions = [
    "🌟 Join thousands of traders on Deriv! Explore the platform designed for everyone, from beginners to pros: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #TradingCommunity #Forex #Investment #Beginners #Traders #JoinUs",
    "🚀 Take your trading to the next level with Deriv! Click here to get started: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexTrading #Investing #FinancialFreedom #Deriv",
    "💹 Master the markets with ease. Sign up on Deriv and make informed trades: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Forex #Deriv #InvestSmart #MarketAnalysis",
    "📈 Ready to trade like a pro? Deriv's platform gives you all the tools you need: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingPlatform #Forex #Investment",
    "💰 Trade with confidence on Deriv and watch your investments grow! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #Wealth #FinancialGoals",
    "🌍 Global trading opportunities await you! Sign up on Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalTrading #Forex #Deriv",
    "🚀 Start trading now with Deriv! Experience the future of trading: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingFuture #Forex #Deriv",
    "📊 Analyze, trade, succeed! Begin your trading journey with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingSuccess #Forex #Deriv",
    "💡 Want to master trading? Join Deriv and become a pro! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexMaster #Deriv #TradingTips",
    "📈 Start building your wealth with Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WealthBuilding #Forex #Deriv",
    "💸 Unlock new trading opportunities with Deriv! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingOpportunities #Forex #Deriv",
    "🌟 Empower yourself with Deriv's powerful trading tools: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Empowerment #Forex #Deriv",
    "📊 Learn, trade, and earn! Join Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #LearnToTrade #Forex #Deriv",
    "🚀 Expand your trading knowledge with Deriv! Click here to start: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexLearning #Deriv #TradingPlatform",
    "🌍 Discover a world of trading possibilities with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalMarket #Forex #Deriv",
    "💹 Ready to take on the markets? Start trading with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #MarketReady #Forex #Deriv",
    "💡 Smart trading starts here! Sign up for Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #SmartTrading #Forex #Deriv",
    "📈 Make informed trades with Deriv's advanced analytics: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexAnalytics #Deriv #InvestmentTools",
    "🚀 Reach for the stars with Deriv's seamless trading platform: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ReachForTheStars #Forex #Deriv",
    "💰 Start investing in your future with Deriv today! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #InvestInYourFuture #Forex #Deriv"
];

// Function to display the captions in a list
function loadCaptions() {
    const captionContainer = document.getElementById('captions-list');
    captions.forEach((caption) => {
        let listItem = document.createElement('li');
        listItem.className = 'caption-item'; // Add the class for styling

        let captionText = document.createElement('span');
        captionText.className = 'caption-text'; // Add a class for styling
        captionText.textContent = caption;

        let copyButton = document.createElement('button');
        copyButton.className = 'copy-button'; // Add the class for styling
        copyButton.textContent = "Copy";
        copyButton.onclick = function() {
            copyToClipboard(caption);
        };

        listItem.appendChild(captionText);
        listItem.appendChild(copyButton);
        captionContainer.appendChild(listItem);
    });
}

// Function to copy the caption to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Copied to clipboard!");
}

// Call the function to load captions on page load
window.onload = loadCaptions;
