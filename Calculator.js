function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject('Both inputs must be numbers.');
        }

        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject('Cannot divide by zero.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Invalid operation. Use "add", "subtract", "multiply", or "divide".');
        }
    });
}


calculator(10, 5, 'add').then(result => {
    console.log('Result:', result);  
}).catch(error => {
    console.error('Error:', error);
});
