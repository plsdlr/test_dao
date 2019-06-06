const Moloch = artifacts.require('./Moloch')
const GuildBank = artifacts.require('./GuildBank')
const Token = artifacts.require('./Token')

const config = require('../migrations/config.json').test

let moloch, guildBank, token


//const FOO = 5;



async function getvars() {
  moloch = await Moloch.deployed()
  const guildBankAddress = await moloch.guildBank()
  guildBank = await GuildBank.at(guildBankAddress)
  token = await Token.deployed()
}

module.exports = {
    vars: moloch,
    vars: guildBank,
    vars: token
}
