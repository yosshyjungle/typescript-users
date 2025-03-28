import React, { useState, useEffect } from 'react';
import { ListItem } from "./components/ListItem"
import './App.css';
import axios from 'axios';

export const App = () => {
  // 取得したユーザー情報
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/users/").then((res)=> {
      setUsers(res.data);
    })
  }, []);
  console.log(users);
  return (
    <div>

    </div>
  )
}



// function App() {
//   // let str:string = "A";
//   // str = "10";
//   // // str = 10;
//   // let num:number = 0;
//   // num = 10;
//   // // num = "10";
//   // let bool: boolean = true;
//   // bool = false;
//   // // bool = 10;
//   // const arr1: Array<number> = [0, 1, 2];
//   // arr1.push(10);
//   // // arr1.push("10");
//   // const arr2: number[]= [3, 4, 5];
//   // arr2.push(10);
//   // // arr2 = 10;
//   // let null1:null = null;
//   // // null1 = 1;
//   // let undefined1: undefined = undefined;
//   // let any1: any = true;

//   // // 関数の型指定　戻り値なし
//   // const funcA = (num: number) :void => {
//   //   console.log(num);
//   // }
//   // // funcA(10);
//   // // 関数の型指定　戻り値あり
//   // const funcB = (str1: string) :string => {
//   //   return str1;
//   // }
//   // // console.log(funcB("a"));

//   // const obj:{ str: string, num: number } = {
//   //   str: "A",
//   //   num: 10,
//   // };
//   // obj.str = "B";
//   // obj.num = 20;
//   // // obj.str = 1
//   // // console.log(obj.str);
  
//   // const obj1: { str: string } & { num: number } = {
//   //   str: "A",
//   //   num: 10,
//   // }
//   // obj1.str = "20"
//   // // console.log(obj1)

//   // // ユニオン型
//   // let str2: number | string = "1";
//   // // console.log(str2)

//   // type TypeA = {
//   //   str: string;
//   //   num: number;
//   // }
//   // interface InterfaceA {
//   //   str: string,
//   //   num: number
//   // }
//   // interface InterfaceB {
//   //   str: string,
//   //   bool : boolean
//   // }

//   // type TypeB = {
//   //   str: string;
//   //   bool: boolean;
//   // }

//   // type TypeC = TypeA & TypeB;

//   // const obj2: TypeA = {
//   //   str: "B",
//   //   num: 10,
//   //   // bool: false
//   // }
//   // // console.log(obj2);

//   // type CustomType<T> = {
//   //   val: T;
//   // }

//   // const strObj: CustomType<string>= {
//   //   val: "A"
//   // }

//   // const [ str3, setStr ] = useState<string | number>();
//   // setStr(1);
//   // console.log(str3);
//   // console.log(strObj);
//   // let str:string = "10";
//   // let num: number = 0;
//   // let bool: boolean = true;
//   // let arr: Array<number> = [0, 1, 2];
//   // let arr2:number[] = [2, 4, 6];
//   // const funcA = (num: number): void => {
//   //   console.log(num)
//   // }
//   // const funcB = (str1:string):string => {
//   //   return str1
//   // }
//   // console.log(funcB("a"));

//   // const obj1: {str: string, num: number} = {
//   //   str: "A",
//   //   num: 1
//   // }
  
//   // console.log(str, num, bool, arr, arr2, obj1.str);
  
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App;
