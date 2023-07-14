# Weather Bot

A Telegram bot that provides weather information based on user input.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>

2. Install dependencies:
    ```
    npm install
    ```
3. Set up environment variables:

    Create a `.env` file in the root directory.

    Add the following variables to the `.env` file:
    ```
    BOT_TOKEN=<Your_Telegram_Bot_Token>
    API_KEY=<Your_WeatherAPI_Key>
    ```
4. Start the bot:
    ```
    npm start
    ```
## USAGE:
1. Start the bot by sending the `/start` command in the Telegram chat.
2. To fetch weather information for a specific location, use the **/weather command followed by a space and the location name**. For example:
    ```
    /weather London
    ```

## HOW TO CREATE TELEGRAM **BOT_TOKEN**: 
- To create telegram bot "BOT_TOKEN" is required.
- So, to create this "BOT_TOKEN" (It is unique token that identifies that this particular bot is owned by you)
- Go to telegram app and search for `botFather`.
- To start "botFather", You can use command `/start` or start button is already present.
- After this lot of option availabe to create bot or edit bot etc.
- To create new bot enter -> `/newbot`
- It will ask for name of bot and username of bot you can enter according to you.
- Now your bot is ready and it will send all the req. information. 

## HOW TO CREATE API KEY FROM `WEATHERAPI`:
- Visit `https://www.weatherapi.com/`.
- Create account and get `API_KEY`.