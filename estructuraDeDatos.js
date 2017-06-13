// Vamos a usar estos tests para probar si nuestro código funciona bien.

var assert = require('assert');

// // # Arreglos - Estadísticas
//
// var array = [15, 47, 14, 42, 31,
// 81, 4, 14, 77, 82,
// 25, 13, 18, 14, 33,
// 10, 64, 43, 41, 5,
// 59, 31, 15, 80, 26,
// 66, 50, 35, 77, 46,
// 98, 26, 42, 8, 76,
// 60, 81, 78, 45, 86,
// 69, 37, 75, 76, 20,
// 32, 78, 4, 55, 8,
// 89, 62, 50, 13, 74,
// 94, 86, 51, 36, 42,
// 87, 17, 42, 25, 35,
// 90, 57, 77, 60, 29,
// 14, 60, 57, 81, 26,
// 46, 99, 47, 65, 61,
// 63, 15, 72, 38, 71,
// 67, 29, 72, 25, 33,
// 70, 63, 23, 33, 84,
// 91, 26, 31, 59, 1]
//
// // Mínimo
// function min(array) {
//   var min = array[0]
//   for (var i = 0; i < array.length; i++) {
//     if (array[i]< min) {
//       min = array[i]
//
//     }
//
//   }
// console.log("el minimo es:"+ min)
// return min
// }
//
// var minValue = min(array);
// assert.equal(minValue, 1, 'Minimo no coincide');
//
// // Maximo valor
// function max (array){
//   var max = array [0]
//   for (var i = 0; i < array.length; i++) {
//     if (array[i]> max) {
//       max = array[i]
//     }
//   }
//   console.log('el maximo es:'+ max)
//   return max
// }
//
//
// var maxValue = max(array);
// assert.equal(maxValue, 99, 'Maximo no coincide');
//
// // Total
// function total(array) {
//   var total=0
//   for (var i = 0; i < array.length; i++) {
//     total = total + array[i]
//   }
//
//   return total
// }
// var totalValue = total(array);
// assert.equal(totalValue, 4850, 'Total no coincide');
//
// // Promedio
//
// function promedio(array){
//   return total(array)/array.length
//    }
//
// var avgValue = promedio(array);
// console.log("el promedio es:" + avgValue)
// assert.equal(avgValue, 48.50, 'Avg no coincide');
//
// // Desviacion Standart: el cuadrado de la resta entre el numero menos el promedio
//
// function desviacion(array){
//     var prom = promedio(array)
//     var acum = 0
//     for (var i = 0; i < array.length; i++) {
//       acum = acum + Math.pow(array[i]- prom, 2)
//     }
//     return Math.pow(acum/array.length,0.5)
// }
//
// var stdValue = desviacion(array);
// console.log ("la desviacion es:" + stdValue)
// assert.ok((stdValue - 26.392233706149238) < 0.1, 'Std Deviation no coincide');
//
//
// // Desviacion Standart
// function variance(array){
//   return Math.pow(stdValue, 2)
// }
// var stdVariance = variance(array);
// console.log("la varianza es:" + stdVariance)
// assert.ok((stdVariance - 696.55) < 0.1, 'Variance Deviation no coincide');


// // # Pilas
class node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

// class pila {
//   constructor() {
//     this.head = null,
//     this.length = 0;
//   }
//   insert(value){
//     var nodo = new node(value)
//     var head = this.head;
//     if (!head) {
//       this.head = nodo;
//     } else {
//       nodo.next = this.head;
//       this.head = nodo;
//     }
//     this.length++;
//     return this;
//   }
//   pop(value){
//     var nodi = new node(value);
//     var head1 = this.head;
//     if (this.head.next === null) {
//       this.head = null;
//     } else {
//       this.head = this.head.next
//     }
//     this.length--;
//     return head1.data
//   }
//   getAll(value) {
//     var pointer = this.head;
//     if (!pointer) {
//       console.log('no hay nada en la pila')
//     }
//     while (pointer) {
//       console.log(pointer.data);
//       pointer = pointer.next;
//     }
//   }
//   len(value){
//     return this.length;
//   }
// }
//
//
//
//
// var stack = new pila();
//
// stack.insert(1);
// assert.equal(stack.pop(), 1, 'No funciona Pop');
// assert.equal(stack.len(), 0, 'No cuenta bien los elementos');
//
// stack.insert(1);
// stack.insert(2);
// stack.insert(3);
// assert.equal(stack.len(), 3, 'No cuenta bien los elementos');
//
// var array = [1, 2, 3, 4];
//
//
// function invertir(array) {
//   var stack = new pila()
//   while (array.length) {
//     stack.insert(array.shift());
//   }
//   while (stack.length) {
//     array.push(stack.pop());
//   }
//   console.log(array)
//   return array
// }
//
// inversedArray = invertir(array);
// assert.deepEqual(inversedArray, [ 4, 3, 2, 1 ], 'No invierte bien.');
//

// # listas single and double
class Lista {
  constructor() {
    this.head = null,
    this.length = 0;
  }
  insert(value){
    var nodo = new node(value)
    var head = this.head;
    if (!head) {
      this.head = nodo;
    } else {
      nodo.next = this.head;
      this.head = nodo;
    }
    this.length++;
    return this;
  }
  getIndex(index){
    var i = 0
    var current = this.head
    while (i<index) {
      current = current.next;
      i++;
    }
    console.log(current.data);
    return current.data;
  }

  get(value){
    var current = this.head;
    var data = current.data;
    if (this.head.next === null) {
      this.head = null;
    } else {
      this.head = this.head.next
    }
    this.length--;
    console.log(data);
    return data;
  }
  pop(value){
    var current = this.head;
    while (current.next.next) {
      current = current.next
    }
    var data = current.next.data
    current.next = null
    this.length--;
    return data;
  }
  find(value){
    var current = this.head;
    while (current != null) {
      if (current.data == value) {
        return value
      }
      current = current.next;
    }
    return null
  }
  getAll(value) {
    var pointer = this.head;
    if (!pointer) {
      console.log('no hay nada en la pila')
    }
    while (pointer) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
  }
  len(value){
    return this.length;
  }
}

var lista = new Lista();

lista.insert(1);
lista.insert(2);
lista.insert(3);
lista.insert(4);

// lista.getAll() // 1, 2, 3, 4
// lista.get(2)
// console.log(lista)
// assert.equal(lista.get(0), 1, 'No encontró el primer elemento');
// assert.equal(lista.get(3), 4, 'No encontró el ultimo elemento');
//

// console.log('get', lista.get())
assert.equal(lista.get(), 4, 'No sacó bien el primero');

assert.equal(lista.pop(), 1, 'No sacó bien el último');

// assert.equal(lista.find(2), 2, 'No busca bien');
// assert.equal(lista.find(4), null, 'No busca bien');


class Node {
  constructor(data){
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class listaDoble{
  constructor(){
    this.head = null;
    this.length = 0 ;
  }
  insert(value){
    var nodo = new node(value)
    var head = this.head;
    if (!head) {
      this.head = nodo;
    } else {
      nodo.next = this.head;
      this.head.previous = nodo;
      this.head = nodo;
    }
    this.length++;
    return this;
  }
  getIndex(index){
    var i = 0
    var current = this.head
    while (i<index) {
      current = current.next;
      i++;
    }
    console.log(current.data);
    return current.data;
  }

  get(value){
    var current = this.head;
    var data = current.data;
    if (this.head.next === null) {
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.length--;
    console.log(data);
    return data;
  }
  pop(value){
    var current = this.head;
    while (current.next.next) {
      current = current.next
    }
    var data = current.next.data
    current.next = null
    this.length--;
    return data;
  }
  find(value){
    var current = this.head;
    while (current != null) {
      if (current.data == value) {
        return value
      }
      current = current.next;
    }
    return null
  }
  getAll(value) {
    var pointer = this.head;
    if (!pointer) {
      console.log('no hay nada en la pila')
    }
    while (pointer) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
  }
  len(value){
    return this.length;
  }



  }
}

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(n){
    var nuevoNodo = new Node(n);
    if (n > this.data) {
      if (!this.right) {
        this.right = nuevoNodo;
        return
      } else {
        this.right.insert(n);
      }
    } else {
      if (!this.left) {
        this.left = nuevoNodo;
      } else {
        this.left.insert(n);
      }
    }
  }
}

var tree = new Node(5);
tree.insert(6);
tree.insert(7);
