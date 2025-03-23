import {VStack} from "../../VStack";
import CodeSnipetBox from "./CodeSnipetBox";

export default function CodeBox(){
    return (
        <VStack>
            <CodeSnipetBox code={"const RESEND_API_KEY = 're_123456789';\n" +
                "\n" +
                "export async function POST() {\n" +
                "  const res = await fetch('https://api.resend.com/emails', {\n" +
                "    method: 'POST',\n" +
                "    headers: {\n" +
                "      'Content-Type': 'application/json',\n" +
                "      Authorization: `Bearer ${RESEND_API_KEY}`,\n" +
                "    },\n" +
                "    body: JSON.stringify({\n" +
                "      from: 'onboarding@resend.dev',\n" +
                "      to: ['delivered@resend.dev'],\n" +
                "      subject: 'Hello World',\n" +
                "      html: '<strong>it works!</strong>',\n" +
                "    }),\n" +
                "  });\n" +
                "\n" +
                "  if (res.ok) {\n" +
                "    const data = await res.json();\n" +
                "    return Response.json(data);\n" +
                "  }\n" +
                "}"} language={"javascript"}/>
        </VStack>
    )
}