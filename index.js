const { Telegraf , Markup} =require('telegraf');

const bot = new Telegraf('6215046787:AAHNrwxZ4oMRNMP-dUYXJB7KGpWynk7ffQc');

const compliments = [
    'Ты восхитительный человек!',
    'Твой взгляд как солнечный лучик!',
    'Ты очень талантлив и креативен!',
    'Ты всегда умеешь поднять настроение!',
    'Ты прекрасный друг и заботливый человек!',
];

let currentCompliment = compliments[0];

const keyboard = Markup.keyboard([
    ['Сказать комплимент'],
    ['Поменять комплимент']
]).resize().oneTime();

bot.start((ctx) => {
    ctx.reply('Привет! Я бот-комплиментатор. Вот мои команды: ', keyboard);
});

bot.hears('Сказать комплимент', (ctx) => {
    ctx.reply(currentCompliment, keyboard);
});

bot.hears('Поменять комплимент', (ctx) => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    currentCompliment = compliments[randomIndex];
    ctx.reply('Новый комплимент выбран!', keyboard);
}); 

bot.launch();