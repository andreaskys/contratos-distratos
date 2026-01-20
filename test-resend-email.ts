import { Resend } from 'resend';
import { config } from 'dotenv';
import * as path from 'path';

config({ path: path.resolve(process.cwd(), '.env.local') });

async function testResend() {
  console.log('🧪 Testando Resend...\n');

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY não está configurada');
    process.exit(1);
  }

  if (!process.env.RECEIVER_EMAIL) {
    console.error('❌ RECEIVER_EMAIL não está configurada');
    process.exit(1);
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log(`✅ Variáveis de ambiente encontradas`);
  console.log(`   API Key: ${process.env.RESEND_API_KEY.substring(0, 10)}...`);
  console.log(`   Email: ${process.env.RECEIVER_EMAIL}\n`);

  try {
    console.log('📧 Enviando email de teste...\n');

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.RECEIVER_EMAIL,
      subject: '🧪 Email de Teste - Resend Funcionando!',
      html: `<div style="font-family: Arial; padding: 20px;"><h2>✅ Resend está funcionando!</h2><p>Teste enviado em: ${new Date().toLocaleString('pt-BR')}</p></div>`,
    });

    if (result.error) {
      console.error('❌ Erro:', result.error.message);
      process.exit(1);
    }

    console.log('✅ Email enviado com sucesso!');
    console.log(`📧 ID: ${result.data?.id}\n`);
    console.log('📬 Verifique sua caixa de entrada!\n');
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

testResend();
