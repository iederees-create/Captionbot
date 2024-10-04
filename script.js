// JavaScript for displaying individual captions with a copy button
document.addEventListener('DOMContentLoaded', () => {
  const captions = [
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
  ];

  const container = document.getElementById('captionsContainer');

  captions.forEach((caption, index) => {
    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption';

    const captionText = document.createElement('p');
    captionText.innerText = caption;
    captionDiv.appendChild(captionText);

    const copyButton = document.createElement('button');
    copyButton.innerText = 'Copy';
    copyButton.className = 'copyButton';
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(caption).then(() => {
        alert(`Caption ${index + 1} copied to clipboard!`);
      });
    });

    captionDiv.appendChild(copyButton);
    container.appendChild(captionDiv);
  });
});
