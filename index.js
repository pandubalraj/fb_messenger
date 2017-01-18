'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAALHWtyWid4BANjovLyfqa5ojLZBJqyFGiNc1L22HrPUfYRsgaWlLtZBD7lJjaskhaTQZAnFZBSZA6ZB6Et8xCJMtVfwHLcCdC9InTBSrDQY7ZBRhBVG4enIOqbqazZCqWlVlAqAuk5msrVrL9c7v1h5vwS5jmaCV3BWynVtDuLjtHuLcCZBRWdKP',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(process.env.PORT ||3000)
