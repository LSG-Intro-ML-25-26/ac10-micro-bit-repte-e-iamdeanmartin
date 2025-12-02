let temperatura: number;
while (true) {
    temperatura = input.temperature()
    led.plotBarGraph(temperatura, 50)
}
