// debounce.ts
function debounce(func, delay) {
    var timerId;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            func.apply(_this, args);
        }, delay);
    };
}
function doExpensiveOperation(value) {
    console.log("Expensive operation with value:", value);
}
var debouncedExpensiveOperation = debounce(doExpensiveOperation, 500);
// Calling the debounced function multiple times within 500ms
debouncedExpensiveOperation("First call");
debouncedExpensiveOperation("Second call");
debouncedExpensiveOperation("Third call");
// Only one actual call to the expensive operation will be made after 500ms
