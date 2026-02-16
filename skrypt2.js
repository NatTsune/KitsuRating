class PierwszyTryb {
    constructor(obrazykitsu) {
    this.ListaObrazow = [...obrazykitsu];
    this.historiadislike = [];
    this.historialike = [];
    this.ostatnieZdjecie;

    this.przyc_start = document.getElementById('start')
    this.przyc_dislike = document.getElementById('dislike');
    this.przyc_like = document.getElementById('like');
    this.dislikowaneObrazy = document.getElementById('Dislikowane_Obrazy');
    this.likowaneObrazy = document.getElementById('Likowane_Obrazy');
    
    
    this.LosObr = document.getElementById('LosowyObraz');
    
    
    
    this.init();
    
    }
    init() {
        this.przyc_start.addEventListener('click', () => this.ZacznijGre());
        this.przyc_dislike.addEventListener('click', () => this.Dislikuj());
        this.przyc_like.addEventListener('click', () => this.Likuj());

        this.LosObr.onload = () => {
            this.przyc_dislike.style.display = 'block';
            this.przyc_like.style.display = 'block';
            this.przyc_start.style.display = 'none';
        };


    }
    ZacznijGre() {

        this.RandomowyIndex = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr.src = 'obrazykitsu/' + this.ListaObrazow[this.RandomowyIndex] + ".jpg";
        this.ostatnieZdjecie = this.ListaObrazow.splice(this.RandomowyIndex, 1)[0];
        console.log("Wylosowano:", this.ostatnieZdjecie);
    }
    Dislikuj() {
        console.log("Dislikowano, tabela:" , this.historiadislike);
        this.historiadislike.push('obrazykitsu/' + this.ostatnieZdjecie + ".jpg");
        if (this.ListaObrazow.length === 0)
        {
            this.Wyniki();
            return;
        }
        let NowyIndeks;
        
        NowyIndeks = Math.floor(Math.random() * this.ListaObrazow.length);
        //this.RandomowyIndex = NowyIndeks;
        this.LosObr.src = 'obrazykitsu/' + this.ListaObrazow[NowyIndeks] + ".jpg";
        this.ostatnieZdjecie = this.ListaObrazow.splice(NowyIndeks, 1)[0];


        console.log("Wylosowano:", this.ostatnieZdjecie);
        console.log("Pozostało w puli:", this.ListaObrazow.length);
        /*if (this.ListaObrazow.length === 0)
        {
            this.Wyniki();
            return;
        }*/
        
    }
    Likuj() {
        console.log("Likowano, tabela:" , this.historialike);
        this.historialike.push('obrazykitsu/' + this.ostatnieZdjecie + ".jpg");
        if (this.ListaObrazow.length === 0)
        {
            this.Wyniki();
            return;
        }

        let NowyIndeks;
        
        NowyIndeks = Math.floor(Math.random() * this.ListaObrazow.length);
        //this.RandomowyIndex = NowyIndeks;
        this.LosObr.src = 'obrazykitsu/' + this.ListaObrazow[NowyIndeks] + ".jpg";
        this.ostatnieZdjecie = this.ListaObrazow.splice(NowyIndeks, 1)[0];

        console.log("Wylosowano:", this.ostatnieZdjecie);
        
        console.log("Pozostało w puli:", this.ListaObrazow.length);
        /*if (this.ListaObrazow.length === 0)
        {
            this.Wyniki();
            return;
        }*/
    }
    Wyniki(){
        this.przyc_like.style.display = 'none';
        this.przyc_dislike.style.display = 'none';
        this.LosObr.style.display ='none';
        this.dislikowaneObrazy.style.display = 'block';
        this.likowaneObrazy.style.display = 'block';
        console.log("hej1");
        for (let i = 0; i < this.historiadislike.length; i++) {
            const nowyobraz = document.createElement('img');
            console.log(this.historiadislike[i]);
            console.log(i);
            nowyobraz.src = this.historiadislike[i];
            nowyobraz.style.width= '100px';
            nowyobraz.style.height = 'auto';
            this.dislikowaneObrazy.appendChild(nowyobraz);
            console.log("dislike dziala");
        }
        for (let i = 0; i < this.historialike.length; i++) {
            const nowyobraz = document.createElement('img');
            console.log(this.historialike[i]);
            console.log(i);
            nowyobraz.src = this.historialike[i];
            nowyobraz.style.width= '100px';
            nowyobraz.style.height = 'auto';
            this.likowaneObrazy.appendChild(nowyobraz);
            console.log("like dziala");
        }
        console.log("hej2");
    }

}

document.addEventListener('DOMContentLoaded', () =>{
     const obrazykitsu = [
        'kitsu1',
        'kitsu2',
        'kitsu3',
        'kitsu4',
        'kitsu5',
        'kitsu6',
        'kitsu7',
        'kitsu8',
        'kitsu9',
        'kitsu10',
        'kitsu11',
        'kitsu12',
        'kitsu13',
        'kitsu14',
        'kitsu15',
        'kitsu16',
        'kitsu17',
        'kitsu18'
    ];
    const startgry = new PierwszyTryb(obrazykitsu);
});