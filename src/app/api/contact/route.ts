import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';
import path from "path";
import fs from 'fs';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body?.email || !body?.name || !body?.phone || !body?.message) {
            return Response.json({ message: 'All field is required' }, { status: 400 });
        }

        const emailPath = path.join(process.cwd(), "src", "utils", "contact.html");

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com.',
            port: 465,
            secure: true,
            auth: {
                user: process.env.NODEMAILER_HOST_EMAIL,
                pass: process.env.NODEMAILER_HOST_PASS,
            },
        });

        const bodyData = fs
            .readFileSync(emailPath, 'utf8')
            .replace('{{name}}', body?.name)
            .replace('{{email}}', body?.email)
            .replace('{{phone}}', body?.phone)
            .replace('{{message}}', body?.message)
            .replace('{{date}}', new Date().toString())

        const res = await transporter.sendMail({
            from: 'hridoychandrapaul.10@gmail.com', // sender address
            to: "hridoychandrapaul.10@gmail.com", // list of receivers
            subject: "Got a message from Portfolio",
            text: '', // plain text body
            html: bodyData, // html body
        });

        const response = NextResponse.json({ message: 'Message Sent successful', success: true });

        return response;

    }

    catch (err: any) {
        return NextResponse.json({ message: err?.message, success: false }, { status: 400 });
    }

}