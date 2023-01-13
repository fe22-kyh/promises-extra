/**
 * 1. Ta fram ett paket bröd - 1s
 * 2. Rosta brödet - 2s
 * 3. Bred på smör - 1.5s
 * 4. Lägga på ost - 1s
 */

const getBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hämtat bröd');
    }, 1000);
});

const toastBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Bröd rostat');
    }, 2000);
});

const butterBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Bröd smörat');
    }, 1500);
});

const applyCheese = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Lagt på ost');
    }, 1000);
});

getBread.then((value) => {
    console.log(value);

    toastBread.then((value) => {
        console.log(value);

        butterBread.then((value) => {
            console.log(value);

            applyCheese.then((value) => {
                console.log(value);
            });
        });
    });
});



function saveToLocalStorage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem('greeting', 'Hello');
            resolve();
        }, 2000);
    });
}

function readFromLocalStorage() {
    setTimeout(() => {
        const greeting = localStorage.getItem('greeting');
        console.log(greeting);
    }, 1000);
}

saveToLocalStorage().then(() => {
    readFromLocalStorage();
});