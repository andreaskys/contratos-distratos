import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = emailSchema.parse(body);

    const receiverEmail = process.env.RECEIVER_EMAIL || process.env.NEXT_PUBLIC_RECEIVER_EMAIL;
    
    if (!receiverEmail) {
      return NextResponse.json(
        { error: 'Email do destinatário não configurado' },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: 'Contato Contratos&Distratos <onboarding@resend.dev>',
      to: receiverEmail,
      replyTo: validatedData.email,
      subject: `Novo contato: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px;">
          <h2 style="color: #2563eb;">Novo Contato Recebido</h2>
          <p><strong>Nome:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
          <p><strong>Assunto:</strong> ${validatedData.subject}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 12px; border-radius: 4px;">
            ${validatedData.message}
          </p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string[] | undefined> = error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(fieldErrors)
        .find(msgs => msgs && msgs.length > 0)?.[0] || 'Erro de validação';
        return NextResponse.json({ error: firstErrorMessage }, { status: 400 });
}

    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 }
    );
  }
}