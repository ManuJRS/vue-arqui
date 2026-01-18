<script lang="ts" setu p>
class Counter {
  count: number = 0
  increment() {
    this.count++
  }
}

const counter = new Counter()

counter.increment()
counter.increment()
counter.increment()

console.log(counter.count)

class lightSwithc {
  // definimo el molde del objeto
  isOn: boolean = false // estado inicial del objeto
  constructor(initialState: boolean) {
    this.isOn = initialState
  }
  toggle() {
    // comportamiento
    this.isOn = !this.isOn
  }
}
const light1 = new lightSwithc(false) // crea una instancia
const light2 = new lightSwithc(true)

console.log(light1.isOn)
console.log(light2.isOn)

class VolumneControl {
  volume: number = 0
  constructor(initialVolume: number) {
    this.volume = initialVolume
  }

  increase() {
    if (this.volume < 100) {
      this.volume++
    }
  }

  decrease() {
    if (this.volume > 0) {
      this.volume--
    }
  }
}

const vol = new VolumneControl(50)
//

export class TemperatureControl {
  temperature: number = 16
  constructor(initialTemperature?: number) {
    this.temperature = initialTemperature ?? 0
  }
  increase() {
    if (this.temperature < 30) {
      this.temperature++
    }
  }

  decrease() {
    if (this.temperature > 16) {
      this.temperature--
    }
  }
}

const temp1 = new TemperatureControl()
console.log(temp1)

const temp2 = new TemperatureControl(20)
temp2.decrease()
temp2.decrease()
temp2.decrease()
temp2.decrease()
temp2.decrease()
temp2.decrease()
temp2.decrease()
temp2.decrease()
temp2.decrease()
temp2.increase()
console.log(temp2)
</script>

<template>
  <h1>Repaso clasess</h1>
</template>
