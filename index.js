const {Telegraf} = require('telegraf');
const axios = require('axios');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Start command handler
bot.command('start', (ctx) => {
  ctx.reply('Welcome to the Weather Bot!!!! Type /weather followed by a space and then location name');
});

// Weather command handler
bot.command('weather', async (ctx) => {
  const location = ctx.message.text.split(' ')[1];
  
  try {
    // Fetch weather data from the API
    const weatherData = await getWeatherData(location);
    
    // Process the weather data and compose a reply message
    const replyMessage = composeReplyMessage(weatherData);
    
    // Send the reply message to the user
    ctx.reply(replyMessage);
  } 
  catch (error) {
    console.error('Error fetching weather data:', error);
    ctx.reply('Sorry, something went wrong while fetching the weather data. Please try again later.');
  }
});


// Function to fetch weather data from the API
async function getWeatherData(location) {
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`;

  
  const response = await axios.get(apiUrl);
  return response.data;
}

// Function to compose a reply message with weather information
function composeReplyMessage(weatherData) {
  const { location, current } = weatherData;
  
  const replyMessage = `Current weather in ${location.name}, ${location.country}:
  Temperature: ${current.temp_c}°C
  Humidity: ${current.humidity}%
  Wind Speed: ${current.wind_kph} km/h
  Conditions: ${current.condition.text}`;
  
  return replyMessage;
}

// Start the bot
bot.startPolling();
