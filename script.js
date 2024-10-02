const captions = [
    "Caption 1: 🌟 Join thousands of traders on Deriv! Explore the platform designed for everyone, from beginners to pros: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #TradingCommunity #Forex #Investment #Beginners #Traders #JoinUs",
    "Caption 2: 🚀 Take your trading to the next level with Deriv! Click here to get started: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #ForexTrading #Investing #FinancialFreedom #Deriv",
    "Caption 3: 💹 Master the markets with ease. Sign up on Deriv and make informed trades: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Forex #Deriv #InvestSmart #MarketAnalysis",
    // Add the rest of the captions up to Caption 60
    "Caption 60: Maximize your potential with Deriv’s expert tools! 💡 Trade like a pro now: https://track.deriv.com/_KCH6LP9EQxwpl7dR3lTXiGNd7ZgqdRLk/1/ #Deriv #MaximizeSuccess #ProTrader"
];

document.addEventListener("DOMContentLoaded", () => {
    const captionsContainer = document.getElementById("captions");

    captions.forEach((captionText, index) => {
        const captionElement = document.createElement("div");
        captionElement.classList.add("caption");
        captionElement.textContent = captionText;

        captionsContainer.appendChild(captionElement);
    });
});
