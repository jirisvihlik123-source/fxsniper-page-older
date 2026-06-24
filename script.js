const pairData = {
    GBPJPY: {
        trades: 146,
        winrate: "46.58%",
        pf: "1.28",
        pips: "+243.6",
        chart: "performance/GBPJPY.png"
    },
    USDCHF: {
        trades: 194,
        winrate: "42.78%",
        pf: "1.32",
        pips: "+159.8",
        chart: "performance/USDCHF.png"
    },
    EURUSD: {
        trades: 193,
        winrate: "41.45%",
        pf: "1.07",
        pips: "+37.0",
        chart: "performance/EURUSD.png"
    },
    EURGBP: {
        trades: 57,
        winrate: "38.60%",
        pf: "1.09",
        pips: "+14.5",
        chart: "performance/EURGBP.png"
    },
    USDCAD: {
        trades: 170,
        winrate: "42.35%",
        pf: "0.98",
        pips: "-10.2",
        chart: "performance/USDCAD.png"
    }
};

const tabs = document.querySelectorAll(".pair-tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const pair = tab.dataset.pair;
        const data = pairData[pair];

        document.getElementById("pair-name").textContent = pair;
        document.getElementById("pair-trades").textContent = data.trades;
        document.getElementById("pair-winrate").textContent = data.winrate;
        document.getElementById("pair-pf").textContent = data.pf;
        document.getElementById("pair-pips").textContent = data.pips;
        document.getElementById("pair-chart").src = data.chart;
        document.getElementById("pair-chart").alt = pair + " Equity Curve";
    });
});
