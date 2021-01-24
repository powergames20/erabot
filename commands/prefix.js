module.exports = {
    run: message => message.channel.send("mon prefix et : e*"),
    name: 'prefix',
    guildOnly: true,
    help: {
        description: 'pour voire le prefix du bot'
    }
}