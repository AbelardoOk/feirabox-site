import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Dados recebidos: ", body);

    // Validar e-mail / telefone (filtrar)

    // Salvar no banco

    // Enviar e-mail / telefone

    // Depois de testar remover os dados da resposta
    return NextResponse.json({ message: "Dados salvos com sucesso!", data: body }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Falha ao processar requisição" }, { status: 500 });
  }
}
