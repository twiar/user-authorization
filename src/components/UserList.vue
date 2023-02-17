<template>
	<q-table
		:rows="rows"
		:columns="columns"
		rows-per-page-label='Показывать на странице'
		:pagination="pagination"
		row-key="name"
		:filter="filter"
		:loading="loading"
	>
		<template v-slot:top>
			<q-input outlined dense debounce="300" color="primary" v-model="filter" placeholder='Найти (ID, ФИО, телефон)'>
				<template v-slot:append>
					<q-icon name="search" />
				</template>
			</q-input>
			<q-space />
      <q-btn color="primary" :disable="loading" label="Добавить пользователя" @click="addRow" />
		</template>
		<template v-slot:body="props">
			<q-tr :props="props">
				<q-td key="id" :props="props">{{ props.row.id }}</q-td>
				<q-td key="username" :props="props">{{ props.row.username }}</q-td>
				<q-td key="tel" :props="props">{{ props.row.tel }}</q-td>
				<q-td key="balance" :props="props">{{ props.row.balance }}</q-td>
				<q-td key="status" :props="props">
					<q-select outlined v-model="props.row.status" :options="['active', 'blocked']" />
				</q-td>
			</q-tr>
		</template>
	</q-table>
</template>

<script>
import { ref, computed, defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';

const columns = [
  { name: 'id', align: 'center', label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'username', label: 'ФИО', field: 'username', align: 'left', sortable: true },
  { name: 'tel', label: 'Телефон', field: 'tel', align: 'left', sortable: true },
  { name: 'balance', label: 'Баланс', field: 'balance', align: 'left', sortable: true },
  { name: 'status', label: 'Статус', field: 'status', align: 'left', sortable: true },
]

const originalRows = [
  {
    id: "1",
    username: 'Шевченко Вадим Александрович',
    tel: '+79129572879',
    balance: 421033.89,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "2",
    username: 'Шашков Валерий Сергеевич',
    tel: '+79526176877',
    balance: 269594.35,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "3",
    username: 'Крапивина Елена Викторовна',
    tel: '+79129290722',
    balance: 315275.94,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "4",
    username: 'Тихомиров Николай Иванович',
    tel: '+79872365528',
    balance: 452165.55,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "5",
    username: 'Долгополый Сергей Константинович',
    tel: '+79171455031',
    balance: 40884.05,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "6",
    username: 'Ленов Николай Николаевич',
    tel: '+79278182142',
    balance: 213234.38,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "7",
    username: 'Смирнова Елизавета Сергеевна',
    tel: '+79506571839',
    balance: 449782.09,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "8",
    username: 'Фирсин Андрей Валерьевич',
    tel: '+79056413667',
    balance: 293547.23,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "9",
    username: 'Гуторов Михаил Михайлович',
    tel: '+79046791780',
    balance: 361928.61,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "10",
    username: 'Мельник Евгений Викторович',
    tel: '+79535348990',
    balance: 441196.11,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "11",
    username: 'Золотарева Лидия Александровна',
    tel: '+79288459040',
    balance: 284390.44,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "12",
    username: 'Панин Никита Александрович',
    tel: '+79094344216',
    balance: 286357.89,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "13",
    username: 'Сарычев Александр Владимирович',
    tel: '+79643082099',
    balance: 356769.34,
    status: 'blocked',
  },
  {
    id: "14",
    username: 'Михайлов Александр Дмитриевич',
    tel: '+75296692555',
    balance: 287201.79,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "15",
    username: 'Суханов Антон Викторович',
    tel: '+79875904041',
    balance: 222070.55,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "16",
    username: 'Суганов Александр Александрович',
    tel: '+79373834253',
    balance: 167552.41,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "17",
    username: 'Ковалев Александр Владимирович',
    tel: '+79021947501',
    balance: 125364.87,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "18",
    username: 'Шатерников Максим Михайлович',
    tel: '+79522505290',
    balance: 96738.2,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "19",
    username: 'Дядькин Кирилл Александрович',
    tel: '+79507914339',
    balance: 123133.53,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "20",
    username: 'Агальцов Михаил Витальевич',
    tel: '+79507908858',
    balance: 486904.66,
    status: 'blocked',
  },
  {
    id: "21",
    username: 'Смольницкая Елена Николаевна',
    tel: '+79045250588',
    balance: 57874.87,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "22",
    username: 'Роякин Владимир Михайлович',
    tel: '+79532734976',
    balance: 328261.28,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "23",
    username: 'Коновалов Тимур Игоревич',
    tel: '+79519295239',
    balance: 446899.87,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "24",
    username: 'Душков Николай Евгеньевич',
    tel: '+79215893790',
    balance: 408451.41,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "25",
    username: 'Иван Иванов Иванович',
    tel: '+79218786259',
    balance: 183091.2,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "26",
    username: 'Ложков Станислав Александрович',
    tel: '+79831253660',
    balance: 388313.9,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "27",
    username: 'Лыкова Мария Александровна',
    tel: '+79506476557',
    balance: 335509.06,
    status: 'blocked',
  },
  {
    id: "28",
    username: 'Александров Евгений Игоревич',
    tel: '+79102103366',
    balance: 121165.37,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "29",
    username: 'Кузьмин Александр Александрович',
    tel: '+79052324058',
    balance: 128339.21,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "30",
    username: 'Лагутин Анатолий Валерьевич',
    tel: '+79184094463',
    balance: 245388.32,
    status: 'blocked',
  },
  {
    id: "31",
    username: 'Климов Александр Александрович',
    tel: '+79373513584',
    balance: 347197.97,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "32",
    username: 'Лебедева Валерия Витальевна',
    tel: '+79643250685',
    balance: 348785.25,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "33",
    username: 'Блинов Павел Валентинович',
    tel: '+79031328227',
    balance: 238598.38,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "34",
    username: 'Цветнов Виктор Андреевич',
    tel: '+79200366727',
    balance: 137506.12,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "35",
    username: 'Смирнова Светлана Михайловна',
    tel: '+79209931533',
    balance: 290204.33,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "36",
    username: 'Иванов Роман Александрович',
    tel: '+79525446057',
    balance: 285088.07,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "37",
    username: 'Пронина Анита Сергеевна',
    tel: '+79121334119',
    balance: 326978.24,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "38",
    username: 'Воронов Александр Анатольевич',
    tel: '+79616675251',
    balance: 121595.52,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "39",
    username: 'Ванин Леонид Николаевич',
    tel: '+79124653248',
    balance: 117708.06,
    status: 'active',
		created: '16.02.2023 20:53',
  },
  {
    id: "40",
    username: 'Кольцова Татьяна Игоревна',
    tel: '+79523742781',
    balance: 283500.02,
    status: 'active',
		created: '16.02.2023 20:53',
  },
]

export default defineComponent({
  name: 'UserList',

  setup () {
		const store = useStore();

    const pagination = ref({
      page: 1,
      rowsPerPage: 10
    });
    const loading = ref(false);
    const filter = ref('');
    const rowCount = ref(40);
    const rows = ref([...originalRows]);

    function offModal(e) {
      if (e.target.classList.value === 'modal__bg') {
        document.querySelector('.modal__bg').removeEventListener('click', offModal);
        e.target.remove();
        if (loading.value) loading.value = false;
      }
    }

		function openProfile(e) {
			if (e.target.classList.value.includes('field')) return;

      const nodeIndex = Array.from(e.target.closest('tr').parentNode.children).indexOf(e.target.closest('tr'));

      document.querySelector('body').insertAdjacentHTML('beforeend', `
        <div class="modal__bg">
          <div class="modal flex column">
            <div class="modal__item">
              <div class="title">ФИО</div>
              <div class="info">${originalRows[nodeIndex].username}</div>
            </div>
            <div class="modal__item">
              <div class="title">Телефон</div>
              <div class="info">${originalRows[nodeIndex].tel}</div>
            </div>
            <div class="modal__item">
              <div class="title">Баланс</div>
              <div class="info">${originalRows[nodeIndex].balance}</div>
            </div>
            <div class="modal__item">
              <div class="title">Статус</div>
              <div class="info">${originalRows[nodeIndex].status}</div>
            </div>
            <div class="modal__item">
              <div class="title">ID</div>
              <div class="info">${originalRows[nodeIndex].id}</div>
            </div>
            <div class="modal__item">
              <div class="title">Дата создания</div>
              <div class="info">${originalRows[nodeIndex].created}</div>
            </div>
          </div>
        </div>
      `);

      document.querySelector('.modal__bg').addEventListener('click', offModal);
		}

		onMounted(() => {
			document.querySelectorAll('.q-table tbody tr').forEach((el) => {
				el.addEventListener('click', openProfile);
			});

      store.dispatch('GET_USERS');
		});

		onBeforeUnmount(() => {
			document.querySelectorAll('.q-table tbody tr').forEach((el) => {
				el.removeEventListener('click', openProfile);
			});
		});

    return {
      pagination,
      columns,
      rows,

      loading,
      filter,
      rowCount,

      addRow () {
        loading.value = true;
        document.querySelector('body').insertAdjacentHTML('beforeend', `
          <div class="modal__bg">
            <div class="modal flex flex-center column">
              <h2 class="text-h2">Добавить пользователя</h2>
              <input type="text" placeholder="ФИО" />
              <input type="text" placeholder="Телефон" />
              <button>Добавить</button>
            </div>
          </div>
        `);

        document.querySelector('.modal__bg').addEventListener('click', offModal);
      },
    }
  }
});
</script>