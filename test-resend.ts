import { Resend } from 'resend';
import { config } from 'dotenv';
import * as path from 'path';

// Carrega variáveis de ambiente do .env.local
config({ path: path.resolve(process.cwd(), '.env.local') });

async function testResend() {
  console.log('🧪 Testando Resend...\n');

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY não está configurada em .env.local');
    process.exit(1);
  }

  if (!process.env.RECEIVER_EMAIL) {
    console.error('❌ RECEIVER_EMAIL não está configurada em .env.local');
    process.exit(1);
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log(`✅ Variáveis de ambiente encontradas`);
  console.log(`   API Key: ${process.env.RESEND_API_KEY.substring(0, 10)}...`);
  console.log(`   Email de destino: ${process.env.RECEIVER_EMAIL}\n`);

  try {
    console.log('📧 Enviando email de teste...\n');

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.RECEIVER_EMAIL,
      subject: '🧪 Email de Teste - Resend Funcionando!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2>✅ Resend está funcionando!</h2>
          <p>Este é um email de teste da sua integração com Resend.</p>
          <p><strong>Hora do teste:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">Se você recebeu este email, a integração está funcionando corretamente!</p>
        </div>
      `,
    });

    if (result.error) {
      console.error('❌ Erro ao enviar:', result.error.message);
      process.exit(1);
    }

    console.log('✅ Email enviado com sucesso!');
    console.log(`   ID do email: ${result.data?.id}\n`);
    console.log('📬 Verifique sua caixa de entrada em alguns segundos...');
    console.log('💡 Se não encontrar, procure em SPAM/Lixo\n');
  } catch (error) {
    console.error('❌ Erro ao conectar com Resend:', error);
    process.exit(1);
  }
}

testResend();
