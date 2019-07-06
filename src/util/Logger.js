import * as chalk from 'chalk'

class Logger {
  static info(message) {
    console.log(chalk(message))
  }
}

export default Logger
