document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('Nome').value;
        const time = document.getElementById('Time').value;
        const valor = document.getElementById('Valor').value;
        const descricao = document.getElementById('Descrição').value;

        const aposta = {
            nome: nome,
            time: time,
            valor: valor,
            descricao: descricao
        };

        // Verificar se há suporte para localStorage no navegador
        if (typeof Storage !== 'undefined') {
            // Recuperar os dados armazenados
            let apostas = JSON.parse(localStorage.getItem('apostas')) || [];

            // Adicionar a nova aposta à lista
            apostas.push(aposta);

            // Salvar a lista atualizada no localStorage
            localStorage.setItem('apostas', JSON.stringify(apostas));

            // Redirecionar para a página de lista
            window.location.href = 'lista.html';
        } else {
            alert('Seu navegador não suporta o recurso localStorage. Por favor, atualize para um navegador mais recente.');
        }
    });
});
