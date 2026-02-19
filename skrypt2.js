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
    this.przyc_start.style.display = 'block';
    
    
    
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


class DrugiTryb {
    constructor(obrazykitsu){

        this.ListaObrazow = [...obrazykitsu];
        this.ostatnieZdjecie;
        this.ostatnieZdjecie2;
        this.wybraneObrazyhis = [];
        this.niewybraneObrazyhis = [];

        this.przyc_start = document.getElementById('start2');
        this.przyc_wybierz1 = document.getElementById('przycwybierz1');
        this.przyc_wybierz2 = document.getElementById('przycwybierz2');
        this.wybraneObrazy = document.getElementById('wybraneObrazy');
        this.niewybraneObrazy = document.getElementById('niewybraneObrazy');


        this.LosObr1 = document.getElementById('LosowyObraz1');
        this.LosObr2 = document.getElementById('LosowyObraz2');
        this.przyc_start.style.display = 'block';
        this.tekst1 = document.getElementById('tekst2tryb');

        this.init();
    
    }
    init() {
        this.przyc_start.addEventListener('click', () => this.ZacznijGre2());
        this.przyc_wybierz1.addEventListener('click', () => this.Wybierz1());
        this.przyc_wybierz2.addEventListener('click', () => this.Wybierz2());

        this.LosObr2.onload = () => {
            this.przyc_start.style.display = 'none';
            this.tekst1.style.display = 'block';
            this.przyc_wybierz1.style.display = 'inline-block';
            this.przyc_wybierz2.style.display = 'inline-block';
        };


    }

    ZacznijGre2() {

        this.RandomowyIndex = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr1.src = 'obrazykitsu/' + this.ListaObrazow[this.RandomowyIndex] + ".jpg";
        this.ostatnieZdjecie1 = this.ListaObrazow.splice(this.RandomowyIndex, 1)[0];
        this.RandomowyIndex2 = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr2.src = 'obrazykitsu/' + this.ListaObrazow[this.RandomowyIndex2] + ".jpg";
        this.ostatnieZdjecie2 = this.ListaObrazow.splice(this.RandomowyIndex2, 1)[0];
        console.log("Wylosowano:  ", this.ostatnieZdjecie1, " i: ", this.ostatnieZdjecie2);
    }

    Wybierz1() {
        console.log("Wybrano 1");
        this.wybraneObrazyhis.push('obrazykitsu/' + this.ostatnieZdjecie1 + ".jpg");
        this.niewybraneObrazyhis.push('obrazykitsu/' + this.ostatnieZdjecie2 + ".jpg");
        if (this.ListaObrazow.length === 0)
        {
            this.Wyniki1();
            return;
        }
        let NowyIndeks1;
        let NowyIndeks2;
        
        NowyIndeks1 = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr1.src = 'obrazykitsu/' + this.ListaObrazow[NowyIndeks1] + ".jpg";
        this.ostatnieZdjecie1 = this.ListaObrazow.splice(NowyIndeks1, 1)[0];

        NowyIndeks2 = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr2.src = 'obrazykitsu/' + this.ListaObrazow[NowyIndeks2] + ".jpg";
        this.ostatnieZdjecie2 = this.ListaObrazow.splice(NowyIndeks2, 1)[0];


        console.log("Wylosowano:", this.ostatnieZdjecie1);
        console.log("Wylosowano:", this.ostatnieZdjecie2);
        console.log("Pozostało w puli:", this.ListaObrazow.length);
    

    }
    Wybierz2() {
        console.log("Wybrano 2");
        this.wybraneObrazyhis.push('obrazykitsu/' + this.ostatnieZdjecie2 + ".jpg");
        this.niewybraneObrazyhis.push('obrazykitsu/' + this.ostatnieZdjecie1 + ".jpg");
        if (this.ListaObrazow.length === 0)
        {
            this.Wyniki1();
            return;
        }
        let NowyIndeks1;
        let NowyIndeks2;
        
        NowyIndeks1 = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr1.src = 'obrazykitsu/' + this.ListaObrazow[NowyIndeks1] + ".jpg";
        this.ostatnieZdjecie1 = this.ListaObrazow.splice(NowyIndeks1, 1)[0];

        NowyIndeks2 = Math.floor(Math.random() * this.ListaObrazow.length);
        this.LosObr2.src = 'obrazykitsu/' + this.ListaObrazow[NowyIndeks2] + ".jpg";
        this.ostatnieZdjecie2 = this.ListaObrazow.splice(NowyIndeks2, 1)[0];


        console.log("Wylosowano:", this.ostatnieZdjecie1);
        console.log("Wylosowano:", this.ostatnieZdjecie2);
        console.log("Pozostało w puli:", this.ListaObrazow.length);
    

    }

    Wyniki1(){
        this.przyc_wybierz1.style.display = 'none';
        this.przyc_wybierz2.style.display = 'none';
        this.LosObr1.style.display ='none';
        this.LosObr2.style.display ='none';
        this.tekst1.style.display = 'none';
        this.wybraneObrazy.style.display = 'block';
        this.niewybraneObrazy.style.display = 'block';
        console.log('tryb2 etap1 skonczony');
        for (let i = 0; i < this.wybraneObrazyhis.length; i++) {
            const nowyobraz = document.createElement('img');
            console.log(this.wybraneObrazyhis[i]);
            console.log(i);
            nowyobraz.src = this.wybraneObrazyhis[i];
            nowyobraz.style.width= '100px';
            nowyobraz.style.height = 'auto';
            this.wybraneObrazy.appendChild(nowyobraz);
            console.log("wybraneobr dziala");
        }
        for (let i = 0; i < this.niewybraneObrazyhis.length; i++) {
            const nowyobraz = document.createElement('img');
            console.log(this.niewybraneObrazyhis[i]);
            console.log(i);
            nowyobraz.src = this.niewybraneObrazyhis[i];
            nowyobraz.style.width= '100px';
            nowyobraz.style.height = 'auto';
            this.niewybraneObrazy.appendChild(nowyobraz);
            console.log("niewybraneobr dziala");
        }
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
    
    przyc_1tryb = document.getElementById('Tryb1');
    przyc_2tryb = document.getElementById('Tryb2');
    przyc_3tryb = document.getElementById('Tryb3');
    tryby = document.getElementById('Tryby');
    przyc_1tryb.addEventListener('click', () => {
        tryby.style.display='none';
        const startgry1 = new PierwszyTryb(obrazykitsu);
    });
    przyc_2tryb.addEventListener('click', () => {
        tryby.style.display='none';
        const startgry2 = new DrugiTryb(obrazykitsu);
    });
    
});




