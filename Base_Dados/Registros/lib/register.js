const fs = require('fs')
const crypto = require('crypto')

const _registro = JSON.parse(fs.readFileSync('./Registros/registro/registro.json'))

/* Nota: Vai da o tempo q foi registrado */
const getRegisterTime = (sender) => { 
            let position = false
            Object.keys(_registro).forEach((i) => {
                if (_registro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registro[position].time
            }
        }

/* Nota: Não tem definição no json */
const getRegisterAge = (sender) => {
            let position = false
            Object.keys(_registro).forEach((i) => {
                if (_registro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registro[position].age
            }
        }
        
/* Nota: Vai difinir o serial dentro do json */
  const getRegisterSerial = (sender) => {
            let position = false
            Object.keys(_registro).forEach((i) => {
                if (_registro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registro[position].serial
            }
        }
        
/* Nota: vai depositar o nome, (pushname) dentro do json */
const getRegisterName = (sender) => {
            let position = false
            Object.keys(_registro).forEach((i) => {
                if (_registro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registro[position].name
            }
        }
        
/* Nota: Vai depositar o Id da pessoa */
const getRegisterNo = (sender) => {
            let position = false
            Object.keys(_registro).forEach((i) => {
                if (_registro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registro[position].id
            }
        }
        
/* Nota: Mart random do id no json */
const getRegisteredRandomId = () => {
            return _registro[Math.floor(Math.random() * _registro.length)].id
        }

/* Nota: Vai depositar todas as function dentro do json */
const addRegisteredUser = (userid, sender, time, serials) => {
            const obj = { id: userid, name: sender,  time: time, serial: serials }
            _registro.push(obj)
            fs.writeFileSync('./Registros/registro/registro.json', JSON.stringify(_registro))
        }

/* Nota: Vai criar o serial em ramdom para usar como cretidos */
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registro).forEach((i) => {
                if (_registro[i].id === sender) {
                    status = true
                }
            })
            return status
        }

module.exports = {
	getRegisterTime,
	getRegisterAge,
	getRegisterSerial,
	getRegisterName,
	getRegisterNo,
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser,
}