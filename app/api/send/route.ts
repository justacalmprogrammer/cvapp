// re_4mm9RHaU_8hQ9aNXGQjpcsNmpo6P9tq7k

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

 // const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_4mm9RHaU_8hQ9aNXGQjpcsNmpo6P9tq7k");

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["justacalmprogrammer@gmail.com"],
        subject: "CvApp JustaCalm",
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "JustaCalmProgrammer",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}