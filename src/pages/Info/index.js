import React from 'react';
import { Article, Aside, Main } from './styled';
import Cat from '../../components/InformationContent/Cat';
import Dog from '../../components/InformationContent/Dog';
import Complaint from '../../components/InformationContent/Complaint';

export default function Info() {
  return (
    <Main className="row m-0">
      <Aside className="pl-0 pr-0 col-12 col-md-2">
        <ul
          className="nav row m-0 nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <li className="col-4 col-md-12 p-0 mt-md-3">
            <a
              className="nav-link nav-link-top link-outline-primary-color h-100 active"
              id="v-pills-cat-tab"
              data-toggle="pill"
              href="#v-pills-cat"
              role="tab"
              aria-controls="v-pills-cat"
              aria-selected="true"
            >
              Informações sobre gatos
            </a>
          </li>
          <li className="col-4 col-md-12 p-0">
            <a
              className="nav-link nav-link-middle link-outline-primary-color h-100"
              id="v-pills-dog-tab"
              data-toggle="pill"
              href="#v-pills-dog"
              role="tab"
              aria-controls="v-pills-dog"
              aria-selected="false"
            >
              Informações sobre cachorros
            </a>
          </li>
          <li className="mb-md-1 col-4 col-md-12 p-0">
            <a
              className="nav-link nav-link-bottom link-outline-primary-color h-100"
              id="v-pills-complaint-tab"
              data-toggle="pill"
              href="#v-pills-complaint"
              role="tab"
              aria-controls="v-pills-complaint"
              aria-selected="false"
            >
              Denúncia de maus-tratos a animais
            </a>
          </li>
        </ul>
      </Aside>

      <Article className="col-12 col-md-10">
        <div
          className="tab-content mt-3 container lead"
          id="v-pills-tabContent"
        >
          <Cat />
          <Dog />
          <Complaint />
        </div>
      </Article>
    </Main>
  );
}
