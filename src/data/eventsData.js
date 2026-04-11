import comfortIcon from "/icons/comfort.png";
import keyIcon from "/icons/key.png";
import apartmentIcon from "/icons/apartment.png";
import mapIcon from "/icons/map.png";


const eventsData = [
  {
    id: "grand-solaire",
    route: "/objects/grand-solaire",
    images: [
      "solaire1.webp",
      "solaire2.webp",
      "solaire3.webp",
      "solaire4.webp",
      "solaire5.webp",
    ],
    title: "Grand Solaire",
    price: "От 3,280,000 ",
    content: [
      {
        type: "text",
        text: "Новый кондоминиум находящийся в центре Паттайи на улице Thapraya. На данный момент это будет самый высокий кондоминиум в Паттайе - 67 этажей!",
      },
      {
        type: "text",
        text: "Этот кондоминиум находится в центре Паттайи, поэтому вся необходимая инфраструктура находится в шаговой доступности от комплекса",
      },
      {
        type: "iconText",
        icon: comfortIcon,
        title: "Удобства",
        text: "Внутри кондоминиума есть зоны общего пользования : видовой  бассейн с баром, джакузи, смотровая площадка, зона с лежаками, ресторан, тренажерный зал, сауна, корт для игры в разные виды спорта, бассейн с искусственными волнами, зона для отдыха",
      },
      {
        type: "iconText",
        icon: keyIcon,
        title: "Безопасность",
        text: "Также в кондо присутствует круглосуточная охрана. Парковка и вход в кондо по магнитной карте",
      },
      {
        type: "iconText",
        icon: apartmentIcon,
        title: "Возможности",
        text: "В Grand Solaire есть разные виды квартир : студии, 1 бедрум, 2 бедрум, 3 бедрум",
      },
      {
        type: "text",
        text: "Grand Solaire - один из самых уникальных кондоминиумов в Паттайе в центре",
      },
    ],
    roomType: "Квартира, Studio/1 bedroom",
    thaiRooms: [
      {
        type: "Studio",
        price: "3,280,000 THB",
      },
      {
        type: "Studio",
        price: "3,000,000 THB",
      },
    ],
    foreignRooms: [
      {
        type: "1 bedroom",
        price: "4,500,000 THB",
      },
    ],
  },
];

export default eventsData;
