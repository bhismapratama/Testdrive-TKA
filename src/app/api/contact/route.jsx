import ConnectDB from "@/app/lib/MongoDB";
import ContactYaw from "@/app/models/ContactSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function GET(req, res) {
//     try {
//         await ConnectDB();
//         const contacts = await ContactYaw.find({});
//         console.log(contacts);
//         return res.status(200).json(contacts);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return res.status(500).json({ msg: "Error fetching data" });
//     }
// }

export async function POST(req) {
    // const { fullname, email, message } = await req.json();
    const { fullname} = await req.json();

    // console.log("full name = ", fullname);
    // console.log("email = ", email);
    // console.log("Message = ", message);
    // console.log("full name = ", fullname);
    // console.log("email = ", email);
    // console.log("Message = ", message);

    try {
        await ConnectDB();
        // await ContactYaw.create({ fullname, email, message });
        await ContactYaw.create({ fullname});
        return NextResponse.json({
            msg: [`pun kekirim ${fullname}`],
            success: true
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message)
            }
            // console.log(errorList);
            return NextResponse.json({ msg: errorList })
        }
        else {
            return NextResponse.json({ msg: "unnable to send messages." });
        }
    }
}