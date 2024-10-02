document.addEventListener("DOMContentLoaded", function () {
    const captionContainer = document.getElementById('caption-container');
   const captions = [
    "🌟 Join thousands of traders on Deriv! Explore the platform designed for everyone, from beginners to pros: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #TradingCommunity #Forex #Investment #Beginners #WomenInTrading #FinancialLiteracy #Empowerment",
    "🚀 Take your trading to the next level with Deriv! Click here to get started: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexTrading #Investing #FinancialFreedom #WomenWhoTrade #Deriv",
    "💹 Master the markets with ease. Sign up on Deriv and make informed trades: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Forex #Deriv #InvestSmart #MarketAnalysis #WomenInFinance",
    "📈 Ready to trade like a pro? Deriv's platform gives you all the tools you need: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingPlatform #Forex #Investment #WomenInBusiness",
    "💰 Trade with confidence on Deriv and watch your investments grow! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #Wealth #FinancialGoals #GirlBoss #InvestingWomen",
    "🌍 Global trading opportunities await you! Sign up on Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalTrading #Forex #Deriv #WomenInTrading",
    "🚀 Start trading now with Deriv! Experience the future of trading: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingFuture #Forex #Deriv #EmpoweredWomen",
    "📊 Analyze, trade, succeed! Begin your trading journey with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingSuccess #Forex #Deriv #FinancialEmpowerment",
    "💡 Want to master trading? Join Deriv and become a pro! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexMaster #Deriv #TradingTips #WomenInFinance",
    "📈 Start building your wealth with Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WealthBuilding #Forex #Deriv #FinancialIndependence",
    "💸 Unlock new trading opportunities with Deriv! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingOpportunities #Forex #Deriv #WomenEmpowerment",
    "🌟 Empower yourself with Deriv's powerful trading tools: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Empowerment #Forex #Deriv #WomenInTrading",
    "📊 Learn, trade, and earn! Join Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #LearnToTrade #Forex #Deriv #WomenWhoInvest",
    "🚀 Expand your trading knowledge with Deriv! Click here to start: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexLearning #Deriv #TradingPlatform #EmpoweredWomen",
    "🌍 Discover a world of trading possibilities with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalMarket #Forex #Deriv #WomenInFinance",
    "💹 Ready to take on the markets? Start trading with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #MarketReady #Forex #Deriv #WomenInTrading",
    "💡 Smart trading starts here! Sign up for Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #SmartTrading #Forex #Deriv #FinancialEducation",
    "📈 Make informed trades with Deriv's advanced analytics: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexAnalytics #Deriv #InvestmentTools #WomenInFinance",
    "🚀 Reach for the stars with Deriv's seamless trading platform: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ReachForTheStars #Forex #Deriv #WomenInBusiness",
    "💰 Start investing in your future with Deriv today! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #InvestInYourFuture #Forex #Deriv #FinancialGoals",
    "🌸 Ladies, it's time to take charge of your financial future with Deriv! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenInFinance #Empowerment #InvestSmart",
    "🎉 Celebrate your trading journey with Deriv! Join today and thrive: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingJourney #WomenInTrading #CelebrateSuccess",
    "🌟 Are you ready to conquer the trading world? Join Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingGoals #WomenWhoTrade #JoinUs",
    "🚀 Discover new horizons in trading with Deriv! Click to learn more: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #NewBeginnings #Forex #Deriv",
    "💼 Be the boss of your finances! Start trading with Deriv now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #BossLady #FinancialFreedom #Deriv",
    "💪 Take control of your investments with Deriv! Sign up today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenInInvesting #Empowerment #Deriv",
    "💖 Let's break barriers in trading together! Join Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenEmpowerment #TradingCommunity #Deriv",
    "📈 Your trading potential is limitless! Sign up with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #LimitlessPotential #Forex #Deriv",
    "🌼 Trading is for everyone! Discover your path with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #DiversityInTrading #WomenInBusiness #Deriv",
    "🎊 Celebrate your success with Deriv's trading tools! Start here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingSuccess #WomenWhoInvest #Deriv",
    "🌟 Empower your trading journey with Deriv! Click to start: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenInFinance #Forex #Deriv",
    "🚀 Ready for a trading adventure? Join Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #TradingAdventure #Forex #Deriv",
    "💰 Invest in yourself with Deriv's trading education! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #InvestInYourself #Forex #Deriv",
    "🌸 Ladies, it's time to shine in trading! Join Deriv today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenInTrading #Empowerment #Deriv",
    "🎉 Unleash your potential with Deriv's trading platform! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #UnleashPotential #Forex #Deriv",
    "💪 Trading made easy with Deriv! Start your journey today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #EasyTrading #WomenInFinance #Deriv",
    "💡 Discover your trading style with Deriv's customizable platform: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #CustomizeYourTrading #Forex #Deriv",
    "🌍 Join a global community of traders with Deriv! Sign up now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #GlobalCommunity #Forex #Deriv",
    "🚀 Ready to soar in trading? Join Deriv and take flight: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #SoarInTrading #Forex #Deriv",
    "💰 Grow your wealth with Deriv's trading solutions! Click to learn more: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WealthGrowth #Forex #Deriv",
    "🌟 Let your trading dreams take flight with Deriv! Sign up today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #DreamBig #Forex #Deriv",
    "🎊 Start your trading journey with confidence on Deriv! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ConfidenceInTrading #WomenInFinance #Deriv",
    "🌼 Trading is for everyone! Join Deriv and embrace your journey: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #EveryoneCanTrade #Forex #Deriv",
    "💼 Empower your financial future with Deriv! Sign up today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #FinancialFuture #Deriv #WomenInBusiness",
    "💪 Take the first step towards trading success with Deriv! Click here: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #FirstStep #TradingSuccess #Deriv",
    "💖 Join the movement of women trading confidently with Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenWhoTrade #Empowerment #Deriv"
];
    // Create stars dynamically
    const numStars = 50; // Number of stars
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const top = Math.random() * 100; // Random position
        const left = Math.random() * 100;
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;
        document.body.appendChild(star);
    }

    captions.forEach(caption => {
        const captionElement = document.createElement('div');
        captionElement.classList.add('caption');
        captionElement.textContent = caption;

        const copyButton = document.createElement('button');
        copyButton.textContent = "Copy";
        copyButton.classList.add('copy-button');

        copyButton.onclick = function () {
            navigator.clipboard.writeText(caption)
                .then(() => {
                    // Optionally show a notification or feedback
                    console.log('Caption copied to clipboard!');
                });
        };

        captionElement.appendChild(copyButton);
        captionContainer.appendChild(captionElement);
    });
});
