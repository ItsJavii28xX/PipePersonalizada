import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean',
  standalone: true
})

export class CleanPipe implements PipeTransform {

  transform(value: string, badWords: string): string {
    
    if (!value || !badWords) return value;

    const forbiddenWords = badWords.split(',').map(word => word.trim()); //<-- Trim quita las comas y separadores de cada elemento, dejando la palabra como tal

    let words = value.split(' ');

    forbiddenWords.forEach(badWord => {

      words.forEach((word, index) => {

        if (word.toLowerCase() === badWord.toLowerCase()) {
          
          words[index] = '*'.repeat(word.length); //<-- Repeat sustituye las n veces especificadas por una cadena indicada
        
        }

      });

    });

    return words.join(' '); //<-- Join vuelve a unir las palabras con el separador indicado
  
  }

}
