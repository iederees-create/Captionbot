const captions = [
    "Caption 1: 🌟 Join thousands of traders on Deriv! Explore the platform designed for everyone, from beginners to pros: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #TradingCommunity #Forex #Investment #Beginners #Traders #JoinUs",
    "Caption 2: 🚀 Take your trading to the next level with Deriv! Click here to get started: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexTrading #Investing #FinancialFreedom #Deriv",
    "Caption 3: 💹 Master the markets with ease. Sign up on Deriv and make informed trades: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Forex #Deriv #InvestSmart #MarketAnalysis",
    "Caption 4: 📈 Ready to trade like a pro? Deriv's platform gives you all the tools you need: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingPlatform #Forex #Investment",
    "Caption 5: 💰 Trade with confidence on Deriv and watch your investments grow! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #Wealth #FinancialGoals",
    "Caption 6: 🌍 Global trading opportunities await you! Sign up on Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalTrading #Forex #Deriv",
    "Caption 7: 🚀 Start trading now with Deriv! Experience the future of trading: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingFuture #Forex #Deriv",
    "Caption 8: 📊 Analyze, trade, succeed! Begin your trading journey with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingSuccess #Forex #Deriv",
    "Caption 9: 💡 Want to master trading? Join Deriv and become a pro! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexMaster #Deriv #TradingTips",
    "Caption 10: 📈 Start building your wealth with Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WealthBuilding #Forex #Deriv",
    "Caption 11: 💸 Unlock new trading opportunities with Deriv! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingOpportunities #Forex #Deriv",
    "Caption 12: 🌟 Empower yourself with Deriv's powerful trading tools: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Empowerment #Forex #Deriv",
    "Caption 13: 📊 Learn, trade, and earn! Join Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #LearnToTrade #Forex #Deriv",
    "Caption 14: 🚀 Expand your trading knowledge with Deriv! Click here to start: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexLearning #Deriv #TradingPlatform",
    "Caption 15: 🌍 Discover a world of trading possibilities with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalMarket #Forex #Deriv",
    "Caption 16: 💹 Ready to take on the markets? Start trading with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #MarketReady #Forex #Deriv",
    "Caption 17: 💡 Smart trading starts here! Sign up for Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #SmartTrading #Forex #Deriv",
    "Caption 18: 📈 Make informed trades with Deriv's advanced analytics: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexAnalytics #Deriv #InvestmentTools",
    "Caption 19: 🚀 Reach for the stars with Deriv's seamless trading platform: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ReachForTheStars #Forex #Deriv",
    "Caption 20: 💰 Start investing in your future with Deriv today! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #InvestInYourFuture #Forex #Deriv"
];

// Function to display the captions in a list
function loadCaptions() {
    const captionContainer = document.getElementById('caption-container');
    captions.forEach((caption, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = caption;

        let copyButton = document.createElement('button');
        copyButton.textContent = "Copy";
        copyButton.onclick = function() {
            copyToClipboard(caption);
        };

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
