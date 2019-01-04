import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderToPt'
})
export class GenderToPtPipe implements PipeTransform {

  transform(value: 'male' | 'female'): 'Masculino' | 'Feminino' {
    switch (value) {
      case 'male':
        return 'Masculino';
      case 'female':
        return 'Feminino';
    }
  }

}
