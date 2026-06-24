const pairData = {
    GBPJPY: {
        trades: 146,
        winrate: "46.58%",
        pf: "1.28",
        pips: "+243.6",
        dd: "138.1",
        chart: "performance/GBPJPY.png"
    },
    USDCHF: {
        trades: 194,
        winrate: "42.78%",
        pf: "1.32",
        pips: "+159.8",
        dd: "65.8",
        chart: "performance/USDCHF.png"
    },
    EURUSD: {
        trades: 193,
        winrate: "41.45%",
        pf: "1.07",
        pips: "+37.0",
        dd: "79.3",
        chart: "performance/EURUSD.png"
    },
    EURGBP: {
        trades: 57,
        winrate: "38.60%",
        pf: "1.09",
        pips: "+14.5",
        dd: "44.2",
        chart: "performance/EURGBP.png"
    },
    EURJPY: {
        trades: 5,
        winrate: "40.00%",
        pf: "1.32",
        pips: "+10.4",
        dd: "22.9",
        chart: "performance/EURJPY.png"
    },
    AUDJPY: {
        trades: 15,
        winrate: "46.67%",
        pf: "1.49",
        pips: "+17.9",
        dd: "13.7",
        chart: "performance/AUDJPY.png"
    },
    AUDUSD: {
        trades: 8,
        winrate: "62.50%",
        pf: "1.44",
        pips: "+11.7",
        dd: "19.1",
        chart: "performance/AUDUSD.png"
    },
    USDCAD: {
        trades: 170,
        winrate: "42.35%",
        pf: "0.98",
        pips: "-10.2",
        dd: "109.1",
        chart: "performance/USDCAD.png"
    },
    USDJPY: {
        trades: 217,
        winrate: "41.94%",
        pf: "0.85",
        pips: "-162.4",
        dd: "375.9",
        chart: "performance/USDJPY.png"
    },
    GBPUSD: {
        trades: 184,
        winrate: "31.52%",
        pf: "0.87",
        pips: "-102.0",
        dd: "110.2",
        chart: "performance/GBPUSD.png"
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

        const chart = document.getElementById("pair-chart");
        chart.src = data.chart;
        chart.alt = pair + " Equity Curve";
    });
});

document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", () => {
        const targetId = link.dataset.target;
        const target = document.getElementById(targetId);

        if (!target) return;

        const topbarHeight = 85;
        const targetPosition = target.offsetTop - topbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});
