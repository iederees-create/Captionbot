const captions = [
    "Caption 1: 🌟 Join thousands of traders on Deriv! Explore the platform designed for everyone, from beginners to pros: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #TradingCommunity #Forex #Investment #Beginners #WomenInTrading #FinancialLiteracy #Empowerment",
    "Caption 2: 🚀 Take your trading to the next level with Deriv! Click here to get started: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexTrading #Investing #FinancialFreedom #WomenWhoTrade #Deriv",
    "Caption 3: 💹 Master the markets with ease. Sign up on Deriv and make informed trades: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Forex #Deriv #InvestSmart #MarketAnalysis #WomenInFinance",
    "Caption 4: 📈 Ready to trade like a pro? Deriv's platform gives you all the tools you need: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingPlatform #Forex #Investment #WomenInBusiness",
    "Caption 5: 💰 Trade with confidence on Deriv and watch your investments grow! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #Wealth #FinancialGoals #GirlBoss #InvestingWomen",
    "Caption 6: 🌍 Global trading opportunities await you! Sign up on Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalTrading #Forex #Deriv #WomenInTrading",
    "Caption 7: 🚀 Start trading now with Deriv! Experience the future of trading: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingFuture #Forex #Deriv #EmpoweredWomen",
    "Caption 8: 📊 Analyze, trade, succeed! Begin your trading journey with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingSuccess #Forex #Deriv #FinancialEmpowerment",
    "Caption 9: 💡 Want to master trading? Join Deriv and become a pro! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexMaster #Deriv #TradingTips #WomenInFinance",
    "Caption 10: 📈 Start building your wealth with Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WealthBuilding #Forex #Deriv #FinancialIndependence",
    "Caption 11: 💸 Unlock new trading opportunities with Deriv! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingOpportunities #Forex #Deriv #WomenEmpowerment",
    "Caption 12: 🌟 Empower yourself with Deriv's powerful trading tools: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Empowerment #Forex #Deriv #WomenInTrading",
    "Caption 13: 📊 Learn, trade, and earn! Join Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #LearnToTrade #Forex #Deriv #WomenWhoInvest",
    "Caption 14: 🚀 Expand your trading knowledge with Deriv! Click here to start: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexLearning #Deriv #TradingPlatform #EmpoweredWomen",
    "Caption 15: 🌍 Discover a world of trading possibilities with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalMarket #Forex #Deriv #WomenInFinance",
    "Caption 16: 💹 Ready to take on the markets? Start trading with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #MarketReady #Forex #Deriv #WomenInTrading",
    "Caption 17: 💡 Smart trading starts here! Sign up for Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #SmartTrading #Forex #Deriv #FinancialEducation",
    "Caption 18: 📈 Make informed trades with Deriv's advanced analytics: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexAnalytics #Deriv #InvestmentTools #WomenInFinance",
    "Caption 19: 🚀 Reach for the stars with Deriv's seamless trading platform: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ReachForTheStars #Forex #Deriv #WomenInBusiness",
    "Caption 20: 💰 Start investing in your future with Deriv today! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #InvestInYourFuture #Forex #Deriv #FinancialGoals",

    // Additional 30 unique captions
    "Caption 21: 🌸 Ladies, it's time to take charge of your financial future with Deriv! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenInFinance #Empowerment #InvestSmart",
    "Caption 22: 🎉 Celebrate your trading journey with Deriv! Join today and thrive: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingJourney #WomenInTrading #CelebrateSuccess",
    "Caption 23: 🌟 Are you ready to conquer the trading world? Join Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingGoals #WomenWhoTrade #JoinUs",
    "Caption 24: 🚀 Discover new horizons in trading with Deriv! Click to learn more: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #NewBeginnings #Forex #Deriv",
    "Caption 25: 💼 Be the boss of your finances! Start trading with Deriv now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #BossLady #FinancialFreedom #Deriv",
    "Caption 26: 💪 Take control of your investments with Deriv! Sign up today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenInInvesting #Empowerment #Deriv",
    "Caption 27: 💖 Let's break barriers in trading together! Join Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenEmpowerment #TradingCommunity #Deriv",
    "Caption 28: 📈 Your trading potential is limitless! Sign up with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #LimitlessPotential #Forex #Deriv",
    "Caption 29: 🌼 Trading is for everyone! Discover your path with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #DiversityInTrading #WomenInBusiness #Deriv",
    "Caption 30: 🎊 Celebrate your success with Deriv's trading tools! Start here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingSuccess #WomenWhoInvest #Deriv",
    "Caption 31: 🌟 Empower your trading journey with Deriv! Click to start: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenInFinance #Forex #Deriv",
    "Caption 32: 🚀 Ready for a trading adventure? Join Deriv today! https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #AdventureInTrading #Forex #Deriv",
    "Caption 33: 💕 Together, we can change the trading landscape! Join us on Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenSupportingWomen #Deriv #Forex",
    "Caption 34: 🌼 Your journey to financial independence starts with Deriv! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #FinancialIndependence #WomenInTrading #Deriv",
    "Caption 35: 🎉 Embrace the world of trading with Deriv! Get started: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingCommunity #WomenInBusiness #Deriv",
    "Caption 36: 🌟 Explore your passion for trading on Deriv! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #PassionForTrading #WomenInFinance #Deriv",
    "Caption 37: 💖 Let's make trading accessible for everyone! Join Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #AccessibleTrading #WomenWhoInvest #Deriv",
    "Caption 38: 🚀 Your future in trading starts today! Join Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #FutureInTrading #Forex #Deriv",
    "Caption 39: 🌸 Connect with a supportive trading community on Deriv! Sign up: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #SupportiveCommunity #WomenInTrading #Deriv",
    "Caption 40: 💼 Let's build a brighter financial future together with Deriv! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #BrightFuture #WomenEmpowerment #Deriv",
];

function copyCaption(caption) {
    navigator.clipboard.writeText(caption);
}

// Attach click events to each caption for copying
const captionElements = document.querySelectorAll('.caption');
captionElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        copyCaption(captions[index]);
    });
});
