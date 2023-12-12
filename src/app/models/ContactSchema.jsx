import mongoose, { Schema } from "mongoose"

const ContactSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: [true, "isi dulu"],
        minLength: [2, "minimal jan 1 bang"],
        maxLength: [50, "kebanyakan bang"],
    },
    date: {
        type: Date,
        default: Date.now
    },

})

const ContactYaw = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

export default ContactYaw;

// import mongoose, { Schema } from "mongoose"

// const ContactSchema = new Schema({
//     fullname: {
//         type: String,
//         trim: true,
//         required: [true, "Name is required"],
//         minLength: [2, "Name must be larger than 2 characters"],
//         maxLength: [50, "Name must be lesser than 50 characters"],
//     },
//     email: {
//         type: String,
//         // required: [true, "Email is required"],
//         // match: [/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ , "Invalid email address"]
//     },
//     message: {
//         type: String,
//         // required: [true, "Message is required"],
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },

// })

// const ContactYaw = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

// export default ContactYaw;