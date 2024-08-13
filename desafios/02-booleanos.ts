// Boleanos

const client = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeight = 130

const currentHour = new Date().getHours()

const isParkOpen = currentHour > 9 && currentHour < 18

if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

const isClientHasTicker = client.hasTicket

if (!isClientHasTicker) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const hasNecessaryHeight = client.height > necessaryHeight

if (!hasNecessaryHeight) {
  throw new Error('O Diego não pode entrar no brinquedo porque tem menos de 130cm!')
} 

console.log('O Diego se divertiu muito! :)')