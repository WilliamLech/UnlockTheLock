export class TentativeCadena {
  id: number;
  digits: number[] = [];
  digitBon: boolean[] = [];


  constructor(id: number, digits: number[], digitBon: boolean[]) {
    this.digits = digits;
    this.digitBon = digitBon;
    this.id = id;
  }
}
