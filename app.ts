/* ARRAY<T> */
// definire in maniera generica un array di string e numeri 
const arr : Array<string> = ['ciao','arrivederci']


function creaArray<T>(items: T): T[]{
return new Array().concat(items)
}

// inference deduce automaticamente il tipo
const array1 = creaArray([1,2,3])
const array2 = creaArray(['a','b'])
const array9 = creaArray(['tipo generico :',10, true, [], {}])

// dentro la parentesi possiamo passare solo un argometo come definito prima, ma se passiamo l'argomento array, allora all'interno possiamo passare più argomenti
// così definiamo il tipo che vogliamo passare all'interno l'array
const array3 = creaArray<string[]>(['Tipo string[]'])
const array4 = creaArray<string>('Tipo string')
const array5 = creaArray<number>(4)
const array6 = creaArray<number[]>([5,6,7])
const array7 = creaArray<boolean[]>([true, false])
const array8 = creaArray<boolean>(true)


// generics con il vincolo number e string.
function creaArray2<T extends number | string>(items : T): T[]{
    return new Array().concat(items)
}

// il tipo boolean non soddisfa il vicolo number
const array10 = creaArray2<boolean>(['ciao',1]) 

// Creare una classe definendo il tipo
class Prova<T>{
    private lista : string[] = []
    
    addItem(item : string){
        this.lista.push(item)
    }

    removeItem(item : string){
        this.lista.splice(this.lista.indexOf(item,1))
    }
}

// Definiamo il tipo che passiamo generics
const listaString = new Prova<string>()
listaString.addItem('Aggiungo questa stringa.')

class tabellone<T>{
    private list : T[] = []

    addItem(item : T){
        this.list.push(item)
    }

    removeItem(item : T){
        this.list.splice(this.list.indexOf(item,1))
    }
}

const listaTabelloneNumber = new tabellone<number>()
listaTabelloneNumber.addItem(1)
const listaTabelloneString = new tabellone<string>()
listaTabelloneString.addItem('Amoroso')