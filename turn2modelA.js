class RealTimeStockUpdater {
    constructor() {
        // Use a Map for efficient updates based on stock symbols
        this.stocks = new Map();
    }

    // Method to initialize stock prices
    initializeStock(symbol, initialPrice) {
        this.stocks.set(symbol, { price: initialPrice, lastUpdated: Date.now() });
    }

    // Method to update stock prices efficiently
    updateStock(symbol, newPrice) {
        const stock = this.stocks.get(symbol);
        if (stock) {
            stock.price = newPrice; // In-place update to minimize memory usage
            stock.lastUpdated = Date.now();
            this.renderStock(symbol);
        }
    }

    // Simulated method to visualize the current stock price (for demonstration)
    renderStock(symbol) {
        const stock = this.stocks.get(symbol);
        console.log(`Stock: ${symbol}, Price: ${stock.price}, Last Updated: ${new Date(stock.lastUpdated).toLocaleTimeString()}`);
    }

    // Simulated method to process real-time updates
    simulateRealTimeUpdates(interval) {
        setInterval(() => {
            // Generate random update prices for stocks
            this.stocks.forEach((_, symbol) => {
                const newPrice = (Math.random() * 100).toFixed(2);
                this.updateStock(symbol, newPrice);
            });
        }, interval);
    }
}

// Example usage
const stockUpdater = new RealTimeStockUpdater();
stockUpdater.initializeStock('AAPL', 150);
stockUpdater.initializeStock('GOOG', 2800);
stockUpdater.initializeStock('AMZN', 3400);

// Start simulating real-time updates every 3 seconds
stockUpdater.simulateRealTimeUpdates(3000);
