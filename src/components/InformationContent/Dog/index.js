import React from 'react';
import { Container } from '../styled';

function Dog() {
  return (
    <Container
      className="tab-pane fade"
      id="v-pills-dog"
      role="tabpanel"
      aria-labelledby="v-pills-dog-tab"
    >
      <h2>Algumas informações importantes sobre cuidados com cães:</h2>

      <div>
        <h3>Alimentação</h3>
        <p>
          Busque por uma dieta balanceada que seja adequada para a raça e
          tamanho o do seu cão. Alguns alimentos comuns no dia a dia não devem
          ser consumidos por cachorros. Entre eles:
        </p>
        <p>
          Chocolate, uvas e uvas-passas, cebola e alho, abacate, café e cafeína,
          xilitol (Um adoçante artificial encontrado em gomas de mascar e
          produtos dietéticos), álcool, ossos (podem lascar e causar obstruções
          intestinais ou ferir o trato digestivo), alimentos ricos em gordura e
          comida para humanos (alimentos processados, salgados ou
          condimentados).
        </p>
        <p>
          Não descarte a importância de buscar um profissional veterinário para
          orientações mais específicas. Mantenha também água fresca disponível o
          tempo todo para manter seu cão hidratado.
        </p>
      </div>

      <div>
        <h3>Cuidados veterinários</h3>
        <h4>Vacinas indispensáveis para o seu cão: </h4>
        <ul>
          <li>
            <p>
              Vacina contra raiva: Pode ser tomada normalmente a partir dos
              primeiros 4 ou 6 meses de idade, ou conforme orientação
              veterinária. Normalmente o reforço deve acontecer anualmente,
              entretanto é importante confirmar com o veterinário que realizará
              a aplicação.
            </p>
          </li>
          <li>
            <p>
              Vacina multipla: Normalmente podemos escolher entre a V8 e a V10.
              A V8 auxilia na prevenção da cinomose, hepatite infecciosa canina,
              parainfluenza, parvovirose, coronavirose e leptospirose (sorovares
              Canicola e Icterohaemorrhagiae); a V10 protege contra todas estas
              doenças e mais algumas cepas de leptospirose (Grippotyphosa e
              Pomona).
            </p>
          </li>
        </ul>
        <p>Consulte um veterinário em caso de qualquer preocupação de saúde.</p>
      </div>

      <div>
        <h3>Informações extras</h3>
        <p>
          Aqui está uma pequena lista de algumas práticas que você deve ter ao
          adotar um novo cão:
        </p>
        <ul>
          <li>
            <p>
              Alguns cuidados de higiene com seu cão são muito bem vindos. Você
              deve banhar e escovar o pelo do seu cão conforme necessário.
              Cuidar das unhas e dos ouvidos, e escovar os dentes regularmente.
            </p>
          </li>
          <li>
            <p>
              Cães também precisam de exercício regular para manter a saúde
              física e mental. Passeios diários e brincadeiras são ótimas formas
              de exercitar seu cão.
            </p>
          </li>
          <li>
            <p>
              É bom fazer com que seu cão se socialize desde cedo com pessoas e
              outros animais para garantir que ele seja amigável e confiante.
            </p>
          </li>
          <li>
            <p>
              Ensine comandos básicos e reforce o bom comportamento. Esse tipo
              de treino contribui muito para a convivência harmoniosa.
            </p>
          </li>
          <li>
            <p>
              Mantenha seu cão em uma área segura e utilize uma coleira e uma
              identificação com informações de contato, e procure sempre
              utilizar uma guia para passear.
            </p>
          </li>
          <li>
            <p>
              Forneça um local confortável para seu cão descansar e dormir. Dê
              amor, carinho e atenção ao seu cão. Cães são animais sociais que
              precisam de interação humana.
            </p>
          </li>
        </ul>

        <p>
          E lembre-se que cada cão é único, então adapte essas diretrizes às
          necessidades individuais do seu animal de estimação. Consultar um
          veterinário para orientação específica é sempre uma ótima ideia.
        </p>
      </div>
    </Container>
  );
}

export default Dog;
