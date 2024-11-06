/**
 * Validação da maioridade
 * @author Wellington R. Cruz
 */

// Função para validação de maioridade
function validar(evento) {
    // a linha abaixo desabilita o comportamento padrão de envio do formulário
   event.preventDefault()
   // alert("Teste de envio") = Podendo ser uma referência
   let nome = document.getElementById(`nome`).value
   // alert(nome)
   // console.log(nome)
   let idade = document.getElementById('idade').value
   
   // Saída > Escrever o nome do aluno, sendo menor ou maior de idade.
   document.getElementById('aluno').value =`Aluno: ${nome}`
   if (idade<18) {
       document.getElementById('status').value = "Menor de idade"
   } else {
    document.getElementById('status').value = "Maior de idade"
   }
}