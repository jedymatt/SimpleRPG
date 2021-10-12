const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('register')
        .setDescription('Register a adventurer account to start playing.'),
    async execute(interaction) {
        await interaction.reply('Started');
    },
};
