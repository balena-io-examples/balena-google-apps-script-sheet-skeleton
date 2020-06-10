// This is where the gas-webpack-plugin expects us to assign our exports
declare let global: any;

interface Dictionary<T> {
	[index: string]: T;
}

type AnyObject = Dictionary<any>;

type Writable<T> = { -readonly [K in keyof T]: T[K] };
