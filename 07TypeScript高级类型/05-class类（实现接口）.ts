interface Singale {
  sing(): void
  name: string
}

class Person implements Singale {
  name = 'jack'

  sing() {
    console.log('你是我的小呀小苹果')
  }
}
