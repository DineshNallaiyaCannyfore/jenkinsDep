import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'trun',
    standalone: true
})
export class Truncate implements PipeTransform {
    transform(value: any, limit: number, ...args: any[]) {
        return value.slice(0, limit) + '....'
    }
}