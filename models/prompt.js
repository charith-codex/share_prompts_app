import mongoose,{ Schema, model, models } from 'mongoose';

const promptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    },
});

const Prompt = models.Prompt || model('Prompt', promptSchema);

export default Prompt;