import * as Linking from 'expo-linking';

export default async function openWhats(nomePet, imagemPet) {
    const numero = '5511952041573'; // Número do WhatsApp
    const mensagem = `Olá, tudo bem? Estou interessado(a) em adotar o ${nomePet}. Veja a foto dele aqui: `;

    const imagem = imagemPet;
    const token = 'f396e16e46b034eb322bf418b073080d71e2957f'; 
    const api = 'https://api-ssl.bitly.com/v4/shorten';

    try {
       
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                long_url: imagem
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao encurtar o link');
        }

        const data = await response.json();
        const shortenedLink = data.link; // Link encurtado retornado pela API do Bitly
        const fullMensagem = `${mensagem} ${shortenedLink}`; 

        const url = `whatsapp://send?phone=${numero}&text=${encodeURIComponent(fullMensagem)}`;

        
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
            await Linking.openURL(url);
        } else {
            alert('WhatsApp não está instalado.');
        }
    } catch (error) {
        console.error('Erro ao encurtar o link ou abrir WhatsApp:', error);
    }
}
