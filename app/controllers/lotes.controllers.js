const Lote = require('../models/lotes.model.js');
const express = require('../models/lotes.model.js');

//Aqui definimos los controladores 

exports.createLote = (req, res) => {
    let lote = new Lote(({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        volume: req.body.volume,
        quantity: req.body.quantity,

    }));
    lote.save((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            code: 10,
            data: result
        });

    })

};



exports.getAllLotes = (req, res) => {
    Lote.find().exec((error, lotes) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }

        return res.status(200).json({
            error: false,
            message: "Success",
            code: 10,
            data: lotes,
        });
    });
};

exports.getLote = (req, res) => {
    const lote_id = req.params.id;
    Lote.findById(lote_id, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            code: 10,
            data: result
        });
    });
}
exports.updateLote = (req, res) => {
    const lote_id = req.params.id;
    const data = req.body;
    Lote.findByIdAndUpdate(lote_id, data, { new: true }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            code: 10,
            data: result
        });
    });
};

exports.deleteLote = (req, res) => {
    const lote_id = req.params.id;

    Lote.findOneAndDelete({ id: lote_id }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            code: 10,
            data: result
        });
    });
};