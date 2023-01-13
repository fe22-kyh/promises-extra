/**
 * Polka lover
Gör en funktion vid namn letsDance(danceStyle)som bygger på ett Promise. 
Funktionen ska ta ett argument danceStyle. 
Om dansen som erbjuds är polka ska dansen godkännas med frasen Yes, polka is my thing!. 
Om Dansstilen som erbjuds är något annat så ska dansförfrågan rejectas med en syrlig diss. 
Funktionen ska ta 2s på sig att svara.
 */

function letsDance(danceStyle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (danceStyle == 'polka') {
                resolve('Yes, polka is my thing');
            } else {
                reject('Not even if a pandemic roamed the earth');
            }
        }, 2000);
    });
}

letsDance('polka').then((answer) => {
    console.log(answer);
}).catch((answer) => {
    console.log(answer);
});

/**
 * Du ska göra ett webbprojekt. Gör en promise kedja för detta projekts moment i följande ordning med följande tider:

Researcha målgruppen - 4s
Skissa upp en design på papper - 2s
Gör skissen till pixel perfect mockup I Figma / XD - 3s
Koda - 3s
Stackoverflow:a fel - 1s
Testa produkten - 2s
Fira lyckat projekt - 1s
Använd setTimeout för att fördröja funktionerna.
 */

function doWebProject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done with researchTargetGroup');
        }, 4000);
    });
}

// Researcha målgruppen - 4s
// Skissa upp en design på papper - 2s
// Gör skissen till pixel perfect mockup I Figma / XD - 3s
// Koda - 3s
// Stackoverflow:a fel - 1s
// Testa produkten - 2s
// Fira lyckat projekt - 1s

doWebProject().then((result) => {
    console.log(result);
    return 'Skissa upp en design på papper';
}).then((result) => {
    console.log(result);
    return 'Gör skissen till pixel perfect mockup I Figma';
}).then((result) => {
    console.log(result);
});

