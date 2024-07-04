//Tipos primitivos
let valor:number = 300;
let nome:string = "";
let isPago:boolean = true;
let qualquer:any = "";
qualquer =22;

//arrays
const lista:number[] = []
lista.push(13,12.3,15,24);

//tipos personalizados
type Transacao {
    tipoTransacao:String;
    data:Date;
    valor:number;
}

const novaTransacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0

}