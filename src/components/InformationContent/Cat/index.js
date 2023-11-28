import React from 'react';
import { Container } from '../styled';

export default function Cat() {
  return (
    <Container
      className="tab-pane fade show active"
      id="v-pills-cat"
      role="tabpanel"
      aria-labelledby="v-pills-cat-tab"
    >
      <h2>Algumas informações sobre nossos queridos gatinhos!</h2>

      <div>
        <h3>Alimentação</h3>
        <p>
          É importante fornecer uma dieta adequada para gatos, que inclua ração
          de qualidade formulada para felinos.
        </p>
        <p>
          Existem também alimentos que devem ser mantidos longe dos gatos. Por
          exemplo: chocolate, cebola e alho, uvas e uvas-passas, cafeína,
          álcool, comida de cachorro, produtos lácteos (alguns gatos são
          intolerantes à lactose), alimentos ricos em sal e comida condimentada,
          entre outros.
        </p>
      </div>

      <div>
        <h3>Cuidados veterinários</h3>
        <p>
          Visitas ao veterinário: Leve seu gato ao veterinário para vacinações,
          exames de saúde e cuidados preventivos. Além disso, se você notar
          qualquer mudança no comportamento do seu gato, leve-o ao veterinário
          imediatamente. Os gatos são mestres em esconder doenças, e quanto mais
          cedo o problema for diagnosticado, maiores as chances de cura.
        </p>

        <h4>Vacinas</h4>
        <p>
          Entre a vacinas importantes para seu felino, vale citar a Tríplice
          Felina (FVRCP): Protege contra rinotraqueíte viral felina,
          calicivirose e panleucopenia. Pode ser dada a partir de cerca de 9
          semanas de idade, consulte o veterinário responsável pela vacinação
          para se informar sobre quando deve ser aplicada a dose de reforço.
        </p>
        <p>
          Vacina Antirrábica: Essencial para prevenir a raiva em gatos.
          Geralmente é obrigatória em muitas regiões. Normalmente pode ser dada
          a partir dos 3 primeiros meses de idade. Se informe com o veterinário
          resposavel pela vacinação quando deve ser aplicada a dose de reforço.
        </p>
        <p>
          Em alguns momentos pode ser difícil de notar problemas de saúde em seu
          gato, entretanto há alguns sinais que você deve se atentar, como:
          Isolamento, agressão, Recusa em comer, perda de apetite ou sede
          excessiva, diarreia, constipação, dificuldade ao urinar ou aumento da
          frequência urinária, vômitos frequentes, falta de limpeza ou pelagem
          emaranhada, secreções anormais ou olhos opacos, observar cortes,
          inchaços, feridas ou manchas na pele, miados excessivos, gemidos ou
          vocalizações anormais, um odor corporal anormal, estão entre os
          sintomas de doenças.
        </p>
      </div>

      <div>
        <h3>Informações extras</h3>
        <p>
          Aqui está uma listinha com algumas informações extras sobre os felinos
          que tanto amamos!
        </p>
        <ul>
          <li>
            <p>
              Os gatos são conhecidos por sua limpeza. Eles se limpam, mas você
              deve escová-los regularmente para evitar bolas de pelo. Ainda
              pensando em higiene, é importante que mantenha uma caixa de areia
              limpa disponível.
            </p>
          </li>
          <li>
            <p>
              Brinquedos e enriquecimento ambiental também são importantes.
              Gatos precisam de estímulo mental e físico. Fornecer brinquedos e
              áreas para explorar em sua casa é uma ótima opção. Não esqueça
              também de oferecer arranhadores apropriados. Gatos adoram arranhar
              para afiar as garras e marcar território.
            </p>
          </li>
          <li>
            <p>
              Mantenha plantas tóxicas, substâncias perigosas, produtos de
              limpeza, medicamentos, fios elétricos e outras coisas que possam
              ser perigosas fora do alcance de seu gato.
            </p>
          </li>
          <li>
            <p>
              Coloque uma coleira com identificação e/ou considere microchip
              para localizar seu gato se ele se perder.
            </p>
          </li>
          <li>
            <p>
              Castrar seu gato é importante para evitar a reprodução indesejada
              e promover a saúde.
            </p>
          </li>
          <li>
            <p>
              Dê amor, carinho e atenção ao seu gato. Eles apreciam interações e
              momentos de carinho.
            </p>
          </li>
          <li>
            <p>
              Gatos são animais sociáveis, mas cada um tem sua personalidade.
              Alguns são mais independentes e outros mais carentes. Respeite o
              espaço do seu gato e não o force a interagir com você ou com
              outros animais.
            </p>
          </li>
          <li>
            <p>
              Lembre-se de que cada gato tem sua personalidade e necessidades
              individuais, então adapte os cuidados de acordo com o seu felino.
              Consultar um veterinário para orientação específica é sempre uma
              boa prática!
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
}
