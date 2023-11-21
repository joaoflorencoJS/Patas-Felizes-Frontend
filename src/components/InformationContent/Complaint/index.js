import React from 'react';
import { Container } from '../styled';

function Complaint() {
  return (
    <Container
      className="tab-pane fade"
      id="v-pills-complaint"
      role="tabpanel"
      aria-labelledby="v-pills-complaint-tab"
    >
      <h2>Denúncia de maus tratos contra os animais.</h2>

      <h3>O que fazer nessa situação? </h3>

      <p>
        Se você testemunhou algum caso de maus tratos a animais, seja de um
        vizinho ou presenciou tal acontecimento na rua, saiba como agir seguindo
        alguns dos passos abaixo.
      </p>

      <ol>
        <li>
          <h4>Identifique os maus tratos</h4>
          <p>
            Veja detalhamente a situação em que se encontra o(s) animais antes
            de fazer a denúncia. Analise a condição em que o animal está física,
            a maneira que ele vive, falta de comida, agressões, condição do
            lugar em que vive, entre outros.
          </p>
        </li>
        <li>
          <h4>Evidências</h4>
          <p>
            Antes de fazer a denúncia é necessário que se tenham evidências dos
            maus tratos, sejam elas fotos, vídeos, imagens de câmera de
            segurança de sua casa ou de outras, testemunhas oculares, ou
            qualquer outro tipo de informação relevante.
          </p>
        </li>
        <li>
          <h4>Conte autoridades locais</h4>
          <p>
            As denúncias podem ser feitas diretamente à Polícia Militar
            ambiental ambiental: segue o número da Polícia Militar ambiental, ou
            também por meio da contratação de ONG&apos;s de proteção aos
            animais.
          </p>
        </li>
        <li>
          <h4>Forneça as informações</h4>
          <p>
            Ao fazer as denunciar seja claro, diga seu nome, número e endereço
            de onde foram feitos os maus tratos e faça uma breve descrição das
            informações sobre o caso de maus tratos que presenciou, fornecendo
            os videos, imagens, etc.
          </p>
        </li>
        <li>
          <h4>Proteja a sua segurança</h4>
          <p>
            Para sua própria segurança é uma boa ideia fazer uma denúncia
            anonimamente, para proteger sua identidade de um possível agressor.
          </p>
        </li>
      </ol>
      <p>
        E lembre-se! A denúncia é essencial para a proteção dos animais. Ao
        seguir os passos do site e fazer uma denúncia de maus tratos você está
        contribuindo por um mundo de respeito e proteção aos animais!
      </p>
    </Container>
  );
}

export default Complaint;
