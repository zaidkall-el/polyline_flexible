import {Component, OnInit} from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poly';
  polyline: any = 'BG882lkC8vvkUoasJoQgFgtBgUs7B0K84BsJk6BgPopB8LoakDopBkNkNgF4uC4S8a8L0FsEkhBkDozBsJ8QsEoQoGgP4DkIgFssB8L4X8GkcsE4XkIwC8B0KoBwM0FwHgK8LsE4I8BsJ4DsO8G0KAsOjDwH3I4IUkrBrJopBvHgpD3SokBrEwWnGwgB3DgiE_JswE7VsJUgFnBgKvCkIrEsYrJoa_J4mBvMkrBjS4S3I8G4DoLgF0mC0oB4hB8Q8agP4X0UgjBgjB4hB0jBkmBgoBof0oB4rB8iCkuC47D8sCw1Doa4hBoasd03BsgC8oEsmEoLoL4DsEsEoBsEnB4DrEoBzFnBzF3DrE7L7azKvgBjN3rBrEjSnGjX3DrOv-B_1J3I7fvHzZvM_dnL7a7L7VvMzUvgB_sB74BzrCjD3I8BvH7BvHrE_EzF7BzF8BnkBjrBjX_dniCz1CvC_JzKjSvHnQT_OwCnLkInLoLnG4kC3X8GzFof7GwoC3Sg_CnakkCzUsnBvM89BzU4lErxBs2BnVw0BnVsvCriBsnBjS' +
    '0yB3X4XnL4nD3wBwhIj2D80D7uBo9B3Xw5B3S4DnBo9B_O4kC_OkwBvHg1CnL8iC7Bs7BjDkzC7GwgBvConCzKs7BjNsOjD8vDzZ8azFo9BrOkrBzK0ZnG8fvHouB3I8xCnQkmB3IoLvC08BrOogD7Vg6CrY4iDvgBgkDrnBkSjI89B7ao7CztB8kBzUg1C_xBsiB7VssBjc47NvuJ03BvlBs-Cj_BskFvwDk4Cz8B8zBjhBof_Ts-Cj6Bg4DjkCgsE_qC8lDr7B4_BrnB0tB7fopB_d8gD3pCkhBjck1B3wBouBzoBgoB3mB0uD7qDwqBvqBw8Cz6Cg8Bz8BkkC_gCoiCn9B06CrvCgnEvwDkwB3mBksDnxC0lFr8D4wBjmBkmBrdosCr7B0rC31B03B3c0yBzUouBnL0PjDsxBzF49CjD8nC7Go9BzP8pBrOgtBnVw5B_iB8frYgtBnpBkrB7pBkhB7f4rBzoB4_BnzB46B7pBsgC3mB4zCvqB8oE3_B44CjmBw8CnkBgmCvbouBnQoxC_Yo9BnQkrBjIssBrEsd7B0mCAwvB0F4rBwHgwCwWgoBsO8kBoQosC0oBwgBoa8zBkmBwqBwlBsxBsxBo9BgmC4jFwlGgtB0yBw0Bk1Bk6Bk1B8pBkhB4wBkmB4_BgoB8uBkXs4Fk4C89B4cwoC8kB4hB4NkIsJ8awRwR4NoQwRkN4NsJ8LkI8LwHwRgF4I8BgKgFoGgFsE8ard0ZvbsJnLoVjXsJzFgP_EoLrEsE_E0FrEkD7GsEjN0FrJ8GjI8GrE4IzFsd7V08BrxBgUnV0P_TsOnV0K3SsJrTwCT8BvCUjDTjD4S_xBoQ3mB0UzyB8Vj1BkXj1BgPjhB0KzZgFjNkI3N4DnBsE3DUrETrEsE_JsJ7QkDjI8xCnjE8-DzoG0tBrqCwW_iBwRjc0Zr2BgPriBwRzjB4cj_Bk6BrhE0FnLgoB34CsTjrB8Q_iB8VrxB4hBnnCkhB_qC4XnzBoVnuBgF_JwMna' +
    'gZ31B4IrTgFjDkDvHwCnB0KkIgFA8GsJ0KgKgP4SkIsJ0KsiB8LkmB4NgZsJkmB0FkN4D8LsEoL8LgUkIsOkDgF0FkIvCwgBU4IkDwHwC4D08BrgC8QoV8V0Zk1Bk_B4I4XoG8VsnBw6D8G0ZsJgtBwCkNoB8a7GwgGkDwR4IsO0KwMkI4I8L8LwMkIk1BsnB46B82CgoBw-B41B04DofwjCwbk6Bl_ErB'
  arrayOfChar: any[] = []
  res:any[]=[]
  polylinePoints: any[] = []
  mapContainerCompleted: any
  mapCompletted: any
  DECODING_TABLE: any[] = [
    62, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, -1, -1, -1, -1, 63, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
  ];
  FORMAT_VERSION = 1;
  ABSENT = 0;
  LEVEL = 1;
  ALTITUDE = 2;
  ELEVATION = 3;
  CUSTOM1 = 6;
  CUSTOM2 = 7;

  getifNumberIsBigint(element: any): any {
    var item
    if (typeof BigInt(element) != "undefined") {
      item = BigInt(element)
    } else {
      item = Number(element)
    }
    return item
  }

  decodeChar(char: any) {
    const charCode = char.charCodeAt(0);
    return this.DECODING_TABLE[charCode - 45];

  }

  decodeUnsignedValues(): any {
    let result = this.getifNumberIsBigint(0);
    let shift = this.getifNumberIsBigint(0);
    const resList: any[] = [];
    Object.assign(this.arrayOfChar, this.polyline)
    console.log(this.arrayOfChar)
    this.arrayOfChar.forEach((char, i) => {
      var value = this.getifNumberIsBigint(this.decodeChar(char))

      result |= (value & this.getifNumberIsBigint(0x1F)) << shift
      if ((value & this.getifNumberIsBigint(0x20)) === this.getifNumberIsBigint(0)) {
        resList.push(result);
        console.log(resList)
        result = this.getifNumberIsBigint(0);
        shift = this.getifNumberIsBigint(0);
      } else {
        shift += this.getifNumberIsBigint(5);
      }
    })
    if (shift > 0) {
      throw new Error('Invalid encoding');
    }
    return resList
  }

  decodeHeader(version: any, encodedHeader: any) {
    if (+version.toString() !== this.FORMAT_VERSION) {
      throw new Error('Invalid format version');
    }
    const headerNumber = +encodedHeader.toString();
    const precision = headerNumber & 15;
    const thirdDim = (headerNumber >> 4) & 7;
    const thirdDimPrecision = (headerNumber >> 7) & 15;
    return {precision, thirdDim, thirdDimPrecision};
  }
  toSigned(val:any) {
    // Decode the sign from an unsigned value
    let res = val;
    if (res & this.getifNumberIsBigint(1)) {
      res = ~res;
    }
    res >>= this.getifNumberIsBigint(1);
    return +res.toString();
  }
  Decode():any{
    var decoder = this.decodeUnsignedValues()
    console.log(decoder)
    var header = this.decodeHeader(decoder[0], decoder[1])
    console.log(header)
    const factorDegree = 10 ** header.precision;
    const factorZ = 10 ** header.thirdDimPrecision;
    const { thirdDim } = header;
    let lastLat = 0;
    let lastLng = 0;
    let lastZ = 0;
    const res:any[] = [];
    let i = 2;
    for (;i < decoder.length;) {
      const deltaLat = this.toSigned(decoder[i]) / factorDegree;
      const deltaLng = this.toSigned(decoder[i + 1]) / factorDegree;
      lastLat += deltaLat;
      lastLng += deltaLng;
      if (thirdDim) {
        const deltaZ = this.toSigned(decoder[i + 2]) / factorZ;
        lastZ += deltaZ;
        res.push([lastLat, lastLng, lastZ]);
        i += 3;
      } else {
        res.push([lastLat, lastLng]);
        i += 2;
      }
    }
    return res
  }
  ngOnInit() {
    this.res=this.Decode()
    this.removeMap().then(
      res=>{
        if (res) {
          this.mapContainerCompleted = document.getElementById('map')
          this.mapCompletted = L.map(this.mapContainerCompleted, {center: [0, 0], zoom: 2});

          console.log(this.mapCompletted)
          const mainLayer = L.tileLayer('https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=zICvqtEhPw8V-WwBKp1gA9hSemzg1c3CwJLJhrZnW5k', {
            minZoom: 2,
            maxZoom: 17,
          });
          mainLayer.addTo(this.mapCompletted);
        }
      }
    ).then(
      res=>{
        this.polylineTable().then(
          async res => {
            var polylineP = await res
            if (polylineP) {
              var polyline = L.polyline(polylineP).addTo(this.mapCompletted)
              this.mapCompletted.fitBounds(polyline.getBounds() );
            }
          }
        )
      }
    )
      }
  async polylineTable(): Promise<any> {
   if (Object.keys(this.res).length>0){
     for (let i of this.res) {
       console.log(i)
       this.polylinePoints.push(i)
       console.log(this.polylinePoints)
     }
   }

    return this.polylinePoints
  }
  async removeMap(): Promise<any> {
    if(this.mapCompletted){
      this.mapCompletted.remove()
      this.polylinePoints=[]

    }
    return true
  }
}
