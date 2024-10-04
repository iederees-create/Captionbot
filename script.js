document.addEventListener("DOMContentLoaded", function () {
    const captionContainer = document.getElementById('caption-container');
    const captions = [
        "Join thousands of traders on Deriv! Explore the platform designed for everyone, from beginners to pros: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #TradingCommunity #Forex #Investment #Beginners #WomenInTrading #FinancialLiteracy #Empowerment",
        "Unlock your potential in the world of forex trading today! 🚀 Exclusive benefits await. Don't miss out—sign up now with Deriv and get started! 💡 #ForexTrading #Deriv #StartNow",
            "Join thousands of traders on Deriv! Explore the platform designed for everyone, from beginners to pros: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #TradingCommunity #Forex #Investment #Beginners #WomenInTrading #FinancialLiteracy #Empowerment",
    "Unlock your potential in the world of forex trading today! 🚀 Exclusive benefits await. Don't miss out—sign up now with Deriv and get started! 💡 #ForexTrading #Deriv #StartNow",
    "Ready to take control of your financial future? Start trading with Deriv today and access free expert resources to help you succeed. 🌟 Click now! 🔗 #TradingSuccess #JoinDeriv",
    "Time is money! ⏳ Join Deriv today and start trading smarter, not harder. Secure your financial future now! #Forex #Deriv #TradeNow",
    "Over 10,000 traders have joined Deriv this month—become part of a growing success story! 🌟 Click the link and be the next success! #TradingCommunity #Forex #Deriv",
    "I made my first profit within just 2 weeks of starting with Deriv! 🤑 Want to experience the same success? Sign up now! #SuccessStories #Trading #Forex",
    "Thousands are already profiting with Deriv—why wait? 💸 Start today and be part of the winning team! #TradeWithConfidence #JoinTheSuccess #Deriv",
    "Sign up today using my link and receive a FREE trading guide to kickstart your journey! 📚💡 Ready to trade smarter? Start now! #FreeGuide #ForexTrading #Deriv",
    "Want to learn the secrets of successful traders? 🧠💡 Get exclusive tips when you sign up now with Deriv! Click the link to get started! #ForexTips #SignUpBonus #Deriv",
    "Join now and enjoy a 10% deposit bonus using my exclusive link! 🚀 Limited time offer—click to claim your bonus! #BonusOffer #Deriv #Forex",
    "Don't wait! Sign up with Deriv now and trade with confidence. Click the link and join our trading family today! 🚀 #Forex #JoinNow #Deriv",
    "Ready to trade like a pro? 💪 Click below and start today with all the support you need for success! #ForexTrading #CallToAction #Deriv",
    "Take the first step towards financial independence. Sign up today, and let’s make your trading dreams a reality! #SignUp #TradeNow #FinancialFreedom",
    "Struggling to find a reliable trading platform? 😓 Join Deriv and experience seamless trading with tools designed for success! 🚀 #TradingMadeEasy #Forex #Deriv",
    "Tired of complicated trading apps? With Deriv, trading is easy and profitable. Sign up now and see the difference! 💡 #EasyTrading #Forex #Success",
    "Frustrated with not seeing profits? Get the guidance you need with Deriv—trade smart, start today! #TradingHelp #ProfitWithDeriv #Forex",
    "Imagine the freedom to make money whenever, wherever you are. 🌌 Start your journey with Deriv today and make your dreams a reality! 🚀 #FinancialFreedom #Deriv #LiveYourDream",
    "Take charge of your future. 🌟 Join Deriv, and together we’ll make your trading success a reality. #Ambition #TradingSuccess #ForexTrading",
    "Ready to escape the 9-5 grind and work for yourself? Deriv can be your gateway to financial independence. Sign up now! 💡 #BeYourOwnBoss #Forex #Deriv",
    "Limited time only! 🚀 Join Deriv now and receive a special welcome bonus to start your trading journey. Click the link today! #ActNow #BonusOffer #ForexTrading",
    "Hurry! ⏳ Exclusive trading tips available for new members—sign up today and maximize your gains! #LimitedOffer #Deriv #TradeSmart",
    "I’ve transformed my trading journey with Deriv—now it’s your turn! 🚀 Click the link to start trading like never before! #PersonalGrowth #Forex #Deriv",
    "I know the struggles of starting in trading. Let Deriv be your first step to success, just like it was for me. 💡 Join today! #SuccessStory #ForexTrading #Deriv",
    "Join me in making trading simple, profitable, and fun! Deriv has everything you need to succeed. Start today! 🌟 #Forex #JoinMe #Deriv",
    "Dream big, trade smart. 🌌 With Deriv, your dreams of financial freedom can come true. Join us today! #DreamBig #Forex #Deriv",
    "Financial freedom is only a click away. 🌟 Take that step with Deriv and start living life on your own terms! #LiveFree #TradingSuccess #Deriv",
    "It’s time to make your ambitions a reality. 🚀 Start trading with Deriv and see how far you can go! #Ambition #Forex #TradeNow"
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

        "💪 Take control of your investments with Deriv! Sign up today: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #WomenInInvesting #Empowerment #Deriv",
        "💖 Let's break barriers in trading together! Join Deriv: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #BreakingBarriers #Deriv #WomenInTrading"
    ];

    // Function to update captionContainer with a random caption
    function displayRandomCaption() {
        const randomIndex = Math.floor(Math.random() * captions.length);
        captionContainer.innerText = captions[randomIndex];
    }

    // Display a random caption on page load
    displayRandomCaption();
});
