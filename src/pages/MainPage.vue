<template>
  <q-page class="flex flex-center">
    <div class="content flex flex-center column">
      <div class="fit flex column justify-end">
        <q-table
          :rows="rows"
          :columns="columns"
          rows-per-page-label='Показывать на странице'
          :pagination="pagination"
          row-key="name"
          class=''
        >
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, computed, defineComponent } from 'vue';

const columns = [
  { name: 'id', align: 'center', label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'username', label: 'ФИО', field: 'username', align: 'left', sortable: true },
  { name: 'tel', label: 'Телефон', field: 'tel', align: 'left', sortable: true },
  { name: 'balance', label: 'Баланс', field: 'balance', align: 'left', sortable: true },
  { name: 'status', label: 'Статус', field: 'status', align: 'left', sortable: true },
]

const rows = [
  {
    id: "e9175af9-6713-46be-9a8c-c40923252158",
    username: 'Шевченко Вадим Александрович',
    tel: '+79129572879',
    balance: 421033.89,
    status: 'active',
  },
  {
    id: "abe30c43-5c57-4df8-8a21-4c8fec578e05",
    username: 'Шашков Валерий Сергеевич',
    tel: '+79526176877',
    balance: 269594.35,
    status: 'active',
  },
  {
    id: "589b62b4-546d-45d4-9da0-9ecfcc353469",
    username: 'Крапивина Елена Викторовна',
    tel: '+79129290722',
    balance: 315275.94,
    status: 'active',
  },
  {
    id: "b0b8e5ef-d43f-4a3f-8782-2260a4471f8c",
    username: 'Тихомиров Николай Иванович',
    tel: '+79872365528',
    balance: 452165.55,
    status: 'active',
  },
  {
    id: "9f9417c5-1efa-4ed3-b028-e2fa72392caa",
    username: 'Долгополый Сергей Константинович',
    tel: '+79171455031',
    balance: 40884.05,
    status: 'active',
  },
  {
    id: "1c124f08-b29f-45d7-8025-4ffc22aacf7f",
    username: 'Ленов Николай Николаевич',
    tel: '+79278182142',
    balance: 213234.38,
    status: 'active',
  },
  {
    id: "ffae4e1b-546d-4537-a3c4-7136b9966ccb",
    username: 'Смирнова Елизавета Сергеевна',
    tel: '+79506571839',
    balance: 449782.09,
    status: 'active',
  },
  {
    id: "b8e74219-f90f-4ae2-89ba-74929beb5975",
    username: 'Фирсин Андрей Валерьевич',
    tel: '+79056413667',
    balance: 293547.23,
    status: 'active',
  },
  {
    id: "a1732e84-234c-4234-b59b-ed6e581136c9",
    username: 'Гуторов Михаил Михайлович',
    tel: '+79046791780',
    balance: 361928.61,
    status: 'active',
  },
  {
    id: "dee36058-ad3a-4569-8af4-ef6d551e0f11",
    username: 'Мельник Евгений Викторович',
    tel: '+79535348990',
    balance: 441196.11,
    status: 'active',
  },
  {
    id: "d5f1a0dd-f04e-4314-b291-12f17b4122b1",
    username: 'Золотарева Лидия Александровна',
    tel: '+79288459040',
    balance: 284390.44,
    status: 'active',
  },
  {
    id: "ccc425b7-db76-4a5f-adf0-a009aeb3baa7",
    username: 'Панин Никита Александрович',
    tel: '+79094344216',
    balance: 286357.89,
    status: 'active',
  },
  {
    id: "2f10c946-f875-40bb-b4e1-ae06dd541e3b",
    username: 'Сарычев Александр Владимирович',
    tel: '+79643082099',
    balance: 356769.34,
    status: 'blocked',
  },
  {
    id: "aa7d64a7-0e69-4d2e-a520-0d39035b66fa",
    username: 'Михайлов Александр Дмитриевич',
    tel: '+75296692555',
    balance: 287201.79,
    status: 'active',
  },
  {
    id: "5092a324-75ff-4f9c-ae90-e8adc3c5fbc5",
    username: 'Суханов Антон Викторович',
    tel: '+79875904041',
    balance: 222070.55,
    status: 'active',
  },
  {
    id: "a2b1e4e2-ac9a-40ae-ad5f-ccb26738fe9e",
    username: 'Суганов Александр Александрович',
    tel: '+79373834253',
    balance: 167552.41,
    status: 'active',
  },
  {
    id: "9eb45298-24aa-490a-84e6-9d0a1b94f05d",
    username: 'Ковалев Александр Владимирович',
    tel: '+79021947501',
    balance: 125364.87,
    status: 'active',
  },
  {
    id: "a5e3ddd8-8d9b-46e4-bf0b-5c21280127a0",
    username: 'Шатерников Максим Михайлович',
    tel: '+79522505290',
    balance: 96738.2,
    status: 'active',
  },
  {
    id: "79f543a2-deb7-43b0-8861-4ecaa454776d",
    username: 'Дядькин Кирилл Александрович',
    tel: '+79507914339',
    balance: 123133.53,
    status: 'active',
  },
  {
    id: "77d2bd53-4809-4328-b1fa-ec68428b2d94",
    username: 'Агальцов Михаил Витальевич',
    tel: '+79507908858',
    balance: 486904.66,
    status: 'blocked',
  },
  {
    id: "457ecc9c-1678-4d58-84c7-03c51a1d372e",
    username: 'Смольницкая Елена Николаевна',
    tel: '+79045250588',
    balance: 57874.87,
    status: 'active',
  },
  {
    id: "d4b3972c-72ae-4bdf-926c-a411ff3c2299",
    username: 'Роякин Владимир Михайлович',
    tel: '+79532734976',
    balance: 328261.28,
    status: 'active',
  },
  {
    id: "48708620-3732-4b5e-b7a0-f4659edd89d6",
    username: 'Коновалов Тимур Игоревич',
    tel: '+79519295239',
    balance: 446899.87,
    status: 'active',
  },
  {
    id: "db6f4a68-4171-4fe7-be8a-9a062bf98e27",
    username: 'Душков Николай Евгеньевич',
    tel: '+79215893790',
    balance: 408451.41,
    status: 'active',
  },
  {
    id: "6084e640-a50a-4709-90c4-d7057a035512",
    username: 'Иван Иванов Иванович',
    tel: '+79218786259',
    balance: 183091.2,
    status: 'active',
  },
  {
    id: "2f64f6a2-13b2-45c1-bf2b-a19f4e134d8a",
    username: 'Ложков Станислав Александрович',
    tel: '+79831253660',
    balance: 388313.9,
    status: 'active',
  },
  {
    id: "3a1a0a65-5b61-495e-a0d9-972a1394cf8c",
    username: 'Лыкова Мария Александровна',
    tel: '+79506476557',
    balance: 335509.06,
    status: 'blocked',
  },
  {
    id: "1b571dab-4515-4020-9019-ff0c1cbdb3ba",
    username: 'Александров Евгений Игоревич',
    tel: '+79102103366',
    balance: 121165.37,
    status: 'active',
  },
  {
    id: "f81e4db7-d31f-4bda-83da-f2dd1e6d09b0",
    username: 'Кузьмин Александр Александрович',
    tel: '+79052324058',
    balance: 128339.21,
    status: 'active',
  },
  {
    id: "49484b04-cb58-44a1-93a3-9c1916db938d",
    username: 'Лагутин Анатолий Валерьевич',
    tel: '+79184094463',
    balance: 245388.32,
    status: 'blocked',
  },
  {
    id: "98b6ab69-762c-4774-9908-987650230974",
    username: 'Климов Александр Александрович',
    tel: '+79373513584',
    balance: 347197.97,
    status: 'active',
  },
  {
    id: "c9ca54c3-bbaa-481f-b92c-3b79fd051664",
    username: 'Лебедева Валерия Витальевна',
    tel: '+79643250685',
    balance: 348785.25,
    status: 'active',
  },
  {
    id: "f5e89b73-560a-42b1-b298-391defea1fd4",
    username: 'Блинов Павел Валентинович',
    tel: '+79031328227',
    balance: 238598.38,
    status: 'active',
  },
  {
    id: "85aea827-a3f2-4cd1-904d-50238c6eee8b",
    username: 'Цветнов Виктор Андреевич',
    tel: '+79200366727',
    balance: 137506.12,
    status: 'active',
  },
  {
    id: "00a653ad-9ae6-4215-99f8-c004ac5aed2e",
    username: 'Смирнова Светлана Михайловна',
    tel: '+79209931533',
    balance: 290204.33,
    status: 'active',
  },
  {
    id: "12cc9766-57b2-4acc-8a6d-f886ac713629",
    username: 'Иванов Роман Александрович',
    tel: '+79525446057',
    balance: 285088.07,
    status: 'active',
  },
  {
    id: "8c92044c-06fe-4e62-a9f6-fc740affca9a",
    username: 'Пронина Анита Сергеевна',
    tel: '+79121334119',
    balance: 326978.24,
    status: 'active',
  },
  {
    id: "586cd839-2ec4-46e8-be82-e42326dce285",
    username: 'Воронов Александр Анатольевич',
    tel: '+79616675251',
    balance: 121595.52,
    status: 'active',
  },
  {
    id: "c21a969a-87bd-446b-ae65-30b77c4003d0",
    username: 'Ванин Леонид Николаевич',
    tel: '+79124653248',
    balance: 117708.06,
    status: 'active',
  },
  {
    id: "93bc0b04-328c-453e-a7db-b85e043aaa77",
    username: 'Кольцова Татьяна Игоревна',
    tel: '+79523742781',
    balance: 283500.02,
    status: 'active',
  },
]

export default defineComponent({
  name: 'MainPage',

  setup () {
    const pagination = ref({
      page: 1,
      rowsPerPage: 10
      // rowsNumber: xx if getting data from a server
    })

    return {
      pagination,
      columns,
      rows,
    }
  }
});
</script>