document.addEventListener("DOMContentLoaded", function () {
    const captionContainer = document.getElementById('caption-container');
    const captions = [
        "Join thousands of traders on Deriv! Explore the platform designed for everyone, from beginners to pros: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #TradingCommunity #Forex #Investment #Beginners #WomenInTrading #FinancialLiteracy #Empowerment",
        "Unlock your potential in the world of forex trading today! 🚀 Exclusive benefits await. Don't miss out—sign up now with Deriv and get started! 💡 #ForexTrading #Deriv #StartNow",
        "Ready to take control of your financial future? Start trading with Deriv today and access free expert resources to help you succeed. 🌟 Click now! 🔗 #TradingSuccess #JoinDeriv",
        "Time is money! ⏳ Join Deriv today and start trading smarter, not harder. Secure your financial future now! #Forex #Deriv #TradeNow",
        "Over 10,000 traders have joined Deriv this month—become part of a growing success story! 🌟 Click the link and be the next success! #TradingCommunity #Forex #Deriv",
        "I made my first profit within just 2 weeks of starting with Deriv! 🤑 Want to experience the same success? Sign up now! #SuccessStories #Trading #Forex",
        "Thousands are already profiting with Deriv—why wait? 💸 Start today and be part of the winning team! #TradeWithConfidence #JoinTheSuccess #Deriv",
        "Sign up today using my link and receive a FREE trading guide to kickstart your journey! 📚💡 Ready to trade smarter? Start now! #FreeGuide #ForexTrading #Deriv",
        "Want to learn the secrets of successful traders? 🧠💡 Get exclusive tips when you sign up now with Deriv! Click the link to get started! #ForexTips #SignUpBonus #Deriv"
        // Add the rest of your captions here
    ];

    // Displaying a random caption
    const randomIndex = Math.floor(Math.random() * captions.length);
    captionContainer.textContent = captions[randomIndex];
});
