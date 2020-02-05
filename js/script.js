let btnAddTarefa = document.querySelector('#adicionar-tarefa')  //essa linha aqui agente selecionou o elemento.

let tarefas = document.querySelector('#tarefas')

let inputTarefa = document.querySelector('#tarefa-digitada') 

let btnDone= document.querySelector('#tarefas')


btnAddTarefa.onclick = function (){ 

let valorDigitado = inputTarefa.value

let tarefaNova = `<div class="col-md-4">                              
<div class="card-tarefa">
        <div class="texto-tarefa">
             ${valorDigitado}
    </div>
    <div class="botao-tarefa">
        <img src="img/check.png" width="32" alt="Botao para finalizar tarefa"
            title="botao pra finalizar tarefa">
    </div>
</div>`

        tarefas.innerHTML  += tarefaNova
}


btnDone.onclick = () => {
tarefas.remove();

}