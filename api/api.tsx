/*********************** API ************************************/
export type StatDO = [ number[],number[],number[],number[],number[],number[],number[],number[] ];
export class Statistics {	 
	private avLandPrice: number [];
	private highLandPrice: number [];
	private lowLandRent: number [];
	private avLandRent: number [];
	private highLandRent: number [];
	private totalLand: number [];
	private totalLandValue: number [];
	private totalLandRent: number [];	
	public constructor () {
		this.avLandPrice = [];
		this.highLandPrice = [];
		this.lowLandRent = [];
		this.avLandRent = [];
		this.highLandRent = [];
		this.totalLand = [];
		this.totalLandValue = [];
		this.totalLandRent = [];		
	}
	public getAvLandPrice (): number [] { return this.avLandPrice; }
	public getHighLandPrice (): number [] { return this.highLandPrice; }
	public getLowLandRent (): number [] { return this.lowLandRent; }
	public getAvLandRent (): number [] { return this.avLandRent; }
	public getHighLandRent (): number [] { return this.highLandRent; }
	public getTotalLand (): number [] { return this.totalLand; }
	public getTotalLandValue (): number [] { return this.totalLandValue; }
	public getTotalLandRent (): number [] { return this.totalLandRent; }
	public setAvLandPrice (ind: number, val: number): void { this.avLandPrice[ind] = val; }
	public setHighLandPrice (ind: number, val: number ): void { this.highLandPrice[ind] = val; }
	public setLowLandRent (ind: number, val: number ): void { this.lowLandRent[ind] = val; }
	public setAvLandRent (ind: number, val: number ): void { this.avLandRent[ind] = val; }
	public setHighLandRent (ind: number, val: number ): void { this.highLandRent[ind] = val; }
	public setTotalLand (ind: number, val: number ): void { this.totalLand[ind] = val; }
	public setTotalLandValue (ind: number, val: number ): void { this.totalLandValue[ind] = val; }
	public setTotalLandRent (ind: number, val: number ): void { this.totalLandRent[ind] = val; }
	public getDataObject (): StatDO {
		return (
			[
				this.avLandPrice,
				this.highLandPrice,
				this.lowLandRent,
				this.avLandRent,
				this.highLandRent,
				this.totalLand,
				this.totalLandValue,
				this.totalLandRent
			]
		);		
	}
	public setDataObject ( all: StatDO ): void {
		this.avLandPrice = all[0];
		this.highLandPrice = all[1];
		this.lowLandRent = all[2];
		this.avLandRent = all[3];
		this.highLandRent = all[4];
		this.totalLand = all[5];
		this.totalLandValue = all[6];
		this.totalLandRent = all[7];			
	}	
}
export type MuniDO = [ string, [number,number], StatDO ];
export class Municipality {	
	private name: string;
	private coords: [number,number];
	private statistics: Statistics;	
	public constructor () {
		this.name = "";
		this.coords = [0,0];
		this.statistics = new Statistics();
	}
	public getName (): string { return this.name; }
	public getCoords (): [number,number] { return this.coords; }
	public getStatistics (): Statistics { return this.statistics; }
	public setName (n: string): void { this.name = n; }
	public setCoords (c: [number,number]): void { this.coords = c; }
	public setStatistics (s: Statistics): void { 
		//this.statistics.setDataObject(s.getDataObject());
		const temp: string = JSON.stringify(s.getDataObject());
		this.statistics.setDataObject(JSON.parse(temp));
	}
	public getDataObject (): MuniDO {
		return (
			[	this.name,
				this.coords,
				this.statistics.getDataObject()
			]
		);		
	}
	public setDataObject ( all: MuniDO ): void {
		this.name = all[0];
		this.coords = all[1];
		this.statistics.setDataObject(all[2]);	
	}
}
export type CtotDO = [ number, number, number, number ];
export class CountryTotal {
	private land: number;
	private households: number;
	private landValue: number;
	private landRent: number;
	public constructor () {
		this.land = 0;
		this.households = 0;
		this.landValue = 0;
		this.landRent = 0;	
	}	
	public getLand (): number { return this.land; }
	public getHouseholds (): number { return this.households; }
	public getLandValue (): number { return this.landValue; }
	public getLandRent (): number { return this.landRent; }
	public setLand (l: number): void { this.land = l; }
	public setHouseholds (h: number): void { this.households = h; }
	public setLandValue (lv: number): void { this.landValue = lv; }	
	public setLandRent (lr: number): void { this.landRent = lr; }	
	public getDataObject (): CtotDO {
		return (
			[	this.land,
				this.households,
				this.landValue,
				this.landRent
			]
		);		
	}
	public setDataObject ( all: CtotDO ): void {
		this.land = all[0];
		this.households = all[1];
		this.landValue = all[2];	
		this.landRent = all[3];	
	}	
}
export const MUNICIPALITY_OUT_FILE_NAME: string = "municipality-data.json";
export const TOTAL_OUT_FILE_NAME: string = "total-data.json";