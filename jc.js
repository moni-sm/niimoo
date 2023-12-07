// Function to fetch cryptocurrency price from a hypothetical API
async function fetchPrice(coinId) {
    try {
        const response = await fetch(`https://api.example.com/coins/${coinId}`);
        const data = await response.json();
        const priceElement = document.getElementById(`${coinId}-price`);
        priceElement.innerText = `Price: $${data.price}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to change the active tab and show the corresponding coin
function changeTab(coinId) {
    const coins = document.querySelectorAll('.coin');
    coins.forEach((coin) => {
        coin.style.display = 'none';
    });

    const activeCoin = document.getElementById(coinId);
    activeCoin.style.display = 'block';

    // Fetch price when tab is changed
    fetchPrice(coinId);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // Show the first coin by default
    changeTab('bitcoin');
});
