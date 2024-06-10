 // 1
 let a = "Привет, Simbirsoft";
 let b = 2022;
 let c = true;
 let d = "false";
 
 console.log(typeof a); // string
 console.log(typeof b); // number
 console.log(typeof c); // boolean
 console.log(typeof d); // string
 
 // 2
 let str1 = 'Привет, ';
 let str2 = 'Мир!';
 console.log(str1 + str2); // Вывод: Привет, Мир!
 
 // 3
 let name = "Тимофей";
 console.log('Привет, ' + name + '!');
 
 // 4
 let age = 18;
 console.log('Мне ' + age + ' лет!');
 
 // 5
 let str = 'abcde';
 console.log(str[0]); // a
 console.log(str[2]); // c
 console.log(str[4]); // e
 
 // 6
 let hour = new Date().getHours();
 let minute = new Date().getMinutes();
 let second = new Date().getSeconds();
 console.log(hour + ':' + minute + ':' + second);
 
 // 7
 let num = 16;
 let sqrt = Math.sqrt(num);
 console.log(sqrt.toFixed(3)); // 4.000
 
 // 8
 let user = {
   id: 1,
   login: "Administrator",
   email: "admin@admin.admin",
   name: "Иванов Анатолий",
   age: 23,
   account: '125$',
   phone: '+79602542214',
   address: {
     city: 'г. Ульяновск',
     street: 'ул. Ленина',
     build: 'д.25',
     flat: 'кв.15',
   },
   isActive: true,
   role: {
     id: 1,
     title: "Администратор",
     name: "administrator",
   },
 };
 console.log(user.name);
 console.log(user.age);
 console.log(parseFloat(user.account.replace('$', '')));
 console.log(user.address.city + ', ' + user.address.street + ', ' + user.address.build + ', ' + user.address.flat);
 console.log(user.role.title);
 console.log(new Date().getFullYear() - user.age);
 console.log(user.name.split(' ')[1]);