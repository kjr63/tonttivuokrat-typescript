/*********************** API ************************************/
export type StatDO = [number[], number[], number[], number[], number[], number[], number[], number[], number[]];
export declare class Statistics {
    private avLandPrice;
    private lowLandPrice;
    private highLandPrice;
    private lowLandRent;
    private avLandRent;
    private highLandRent;
    private totalLand;
    private totalLandValue;
    private totalLandRent;
    constructor();
    getAvLandPrice(): number[];
    getLowLandPrice(): number[];
    getHighLandPrice(): number[];
    getLowLandRent(): number[];
    getAvLandRent(): number[];
    getHighLandRent(): number[];
    getTotalLand(): number[];
    getTotalLandValue(): number[];
    getTotalLandRent(): number[];
    setAvLandPrice(ind: number, val: number): void;
    setLowLandPrice(ind: number, val: number): void;
    setHighLandPrice(ind: number, val: number): void;
    setLowLandRent(ind: number, val: number): void;
    setAvLandRent(ind: number, val: number): void;
    setHighLandRent(ind: number, val: number): void;
    setTotalLand(ind: number, val: number): void;
    setTotalLandValue(ind: number, val: number): void;
    setTotalLandRent(ind: number, val: number): void;
    getDataObject(): StatDO;
    setDataObject(all: StatDO): void;
}
export type MuniDO = [string, [number, number], StatDO];
export declare class Municipality {
    private name;
    private coords;
    private statistics;
    constructor();
    getName(): string;
    getCoords(): [number, number];
    getStatistics(): Statistics;
    setName(n: string): void;
    setCoords(c: [number, number]): void;
    setStatistics(s: Statistics): void;
    getDataObject(): MuniDO;
    setDataObject(all: MuniDO): void;
}
export type CtotDO = [number, number, number, number];
export declare class CountryTotal {
    private land;
    private households;
    private landValue;
    private landRent;
    constructor();
    getLand(): number;
    getHouseholds(): number;
    getLandValue(): number;
    getLandRent(): number;
    setLand(l: number): void;
    setHouseholds(h: number): void;
    setLandValue(lv: number): void;
    setLandRent(lr: number): void;
    getDataObject(): CtotDO;
    setDataObject(all: CtotDO): void;
}
export declare const MUNICIPALITY_OUT_FILE_NAME: string;
export declare const TOTAL_OUT_FILE_NAME: string;
export declare const GENERAL_DATA_FILE_NAME: string;
