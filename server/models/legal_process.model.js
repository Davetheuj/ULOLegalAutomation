const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const legalProcessSchema = new Schema(
    {
        name:{type: String, required: true, unique: true},
        start_document:{type: String, required: true}
    },
    {
    timestamps: true,
    }
);

const LegalProcess = mongoose.model('LegalProcess', legalProcessSchema);

module.exports = LegalProcess;