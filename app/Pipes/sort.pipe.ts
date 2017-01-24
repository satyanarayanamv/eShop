import {Pipe , PipeTransform, Injectable } from '@angular/core';
@Pipe({name: "sortBy", pure:false})
@Injectable()
export class SortPipe implements PipeTransform{
  transform(array: Array<string>, prop: string): Array<string> {
		if(prop!=null && prop.length>0)
		{			
			var desc = prop.substr(0,1)=='-';
			var args = (desc)? prop.substr(1) : prop;
			array.sort((a: any, b: any) => {
				if ( a[args] < b[args] ){
					return desc? 1: -1;
				}else if( a[args] > b[args] ){
						return desc? -1: 1;
				}else{
					return 0;	
				}
			});
		}
    return array;
  }
}