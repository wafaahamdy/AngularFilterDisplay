import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'rolefilter',
    pure: false
})
export class RoleFilterPipe implements PipeTransform {
    transform(items: any[], filters): any {
        if (!items || !filters.length) {
            return items;
        }
         // filter items array, items  
        return   items.filter(item => {
            //convert item to string
         let   sitem = JSON.stringify (item).toLowerCase() ;
         // check that every word in filters is found in item
         return filters.every ( e=> sitem.includes(e.toLowerCase()) )
         } )  
         
    }
}