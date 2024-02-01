function area(a, b, c) {
    s = (a + b + c) / 2;
    return Math.sqrt((s) * (s - a) * (s - b) * (s - b))
} console.log(area(4, 5, 6))