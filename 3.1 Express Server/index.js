// Importa il modulo Express per creare un server web.
import express from "express";

// Crea un'istanza di Express e assegna la variabile 'app'.
const app = express();

// Definisce la porta su cui il server ascolterà le richieste.
const port = 3000;

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

/*
In sintesi, questo codice crea un server web utilizzando Express e lo avvia per ascoltare le richieste sulla porta 3000. 
Quando il server viene avviato, stampa un messaggio sulla console per confermare che è in esecuzione.
*/


/*
import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
*/
