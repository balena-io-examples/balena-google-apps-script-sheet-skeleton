interface Dictionary<T> {
    [index: string]: T;
}

type AnyObject = Dictionary<any>;

declare let global: any;
