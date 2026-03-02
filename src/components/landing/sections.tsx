import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Стандарт ESIS · ЦФО</Badge>,
    title: "Чистота по европейскому стандарту.",
    showButton: true,
    buttonText: 'Получить расчёт',
    bgImage: 'https://cdn.poehali.dev/projects/a03c49a7-153d-4632-a4a2-a0ab122d2fbb/files/f539ed6c-208e-488b-bb60-38be7474e18c.jpg'
  },
  {
    id: 'about',
    title: 'Почему Евро Клин?',
    content: 'Более 1000 довольных организаций в ЦФО. Мы строго следуем европейскому стандарту чистоты ESIS — это гарантия комфорта и безопасности для ваших сотрудников и клиентов.',
    bgImage: 'https://cdn.poehali.dev/projects/a03c49a7-153d-4632-a4a2-a0ab122d2fbb/files/711492e8-4eac-48ec-a2ef-f60b4dd17506.jpg'
  },
  {
    id: 'features',
    title: 'Что мы делаем',
    content: 'Комплексная уборка коммерческих помещений и долгосрочное обслуживание. Офисы, торговые центры, склады, производства — работаем по требованиям клиента с особым вниманием к санитарной обработке.',
    bgImage: 'https://cdn.poehali.dev/projects/a03c49a7-153d-4632-a4a2-a0ab122d2fbb/files/2fb4d756-bb90-4a6e-8bfe-5653a8b7cb36.jpg'
  },
  {
    id: 'testimonials',
    title: 'Гарантия качества',
    content: 'Каждый объект принимается по чек-листу стандарта ESIS. Если результат вас не устраивает — мы устраняем замечания бесплатно. Без компромиссов с чистотой.',
    bgImage: 'https://cdn.poehali.dev/projects/a03c49a7-153d-4632-a4a2-a0ab122d2fbb/files/84ebabf9-2841-4512-aef1-9b6f8795986c.jpg'
  },
  {
    id: 'join',
    title: 'Обсудим ваш объект',
    content: 'Свяжитесь с нами — рассчитаем стоимость уборки и составим индивидуальный план обслуживания. ООО «Евро Клин» · Хрущинская Светлана Леонидовна · +7 (920) 606-66-62',
    showButton: true,
    buttonText: 'Позвонить нам',
    bgImage: 'https://cdn.poehali.dev/projects/a03c49a7-153d-4632-a4a2-a0ab122d2fbb/files/fc32f9eb-1630-4757-9f6f-57166e604be1.jpg'
  },
]