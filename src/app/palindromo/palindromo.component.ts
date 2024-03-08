import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  //input para inserir o texto
  inputText: string = '';
  //verifica se é falso
  isPalindromo: boolean = false;

  checkPalindromo() {
    //tira os caracteres especiais 
    const word = this.inputText.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    //junta as palavras ou números que estão na ordem inversa com base
    //na divisão da string
    const reversedWord = word.split('').reverse().join('');
    //verifica o tipo de dados e compara os dois valores
    this.isPalindromo = (word === reversedWord);
  }
}
