import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'countryCode'
})

export class CountryCodePipe implements PipeTransform {
    transform (value : any, arg : any) {
        if ( arg == 'IND') {
            return "+91 " + value;
        } else if (arg == 'US'){
            return "+1 " + value;
        }
    }
}