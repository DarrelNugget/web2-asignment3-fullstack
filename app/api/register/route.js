
import { connectMongoDB } from "@/lib/mongodb";
import {User} from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req) {
	try {
		const { name, email, password } = await req.json();
		const hashedPassword = await bcrypt.hash(password, 10);
		const isAdmin = ( email === 'admin@gmail.com' ) ? true : false ;
		await connectMongoDB();
		await User.create({ name, email, password: hashedPassword, isAdmin });


		return NextResponse.json({ message: "User created successfully" }, { status: 201 });
	}
	catch (error) {
		return NextResponse.json({ message: "An Error Occured while Registering" }, { status: 500 });
	}
}