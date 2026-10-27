const tipos = ['estagio','curso','vento']
const modalidades = ['presencial','online','hibrido']

//função que verifica o formato AAAA-MM-DD
//rejeita 2026-02-30, por exemplo

function dataValida(texto){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)){
        return false
    }

    const [ano,mes,dia] = texto.split('-').map(Number)
    const data = new Date(ano,mes - 1,dia)
    return(
        data.getFullYear() === ano && 
        data.getMonth() === mes &&
        data.getDate() === dia
    )
}

function textoPreenchido(valor){
    return typeof valor === 'string' && valor.trim() !== ''
}

//Middleware: valida o corpo da requisição antes de chegar à rota

function validarOportunidade(req,res,next){
    const {titulo,tipo,instituicao,modalidade,prazo,link,descricao} = req.body ?? {}
    const erros = []

    if(!textoPreenchido(titulo) || titulo.trim().length < 3){
        erros.push('O titulo é obrigatório e deve ter ao menos 4 caracteres.')
    }

    if(!tipos.includes(tipo)){
        erros.push[`O tipo deve ser um desses: ${tipos.join(', ')}.`]
    }
}