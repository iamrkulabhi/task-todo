import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTasks'
})
export class SearchTasksPipe implements PipeTransform {

  transform(listTasks: any[], filterText: string): any {
    return listTasks ? listTasks.filter((item, index, arr) => {
       // tslint:disable-next-line: max-line-length
       if (item.taskName.search(new RegExp(filterText, 'i')) > -1 || item.taskDesc.search(new RegExp(filterText, 'i')) > -1 || item.taskStatus.search(new RegExp(filterText, 'i')) > -1) {
         return true;
       }
    }) : [];
  }
}
