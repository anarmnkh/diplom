import { NextResponse } from "next/server";
import {connectMongoDB} from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req){
    try{
        const{firstname, lastname, email,phone, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password,10);
        await connectMongoDB();
        await User.create({firstname, lastname, email, phone, password});

        return NextResponse.json({ message: "User registered"}, {status: 201});
    }catch(error){
        return NextResponse.json(
            { message: "An error occusrred while registering the user."}, {status: 500}
        )
    }
}