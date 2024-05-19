const obj = {
    foo: "foo value",
    bar: "bar value"
}

try {
    console.log(obj.foo);
} catch {
    console.log("что-то пошло не так");
}
finally {
    console.log("finally");
}