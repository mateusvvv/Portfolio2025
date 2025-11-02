function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '558189849687';
    const text = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(text);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);
    window.open(url, '_blank');
}
