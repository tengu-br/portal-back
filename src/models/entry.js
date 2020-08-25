const mongoose = require('mongoose')
const date = require('date-and-time');
const { all, isEmoji, extractEmoji } = require('extract-emoji');
// import { all, isEmoji, extractEmoji } from 'extract-emoji';

const entrySchema = new mongoose.Schema({
    Ordem: {
        type: Number
    },
    Canal: {
        type: String,
    },
    Midia: {
        type: String,
    },
    Link: {
        type: String,
    },
    Data: {
        type: String,
    },
    AutorID: {
        type: String,
    },
    AutorNome: {
        type: String,
    },
    AutorLink: {
        type: String,
    },
    AutorImagem: {
        type: String,
    },
    SeguidoresOuInscritos: {
        type: String,
    },
    Titulo: {
        type: String,
    },
    Conteudo: {
        type: String
    },
    ID: {
        type: String,
    },
    Polaridade: {
        type: String,
    },
    Genero: {
        type: String,
    },
    CurtidasOuGostei: {
        type: String,
    },
    NaoGostei: {
        type: String,
    },
    Amei: {
        type: String,
    },
    Haha: {
        type: String,
    },
    Uau: {
        type: String,
    },
    Triste: {
        type: String,
    },
    Raiva: {
        type: String
    },
    OutrasReacoes: {
        type: String,
    },
    TotaldeReacoes: {
        type: String,
    },
    Comentarios: {
        type: String,
    },
    Compartilhamentos: {
        type: String,
    },
    Imagem: {
        type: String,
    },
    Grupos: {
        type: String,
    },
    PolaridadeDosGrupos: {
        type: String,
    },
    Temas: {
        type: String,
    },
    Tags: {
        type: String,
    },
    Pagina: {
        type: String
    },
    Visualizacoes: {
        type: String,
    },
    Titulo2: {
        type: String,
    },
    OpeningText: {
        type: String,
    },
    Influencer: {
        type: String,
    },
    TwitterSocialEcho: {
        type: String,
    },
    FacebookSocialEcho: {
        type: String,
    },
    RedditSocialEcho: {
        type: String,
    },
    NationalViewership: {
        type: String,
    },
    AVE: {
        type: String,
    },
    AutorID: {
        type: String
    },
    TwitterClient: {
        type: String
    },
    TwitterFollowing: {
        type: String,
    },
    Time: {
        type: String,
    },
    State: {
        type: String,
    },
    City: {
        type: String,
    },
    DocumentTags: {
        type: String,
    },
    Camara: {
        type: String,
    },
}, {
    timestamps: false
})

//Statics for whole Class
entrySchema.statics.getSevenStack = async (ordemText) => {
    ordem = Number.parseInt(ordemText)
    const entryOne = await Entry.findOne({ Ordem: ordem })
    const entryTwo = await Entry.findOne({ Ordem: ordem + 1 })
    const entryThree = await Entry.findOne({ Ordem: ordem + 2 })
    const entryFour = await Entry.findOne({ Ordem: ordem + 3 })
    const entryFive = await Entry.findOne({ Ordem: ordem + 4 })
    const entrySix = await Entry.findOne({ Ordem: ordem + 5 })
    const entrySeven = await Entry.findOne({ Ordem: ordem + 6 })
    entries = { entryOne, entryTwo, entryThree, entryFour, entryFive, entrySix, entrySeven }
    return entries
}

entrySchema.statics.getSevenDaysCount = async (startDate) => {

    startDate = date.parse(startDate, 'DDMMYYYY')
    var entryOne = {}, entryTwo = {}, entryThree = {}, entryFour = {}, entryFive = {}, entrySix = {}, entrySeven = {}

    const regexDayOne = `.*${date.format(startDate, 'DD')}\\/${date.format(startDate, 'MM')}\\/${date.format(startDate, 'YYYY')}.*`
    var re = new RegExp(regexDayOne)
    entryOne.count = await Entry.countDocuments({ "Data": re })
    entryOne.date = `${date.format(startDate, 'DD')}\/${date.format(startDate, 'MM')}`
    startDate = date.addDays(startDate, 1)

    const regexDayTwo = `.*${date.format(startDate, 'DD')}\\/${date.format(startDate, 'MM')}\\/${date.format(startDate, 'YYYY')}.*`
    var re = new RegExp(regexDayTwo)
    entryTwo.count = await Entry.countDocuments({ "Data": re })
    entryTwo.date = `${date.format(startDate, 'DD')}\/${date.format(startDate, 'MM')}`
    startDate = date.addDays(startDate, 1)

    const regexDayThree = `.*${date.format(startDate, 'DD')}\\/${date.format(startDate, 'MM')}\\/${date.format(startDate, 'YYYY')}.*`
    var re = new RegExp(regexDayThree)
    entryThree.count = await Entry.countDocuments({ "Data": re })
    entryThree.date = `${date.format(startDate, 'DD')}\/${date.format(startDate, 'MM')}`
    startDate = date.addDays(startDate, 1)

    const regexDayFour = `.*${date.format(startDate, 'DD')}\\/${date.format(startDate, 'MM')}\\/${date.format(startDate, 'YYYY')}.*`
    var re = new RegExp(regexDayFour)
    entryFour.count = await Entry.countDocuments({ "Data": re })
    entryFour.date = `${date.format(startDate, 'DD')}\/${date.format(startDate, 'MM')}`
    startDate = date.addDays(startDate, 1)

    const regexDayFive = `.*${date.format(startDate, 'DD')}\\/${date.format(startDate, 'MM')}\\/${date.format(startDate, 'YYYY')}.*`
    var re = new RegExp(regexDayFive)
    entryFive.count = await Entry.countDocuments({ "Data": re })
    entryFive.date = `${date.format(startDate, 'DD')}\/${date.format(startDate, 'MM')}`
    startDate = date.addDays(startDate, 1)

    const regexDaySix = `.*${date.format(startDate, 'DD')}\\/${date.format(startDate, 'MM')}\\/${date.format(startDate, 'YYYY')}.*`
    var re = new RegExp(regexDaySix)
    entrySix.count = await Entry.countDocuments({ "Data": re })
    entrySix.date = `${date.format(startDate, 'DD')}\/${date.format(startDate, 'MM')}`
    startDate = date.addDays(startDate, 1)

    const regexDaySeven = `.*${date.format(startDate, 'DD')}\\/${date.format(startDate, 'MM')}\\/${date.format(startDate, 'YYYY')}.*`
    var re = new RegExp(regexDaySeven)
    entrySeven.count = await Entry.countDocuments({ "Data": re })
    entrySeven.date = `${date.format(startDate, 'DD')}\/${date.format(startDate, 'MM')}`

    entries = {
        dates: [entryOne.date, entryTwo.date, entryThree.date, entryFour.date, entryFive.date, entrySix.date, entrySeven.date],
        counts: [entryOne.count, entryTwo.count, entryThree.count, entryFour.count, entryFive.count, entrySix.count, entrySeven.count]
    }
    return entries
}

entrySchema.statics.getPopularTweet = async (periodo) => {
    // const tweet = await Entry.where("AVE").ne("").where("Canal").equals("Twitter").sort({ AVE: -1 }).limit(1)
    // const tweetID = tweet[0].Link.split("/")
    tweetID = "1295325753165459456"
    return tweetID
}

entrySchema.statics.getPrincipaisTemas = async (startDate) => {

    var dataArray = { data: [] }
    var re1, re2
    const tema = ["Pro-Reforma", "Políticos", "Carga Tributária", "Tramitação", "Contra-Reforma"]
    itDate = date.parse(startDate, 'DDMMYYYY')

    for (let days = 0; days < 7; days++) {
        for (let themes = 0; themes < tema.length; themes++) {

            dateRegex = `.*${date.format(itDate, "DD/MM/YYYY")}.*`
            themeRegex = `.*${tema[themes]}.*`

            re1 = new RegExp(dateRegex)
            re2 = new RegExp(themeRegex)

            dataArray.data.push([date.format(itDate, "YYYY/MM/DD"), await Entry.countDocuments({ "Data": re1, "Temas": re2 }), tema[themes]])
        }
        itDate = date.addDays(itDate, 1)
    }

    return dataArray
}

entrySchema.statics.getCitacoes = async (startDate) => {


    var re = new RegExp(`.*Senado.*`)
    const valorSenado = await Entry.countDocuments({ "Temas": re })
    const valorSenadoPositivo = await Entry.countDocuments({ "Temas": re }).where("Polaridade").equals("Positivo")
    const valorSenadoNeutro = await Entry.countDocuments({ "Temas": re }).where("Polaridade").equals("Neutro")
    const valorSenadoNegativo = await Entry.countDocuments({ "Temas": re }).where("Polaridade").equals("Negativo")

    var re = new RegExp(`.*Câmara.*`)
    const valorCamara = await Entry.countDocuments({ "Temas": re })
    const valorCamaraPositivo = await Entry.countDocuments({ "Temas": re }).where("Polaridade").equals("Positivo")
    const valorCamaraNeutro = await Entry.countDocuments({ "Temas": re }).where("Polaridade").equals("Neutro")
    const valorCamaraNegativo = await Entry.countDocuments({ "Temas": re }).where("Polaridade").equals("Negativo")


    var dataArray = {
        innerData: [
            { value: valorSenado, name: 'Senado' },
            { value: valorCamara, name: 'Câmara' }
        ], outerData: [
            { value: valorSenadoPositivo, name: 'Senado - Positivo' },
            { value: valorSenadoNeutro, name: 'Senado - Neutro' },
            { value: valorSenadoNegativo, name: 'Senado - Negativo' },
            { value: valorCamaraNegativo, name: 'Câmara - Negativo' },
            { value: valorCamaraNeutro, name: 'Câmara - Neutro' },
            { value: valorCamaraPositivo, name: 'Câmara - Positivo' },
        ]
    }


    return dataArray
}

entrySchema.statics.getVolumeTema = async (startDate) => {
    var reply = { temasNome: [], temasCount: [] }

    var temasCount = []
    const temas = ["Carga Tributária", "Políticos", "Tramitação", "Estados e Municípios", "Policiais", "Pro-Reforma", "ICMS", "Oposição",
        "Imposto de Renda", "Imposto Único", "Contra-Reforma", "PIS", "Cofins", "Trabalhadores", "CPMF", "Câmara dos Deputados",
        "Senado Federal", "Meio Ambiente", "Contribuição", "Servidor Público", "Aposentados", "Professores", "ISS", "Explicações",
        "IBS", "IPI", "Militares", "Único", "Sonegação", "CSLL", "Publicidade", "Oficial", "Capitalização", "Serviços Digitais",
        "Pensionistas", "Institucional", "Pessoa Com Deficiência", "BPC"]

    for (let themeIt = 0; themeIt < temas.length; themeIt++) {
        var re = new RegExp(`.*${temas[themeIt]}.*`)
        temasCount[themeIt] = await Entry.countDocuments({ "Temas": re })
    }

    for (let it = 0; it < 8; it++) {

        var maxIndex = temasCount
            .map((v, i, self) => v === Math.max(...self) ? i : -1)
            .filter(index => index !== -1);
        reply.temasNome.push(temas.splice(maxIndex, 1)[0])
        reply.temasCount.push(temasCount.splice(maxIndex, 1)[0])
    }

    return reply
}

entrySchema.statics.getNuvemWordcloud = async (startDate) => {
    var reply = {
        data: [
            // { value: 'tributária', count: 38 },
            // { value: 'reforma', count: 30 },
            { value: 'governo', count: 0 },
            { value: 'livros', count: 0 },
            { value: 'proposta', count: 0 },
            { value: 'como', count: 0 },
            { value: 'brasileiro', count: 0 },
            { value: 'cofins', count: 0 },
            { value: 'política', count: 0 },
            { value: 'benefícios', count: 0 },
            { value: 'nacional', count: 0 },
            { value: 'taxação', count: 0 },
            { value: 'administrativa', count: 0 },
            { value: 'federal', count: 0 },
            { value: '12%', count: 0 },
            { value: 'estado', count: 0 },
            { value: 'bolsonaro', count: 0 },
            { value: 'contra', count: 0 },
            { value: 'presidente', count: 0 },
            { value: 'muito', count: 0 },
            { value: 'brasil', count: 0 },
            { value: 'projeto', count: 0 },
            { value: 'ainda', count: 0 },
            { value: 'livro', count: 0 },
            { value: 'economia', count: 0 },
            { value: 'paulo', count: 0 },
            { value: 'congresso', count: 0 },
            { value: 'está', count: 0 },
            { value: 'país', count: 0 },
            { value: 'já', count: 0 },
            { value: 'impostos', count: 0 },
            { value: 'guedes', count: 0 },
            { value: 'carga', count: 0 },
            { value: 'vai', count: 0 },
            { value: 'fortunas', count: 0 },
            { value: 'grandes', count: 0 },
            { value: 'educação', count: 0 },
            { value: 'pandemia', count: 0 },
        ]
    }

    for (let it = 0; it < reply.data.length; it++) {
        var re = new RegExp(`.*${reply.data[it].value}.*`)
        reply.data[it].count = await Entry.countDocuments({ "Conteudo": re })
    }

    return reply
}

entrySchema.statics.getNuvemEmojicloud = async (startDate) => {
    var reply = {
        data: [
            // { value: 'tributária', count: 38 },
            // { value: 'reforma', count: 30 },
            { value: '👇', count: 0 },
            { value: '📚', count: 0 },
            { value: '👉', count: 0 },
            { value: '🇧', count: 0 },
            { value: '😂', count: 0 },
            { value: '👏', count: 0 },
            { value: '📣', count: 0 },
            { value: '🚨', count: 0 },
            { value: '😡', count: 0 },
            { value: '👍', count: 0 },
            { value: '📲', count: 0 },
            { value: '🗣', count: 0 },
            { value: '🙏', count: 0 },
            { value: '💸', count: 0 },
            { value: '💚', count: 0 },
            { value: '🚩', count: 0 },
            { value: '📖', count: 0 },
            { value: '🔴', count: 0 },
            { value: '💛', count: 0 },
            { value: '😉', count: 0 },
            { value: '😠', count: 0 },
            { value: '💡', count: 0 },
            { value: '😍', count: 0 },
            { value: '😅', count: 0 },
            { value: '💰', count: 0 },
            { value: '👀', count: 0 },
            { value: '🔹', count: 0 },
            { value: '👊', count: 0 },
            { value: '😭', count: 0 },
            { value: '📌', count: 0 },
            { value: '😱', count: 0 },
            { value: '📷', count: 0 },
            { value: '💻', count: 0 },
            { value: '👎', count: 0 },
            { value: '😒', count: 0 },
            { value: '😎', count: 0 },
        ]
    }

    //TODO: mudar para fazer as contas dinamicamente
    for (let it = 0; it < reply.data.length; it++) {
        var re = new RegExp(`.*${reply.data[it].value}.*`)
        reply.data[it].count = await Entry.countDocuments({ "Conteudo": re })
        if (reply.data[it].count < 10) {
            reply.data[it].count = 20
        } else if (reply.data[it].count < 30) {
            reply.data[it].count = 34
        } else if (reply.data[it].count < 40) {
            reply.data[it].count = 50
        } else if (reply.data[it].count < 50) {
            reply.data[it].count = 70
        }else if (reply.data[it].count < 65){
            reply.data[it].count = 100
        } else {
            reply.data[it].count = 120
        }
    }


    reply.data[3].value = '🇧🇷'
    reply.data = reply.data.sort(() => Math.random() - 0.5);

    return reply
}

//Methods for single instance
entrySchema.methods.toJSON = function () {
    const entry = this
    const entryObject = entry.toObject()
    return entryObject
}


const Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry