function verificarParteDoDia() {
    const horarioInput = document.getElementById('horario').value;
    const partesHorario = horarioInput.split(':');
    
    if (partesHorario.length !== 2) {
        exibirResultado("Formato de horário inválido. Use HH:MM.");
        return;
    }
    
    const horas = parseInt(partesHorario[0]);
    const minutos = parseInt(partesHorario[1]);
    
    if (isNaN(horas) || isNaN(minutos) || horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
        exibirResultado("Horário inválido. Use valores válidos para hora (0-23) e minutos (0-59).");
        return;
    }
    
    let parteDoDia;
    
    if (horas >= 6 && horas <= 11) {
        parteDoDia = "Manhã";
    } else if (horas >= 12 && horas <= 17) {
        parteDoDia = "Tarde";
    } else if (horas >= 18 && horas <= 23) {
        parteDoDia = "Noite";
    } else if (horas >= 0 && horas <= 5) {
        parteDoDia = "Madrugada";
    }
    
    exibirResultado(`Parte do dia para ${horarioInput}: ${parteDoDia}`);
}

function exibirResultado(mensagem) {
    document.getElementById('resultado').textContent = mensagem;
}
