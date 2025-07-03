import { tap } from "rxjs";

export function LogDecorator(msg: string) {
    return function (target: Object, propertyName: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const result = original.apply(this, args);

            if (result?.subscribe) {
                // It's an Observable
                return result.pipe(
                    tap((data: any) => {
                        console.log(`${msg} ${propertyName}:0`, data);
                    })
                );
            }

            console.log(`${msg} ${propertyName}:`, result);
            return result;
        };

        return descriptor;
    };
}
