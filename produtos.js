const Prod_1001 = {
    fornecedor: 'NetShoes',
    fabricante: 'Nike',
    cor: 'Preta',
    numero: '41',
    preco: '300',
    producao: ["36", "37", "38", "39", "40", "41", "42", "43"],
    codProd: '00010001',
}

function Fabricantes(nomeFabr, codFabr) {
    this.nomeFabr = nomeFabr;
    this.codFabr = codFabr;
    this.apresenta = function () {
        console.log(this.nomeFabr + " é nosso fabricante" + this.codFabr);
    }
}

const fabricante01 = new Fabricantes("Nike", "0001");
console.log(fabricante01);
const fabricante02 = new Fabricantes("Adidas", "0002");
console.log(fabricante02);
const fabricante03 = new Fabricantes("Puma", "0003");
console.log(fabricante03);

function Fornecedores(nomeFabr, nomeForn, tipoProd, codForn) {
    this.nomeForn = nomeForn;
    this.tipoProd = tipoProd;
    this.codForn = codForn;
}    

function Produto(fornecedor, fabricante, cor, numero, preco, producao, codProd) {
    this.fornecedor = fornecedor;
    this.fabricante = fabricante;
    this.cor = cor;
    this.numero = numero;
    this.preco = preco;
    this.producao = producao;
    this.codProd = codProd;
}

const Prod_1003 = new Produto("Wordtenis", "Nike", "Branco", "42", "360", "['36', '37', '38', '39', '40', '41', '42', '43']", "00010002");
const Prod_1004 = new Produto("Wordtenis", "Nike", "Marrom", "40", "385", "['37', '38', '39', '40', '41', '42']", "000010003");
const Prod_1005 = new Produto("Netshoes", "Adidas", "Branco", "38", "310", "['38', '39', '40', '41']", "00020001");

console.log(Object.keys(Prod_1001));
console.log(Object.keys(Prod_1001).length);

console.log(Prod_1001);
console.log(Prod_1003);
console.log(Prod_1004);
console.log(Prod_1005);

function exibeAtributo(nomeAtributo) {
    console.log(Prod_1005[nomeAtributo])
}

exibeAtributo('producao')

const Fornecedor09 = new Fornecedores("Puma", "Decathlon LTDA", "11", "0009");
const Fornecedor59 = new Fornecedores("Nike", "GalinhaMorta", "32", "0059");
const Fornecedor77 = new Fornecedores("Adidas", "Lojas Pontal", "19", "0077");

console.log(Fornecedor09);
console.log(Fornecedor59);
console.log(Fornecedor77);