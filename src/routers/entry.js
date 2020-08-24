const express = require('express')
const Entry = require('../models/entry')

const router = new express.Router()

router.get('/entry', async (req, res) => {
    try {
        const entry = await Entry.find({ Ordem: req.body.ordem })
        res.send(entry)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/teste/:ordem', async (req, res) => {
    try {
        const entries = await Entry.getSevenStack(req.params.ordem)

        data = [entries.entryOne.CurtidasOuGostei,
        entries.entryTwo.CurtidasOuGostei,
        entries.entryThree.CurtidasOuGostei,
        entries.entryFour.CurtidasOuGostei,
        entries.entryFive.CurtidasOuGostei,
        entries.entrySix.CurtidasOuGostei,
        entries.entrySeven.CurtidasOuGostei]

        res.send(data)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/volumeTotalReforma/:dataInicio', async (req, res) => {
    try {
        const entries = await Entry.getSevenDaysCount(req.params.dataInicio)
        res.send(entries)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/publicacaoEmDestaque/:dataInicio', async (req, res) => {
    try {
        const tweet = {}
        tweet.id = await Entry.getPopularTweet(req.params.dataInicio)
        res.send(tweet)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/principaisTemas/:dataInicio', async (req, res) => {
    try {
        const tweet = await Entry.getPrincipaisTemas(req.params.dataInicio)
        res.send(tweet)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/citacoes/:dataInicio', async (req, res) => {
    try {
        const data = await Entry.getCitacoes(req.params.dataInicio)
        res.send(data)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/volumeTema/:dataInicio', async (req, res) => {
    try {
        const data = await Entry.getVolumeTema(req.params.dataInicio)
        res.send(data)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router