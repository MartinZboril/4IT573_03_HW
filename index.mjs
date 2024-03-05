import fs from 'fs/promises';

async function createFiles() {
    try {
        const filesCount = parseInt(await fs.readFile('instrukce.txt', 'utf8'));
        if (isNaN(filesCount)) {
            console.log('Soubor instrukce.txt musí obsahovat pouze počet soubor.');
            return;
        }

        const promises = [];
        for (let i = 0; i < filesCount; i++) {
            promises.push(fs.writeFile(`${i}.txt`, `Soubor ${i}`));
        }

        await Promise.all(promises);

        console.log(`${filesCount} soubor(ů) bylo úspěšně vytvořeno paralelně.`);
    } catch (error) {
        console.error('Error:', error);
    }
}

createFiles();
