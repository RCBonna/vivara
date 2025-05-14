// generate_users.js
    
    const CryptoJS = require('crypto-js');
    const fs = require('fs');

    const users = [
        { cpf: '111.544.674-92', password: 'Rob@123' }, // usuario 1
        { cpf: '377.921.139-49', password: 'rcb' }, // usuario 2
        { cpf: '901.727.100-06', password: '@Ind301' }, // usuario 3
        { cpf: '922.537.501-82', password: '420@Rub' }, // usuario 4
        { cpf: '733.466.592-91', password: 'De#90' }, // usuario 5
        { cpf: '054.808.589-71', password: 'ren$006' }, // usuario 6
        { cpf: '019.805.499-82', password: 'Joao*711' }, // usuario 7
        { cpf: '172.001.999-15', password: 'Bene$822' }, // usuario 8
        { cpf: '083.488.430-00', password: 'Pax$99' }, // usuario 9
        { cpf: '377.921.139-49', password: 'rcb' }, // usuario 10
        { cpf: '000.000.000-00', password: 'a' },   // usuario 11
        // Adicione mais usuários conforme necessário
    ];

    const secretKey = 'Inconst1tuc1on4lmente'; // **MUDE ISSO PARA UMA CHAVE FORTE!**

    // Criptografa os dados
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(users), secretKey).toString();

    // Salva no arquivo
    fs.writeFileSync('users.json', JSON.stringify({ data: ciphertext }));

    console.log('Arquivo users.json criptografado gerado com sucesso!');