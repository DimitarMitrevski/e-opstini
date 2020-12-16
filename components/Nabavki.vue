<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <label for="selectOpstini">Изберете Општина</label>
          <b-form-select name="selectOpstini" v-model="selectedOpstina" :options="optionsOpstini"></b-form-select>
        </b-col>
        <b-col>
          <label for="selectOpstini">Број на резулати по страна</label>
          <b-form-select name="selectOpstini" v-model="perPage" :options="resultsPerPage"></b-form-select>
        </b-col>
        <b-col>
          <label for="datepicker-dateformat1">Од</label>
          <b-form-datepicker
            id="datepicker-dateformat1"
            :date-format-options="{ year: 'numeric',day: 'numeric', month:'numeric'}"
            v-bind="labels[locale]||{}"
            :locale="locale"
          ></b-form-datepicker>
        </b-col>
        <b-col>
          <label for="datepicker-dateformat2">До</label>
          <b-form-datepicker
            id="datepicker-dateformat2"
            :date-format-options="{ year: 'numeric',day: 'numeric', month:'numeric'}"
            v-bind="labels[locale]||{}"
            :locale="locale"
          ></b-form-datepicker>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-table
          v-if="selectedOpstina"
          :items="items"
          :fields="fields"
          caption-top
          head-variant="dark"
          table-variant="light"
          :per-page="perPage"
          :current-page="currentPage"
        >
          <template #cell(opstina1)>
            <b class="text-info">{{selectedOpstina}}</b>
          </template>
          <template #cell(link)="data">
            <a :href="data.value" target="_blank">Линк од договорот</a>
          </template>

          <template #table-caption>
            <h3 class="h3">Направени набавки за {{selectedOpstina}}</h3>
          </template>
        </b-table>
        <p
          v-else
          style="font-size: 1.5rem;"
        >Немате избрано општина, ве молиме изберете од мениот погоре.</p>
      </b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ['opstina'],
  computed: {
    rows() {
      return this.items.length
    },
  },
  data() {
    return {
      locale: 'mk',
      perPage: 5,
      currentPage: 1,
      labels: {
        mk: {
          labelPrevDecade: 'Претходна декада',
          labelPrevYear: 'Минатата година',
          labelPrevMonth: 'Минатиот Месец',
          labelCurrentMonth: 'Сегашниот Месец',
          labelNextMonth: 'Следниот Месец',
          labelNextYear: 'Следна година',
          labelNextDecade: 'Следна декада',
          labelToday: 'Денес',
          labelSelected: 'Избран датум',
          labelNoDateSelected: 'Немата избрано датум',
          labelCalendar: 'Календар',
          labelNav: 'Навигација',
          labelHelp: 'Помош',
        },
        resultsPerPage: [
          { value: 1, text: '1' },
          { value: 2, text: '2' },
          { value: 3, text: '3' },
          { value: 4, text: '4' },
          { value: 5, text: '5' },
          { value: 10, text: '10' },
        ],
      },
      fields: [
        'Датум_на_договор',
        'Предмет_на_договор',
        { key: 'opstina1', label: 'Договорен орган' },
        'Носител_на_договор',
        'Доделена_вредност_со_ДДВ',
        { key: 'link', label: 'Линкови до договори' },
      ],
      items: [
        {
          Датум_на_договор: '01.07.2020',
          Предмет_на_договор: 'топломер',
          opstina1: 'Општина',
          Носител_на_договор:
            'Друштво за трговија и услуги ЕУРО - ФАРМ увоз-извоз ДООЕЛ Битола',
          Доделена_вредност_со_ДДВ: '19.460,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '17.06.2020',
          Предмет_на_договор: 'маски',
          opstina1: 'Општина',
          Носител_на_договор:
            'Трговско друштво за трговија на големо и мало, услуги, маркетинг и увоз-извоз МАНЧЕ ДЕНТ Велика ДООЕЛ Битола',
          Доделена_вредност_со_ДДВ: '4.000,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '09.06.2020',
          Предмет_на_договор: 'осиг. и зелен картон бт-001дх',
          opstina1: 'Општина',
          Носител_на_договор:
            'Национална групација за осигурување АД ОСИГУРИТЕЛНА ПОЛИСА Скопје',
          Доделена_вредност_со_ДДВ: '5.536,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '01.07.2020',
          Предмет_на_договор: 'топломер',
          opstina1: 'Општина',
          Носител_на_договор:
            'Друштво за трговија и услуги ЕУРО - ФАРМ увоз-извоз ДООЕЛ Битола',
          Доделена_вредност_со_ДДВ: '19.460,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '17.06.2020',
          Предмет_на_договор: 'маски',
          opstina1: 'Општина',
          Носител_на_договор:
            'Трговско друштво за трговија на големо и мало, услуги, маркетинг и увоз-извоз МАНЧЕ ДЕНТ Велика ДООЕЛ Битола',
          Доделена_вредност_со_ДДВ: '4.000,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '09.06.2020',
          Предмет_на_договор: 'осиг. и зелен картон бт-001дх',
          opstina1: 'Општина',
          Носител_на_договор:
            'Национална групација за осигурување АД ОСИГУРИТЕЛНА ПОЛИСА Скопје',
          Доделена_вредност_со_ДДВ: '5.536,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '01.07.2020',
          Предмет_на_договор: 'топломер',
          opstina1: 'Општина',
          Носител_на_договор:
            'Друштво за трговија и услуги ЕУРО - ФАРМ увоз-извоз ДООЕЛ Битола',
          Доделена_вредност_со_ДДВ: '19.460,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '17.06.2020',
          Предмет_на_договор: 'маски',
          opstina1: 'Општина',
          Носител_на_договор:
            'Трговско друштво за трговија на големо и мало, услуги, маркетинг и увоз-извоз МАНЧЕ ДЕНТ Велика ДООЕЛ Битола',
          Доделена_вредност_со_ДДВ: '4.000,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '09.06.2020',
          Предмет_на_договор: 'осиг. и зелен картон бт-001дх',
          opstina1: 'Општина',
          Носител_на_договор:
            'Национална групација за осигурување АД ОСИГУРИТЕЛНА ПОЛИСА Скопје',
          Доделена_вредност_со_ДДВ: '5.536,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '01.07.2020',
          Предмет_на_договор: 'топломер',
          opstina1: 'Општина',
          Носител_на_договор:
            'Друштво за трговија и услуги ЕУРО - ФАРМ увоз-извоз ДООЕЛ Битола',
          Доделена_вредност_со_ДДВ: '19.460,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '17.06.2020',
          Предмет_на_договор: 'маски',
          opstina1: 'Општина',
          Носител_на_договор:
            'Трговско друштво за трговија на големо и мало, услуги, маркетинг и увоз-извоз МАНЧЕ ДЕНТ Велика ДООЕЛ Битола',
          Доделена_вредност_со_ДДВ: '4.000,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
        {
          Датум_на_договор: '09.06.2020',
          Предмет_на_договор: 'осиг. и зелен картон бт-001дх',
          opstina1: 'Општина',
          Носител_на_договор:
            'Национална групација за осигурување АД ОСИГУРИТЕЛНА ПОЛИСА Скопје',
          Доделена_вредност_со_ДДВ: '5.536,00',
          link:
            'https://e-nabavki.gov.mk/PublicAccess/home.aspx#/dossie-quartal-evidences/70885a6b-b8b4-4667-86d9-cdb25dcc2ecd',
        },
      ],
      selectedOpstina: null,
      optionsOpstini: [
        { value: null, text: 'Изберете една оштина' },
        { value: this.opstina, text: this.opstina},
        { value: 'Општина Битола', text: 'Општина Битола' },
        { value: 'Општина Валандово', text: 'Општина Валандово' },
        { value: 'Општина Гостивар', text: 'Општина Гостивар' },
        { value: 'Општина Штип', text: 'Општина Штип' },
        { value: 'Општина Карпош', text: 'Општина Карпош' },
      ],
      resultsPerPage: [
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 10, text: '10' },
      ],
    }
  },
  created() {
    this.selectedOpstina = this.opstina
  },
}
</script>

<style scoped>
.h3 {
  text-align: center;
  color: white;
}
</style>