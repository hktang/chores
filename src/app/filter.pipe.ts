import { PipeTransform, Pipe } from "@angular/core";

/**
 * Courtesy of code5 @ https://stackoverflow.com/a/43310428/1017265
 */

@Pipe({
  name: "callback",
  pure: false
})
export class CallbackPipe implements PipeTransform {
  transform(items: any[], callback: (item: any) => boolean): any {
    if (!items || !callback) {
      return items;
    }
    return items.filter(item => callback(item));
  }
}
