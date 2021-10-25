import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchFilter',
    // An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.
    pure: true
})
export class SearchFilterPipe implements PipeTransform {


    transform(items: any[], filter: any, filterKey?: any[]): any {
        if (!items || !filter) {
            return items;
        }

        if (typeof filter != "string") {
            return [];
        }

        return items.filter(item => {
            let temp = JSON.parse(JSON.stringify(item));

            const filterKeys: string[] = filterKey ?? Object.keys(temp);

            return filterKeys.some(k => {
                return temp[k] != null && temp[`${k}`].toString().toLowerCase().includes(filter?.toLowerCase());
            });

        });

    }


}


