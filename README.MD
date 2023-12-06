# Typescript

In TypeScript, i generics sono un meccanismo che consente di scrivere codice in modo flessibile in termini di tipi di dati. Essi consentono la creazione di componenti che possono lavorare su vari tipi di dati senza specificare un tipo particolare in anticipo. Questo aumenta la flessibilità e la riusabilità del codice.
Nel contesto dei generics, il termine "generico" si riferisce a qualcosa che è generico o non specifico, in modo che possa essere adattato per lavorare con diversi tipi di dati. 

## generics built in
In TypeScript, esistono alcuni tipi generici incorporati che possono essere utilizzati in diversi contesti. Questi sono spesso chiamati "generics incorporati" o "tipi generici incorporati". Alcuni sono:
1. `Array<T>`
    -
    Il tipo Array<T> è un tipo generico incorporato che rappresenta un array di elementi del tipo T.

        const numeri: Array<number> = [1, 2, 3];
        const parole: Array<string> = ['ciao', 'mondo'];
2. `Promise<T>`
    -
    Il tipo Promise<T> rappresenta una promessa che restituirà un valore del tipo T quando risolta.

        const promessaNumerica: Promise<number> = new Promise(resolve => resolve(42));
        const promessaStringa: Promise<string> = new Promise(resolve => resolve('Hello'));
3. `Map<K, V>`
    -
    Il tipo Map<K, V> rappresenta una mappa o dizionario in cui le chiavi sono del tipo K e i valori sono del tipo V.
        
        const mappaNumerica: Map<string, number> = new Map();
        mappaNumerica.set('uno', 1);
        mappaNumerica.set('due', 2);
4. `Set<T>`
    -
    Il tipo Set<T> rappresenta un insieme di valori univoci del tipo T.

        const insiemeNumerico: Set<number> = new Set();
        insiemeNumerico.add(1);
        insiemeNumerico.add(2);
5. `Record<K, T>`
    -
    Il tipo Record<K, T> rappresenta un oggetto con chiavi di tipo K e valori di tipo T.

        const dizionario: Record<string, number> = { 'uno': 1, 'due': 2 };


## constraint T extends ... 
Il concetto di "constraint" (vincolo) in TypeScript si riferisce alla limitazione dei tipi che possono essere utilizzati con un parametro generico T in una funzione o classe generica. Quando usi T extends ..., stai specificando che il tipo T deve estendere (essere almeno un sottoinsieme di) un certo tipo o insieme di tipi.

        function nomeFunzione<T extends TipoVincolo>(parametro: T): void {
    // corpo della funzione
    }
Ogni volta che utilizzi T in questa funzione, TypeScript garantirà che il tipo T sia compatibile con il tipo specificato nel vincolo.

- extends: Indica che il tipo T deve estendere il tipo specificato o essere assegnabile a esso. Può essere utilizzato con interfacce, classi o altri tipi.

- TipoVincolo: Specifica il tipo o i tipi a cui T è vincolato. Può essere un tipo predefinito come number, string, o un altro tipo personalizzato.

Esempio : 

    // Definiamo una funzione che accetta solo tipi numerici
    function somma<T extends number>(a: T, b: T): T {
        return a + b;
    }

    const risultatoNumero: number = somma(3, 5);

    // La constante risultatoStringa causerebbe un errore perché 'string' non estende 'number'
    const risultatoStringa: number = somma('ciao', 'mondo');
In questo esempio, il vincolo T extends number indica che la funzione somma può essere utilizzata solo con tipi che estendono il tipo number.
 
## Class generics
Le classi generiche in TypeScript consentono di creare classi che possono lavorare con diversi tipi di dati senza dover definire il tipo specifico in anticipo. Ciò fornisce maggiore flessibilità e riusabilità nel tuo codice.

