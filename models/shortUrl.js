import mongoose from 'mongoose';
import { nanoid } from 'nanoid'; // Corrected import

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: () => nanoid(7) // Generate a 7-character short ID
    },
    clicks: {
        type: Number,
        required: true, 
        default: 0
    }
});

export default mongoose.model('ShortUrl', shortUrlSchema);
