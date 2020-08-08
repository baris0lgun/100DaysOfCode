
// let number = 12;

// function print() {
    
//   console.log(number);
// }

// function log() {
//   number = 14;
//   print();
// }


// console.log(number)
// log();



// function foo(a) {  
//     var b = 2;  // some code  
//     function bar() {  // ...  }
//     var c = 3;
//   }
//   foo();


// // Tanımlanan her fonksiyon kendisi için bir scope oluşturur.
// //  Yukarıdaki kod parçasını incelediğimizde burada üç farklı iç içe geçmiş scope olduğunu görürüz.
// //  Bunlardan ilki global scope ki bunu block seviyesinde scope olarak düşünebiliriz.


// // Kısaca closure, bir fonksiyonun kendi lexical scope’u dışında çalıştırılsa bile bu scope’a erişebiliyor olmasıdır. Nasıl mı?


// // global scope
// function foo() {  // foo için scope, bar için lexical scope
//     var a = 2;  
//     function bar() {  
//       console.log( a ); // 2  
//     }  
//     return bar; // foo'a ait kapsam'a erişmek için kapı
//   }
//   var baz = foo(); // kapıyı buldun
//   baz(); // Ve evet Closure!

// // Normalde foo’nun dışından kendi kapsamındaki bir değişkene erişemezdik
// // fakat bar fonksiyonu bu kapsama erişebilir durumda ve foo bar fonksiyonunu açık kapı olarak geri dönüyor.