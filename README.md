# Paper Cuts Estúdio Criativo

Site estático responsivo, pronto para publicação gratuita no GitHub Pages. Não precisa instalar nada nem contratar hospedagem.

## Personalização antes de publicar

1. Abra `script.js` e preencha `WHATSAPP_NUMBER` com DDI + DDD + número, somente dígitos (por exemplo, o formato `55` + DDD + telefone). Preencha `INSTAGRAM_URL` com o link real do perfil.
2. No `index.html`, ajuste regiões atendidas, produtos/temas e textos para refletir a operação da Paper Cuts.
3. Troque os quatro blocos ilustrativos da galeria por fotos. Uma maneira simples é salvar as imagens nesta pasta, por exemplo `festa.jpg`, e substituir cada `<div class="placeholder-art">…</div>` por `<img src="festa.jpg" alt="Descrição do produto">`. No `styles.css`, aplique `width:100%;height:210px;object-fit:cover` à imagem da galeria (no celular pode manter 155px).
4. A identidade enviada especifica TAN Ashford Bold para títulos e Montserrat para textos, e traz a paleta `#F95965`, `#F7E8DD`, `#FBADC1`, `#FB829D`, `#FBA164`. O site já aplica essa paleta, usa Montserrat e inclui a logomarca coral e a borboleta originais em `assets/`. A Champagne & Limousines fornecida tem licença pessoal que restringe incorporação comercial na web. Como alternativa visual próxima, os títulos usam Josefin Sans do Google Fonts, e o texto usa Montserrat. O Google Fonts informa que suas fontes são abertas e podem ser usadas em projetos comerciais.

O botão do WhatsApp funciona mesmo sem configurar o número: abre o WhatsApp com a mensagem pronta para a pessoa escolher o contato. O link do Instagram só deve ser usado depois de inserir o endereço correto.

## Publicar gratuitamente no GitHub Pages

1. Crie ou acesse uma conta em [github.com](https://github.com/) e crie um repositório **público** chamado `paper-cuts-site`.
2. Envie os três arquivos do site (`index.html`, `styles.css`, `script.js`) para a raiz do repositório. O `README.md` também pode ser enviado.
3. No GitHub, abra **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e `/ (root)` e salve. Aguarde a publicação indicada nessa página. O GitHub fornecerá um endereço temporário `…github.io/paper-cuts-site`.
4. Ainda em **Settings → Pages → Custom domain**, digite o domínio exato que você comprou, por exemplo `www.seudominio.com.br` (substitua pelo real) e salve. O GitHub pode adicionar um arquivo `CNAME`; mantenha-o no repositório.

## Conectar o Registro.br

Faça isso depois de iniciar a publicação no GitHub Pages e usando o domínio real. Primeiro, adicione o domínio escolhido em **Settings → Pages → Custom domain**. Para o domínio raiz (`seudominio.com.br`), a documentação oficial do GitHub lista estes registros **A**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`. Confirme os valores na documentação oficial antes de salvar, pois endereços de serviço podem mudar.

1. Entre em [registro.br](https://registro.br/), abra o domínio e acesse a seção **DNS**. Se estiver usando a zona DNS do próprio Registro.br, escolha **Editar zona**. Se os servidores DNS forem de outro provedor, faça a edição na zona desse provedor.
2. Crie/ajuste o registro **CNAME** de `www` para `SEU-USUARIO.github.io` (troque pelo nome de usuário real do GitHub; sem protocolo e sem caminho do repositório). No GitHub Pages, use o domínio com `www` como domínio personalizado se quiser que ele seja o endereço principal; o GitHub pode redirecionar a versão sem `www` quando as duas variantes estiverem configuradas.
3. Crie/ajuste quatro registros **A** do domínio raiz (`@` ou campo de nome em branco, conforme a tela), um para cada endereço listado acima.
4. Remova registros conflitantes para `www` ou para o domínio raiz, mas preserve registros de e-mail (MX/TXT) que você utiliza. Não altere os servidores DNS se estiver usando a edição da zona DNS do próprio Registro.br.
5. Aguarde a propagação, volte a **Settings → Pages**, marque **Enforce HTTPS** assim que a opção ficar disponível e teste tanto o domínio raiz quanto `www`.

O Registro.br permite gerenciar servidores DNS e zona DNS pelo painel; a escolha entre editar a zona e trocar servidores depende de quem atualmente hospeda seu DNS. Não faça uma troca de nameservers sem saber para onde seus registros atuais seriam migrados, especialmente se o domínio também recebe e-mail.

## Referências oficiais

- [GitHub Pages: configurar domínio personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages: gerenciar domínio personalizado e registros DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages: criar site](https://docs.github.com/en/pages/quickstart)
- [Registro.br: tutoriais administrativos](https://www.registro.br/ajuda/tutoriais-administrativos/)
