import { afinaPrograms } from "@/data/afina";
import { handleAfinaContact } from "@/lib/afina-contact";

export async function POST(request: Request) {
  return handleAfinaContact(request, {
    apiKey: process.env.RESEND_API_KEY?.trim() ?? "",
    from: process.env.AFINA_EMAIL_FROM?.trim() ?? "",
    to: process.env.AFINA_EMAIL_TO?.trim() || "expandeteconsultora@gmail.com",
    programs: afinaPrograms,
  });
}
