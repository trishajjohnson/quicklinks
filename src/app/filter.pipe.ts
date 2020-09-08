import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        filter = filter.toLowerCase();
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter) !== -1);
    }
}