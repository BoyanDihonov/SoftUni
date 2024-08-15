function GCD(a, b) {
    let greatest = 0
    for (i = 0; i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            greatest = i
        }
    }
    console.log(greatest)
}

GCD(15, 5)
GCD(2154, 458)