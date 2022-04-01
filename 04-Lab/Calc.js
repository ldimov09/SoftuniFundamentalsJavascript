function doit(x, y, action) {
    let m = "multiply", d = "divide", a = "add", s = "subtract";
    return x * y * (!m.localeCompare(action)) + x / y * (!d.localeCompare(action)) + (x + y) * (!a.localeCompare(action)) + (x - y) * (!s.localeCompare(action));
}
