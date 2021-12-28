(function() {

    const h1 = document.querySelector('.container h1');
    const data = new Date(); 
    
    let options = {     
        second: '2-digit', 
        minute: '2-digit',
        hour: '2-digit', 
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    h1.innerHTML = data.toLocaleDateString('pt-BR', options);
})();
