const salesData = [
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
    price: "3.280.000",
    content: [
      {
        type: "text",
        text: "Aquarous - это жилой комплекс, расположенный всего в 500 метрах от пляжа Джомтьен в Паттайе. Проект разработан AssetWise, кондо построится до конца в 2027 году . Здесь вас ждёт свежий дизайн, а так же новые и современные виды квартир",
      },
      {
        type: "text",
        text: "Этот комплекс с двумя корпусами высотой 44 и 47 этажей предоставляет великолепные панорамные виды на море. Жителей встречает шикарное лобби с высоким потолком, которое создает атмосферу уюта и изысканности. В этом Кондо есть много зон для отдыха и мест, где можно наслаждаться своим отдыхом.",
      },
      {
        type: "text",
        text: "Имеются семейные зоны: детский клуб , детская площадка и аркадная зона для развлечений. Aqua Club на 3-м этаже с пляжным бассейном и бассейном для детей Cloud Club на 43 и 44 этажах включает видовой бассейн на крыше, лаундж зона, фитнес-зал, зону для йоги и площадку для занятия боксом Spa-центр с онсэн, сауной и парной для полного расслабления.",
      },
      {
        type: "iconText",
        icon: "icons/key.png",
        title: "Безопасность",
        text: "Также в Кондо присутствует круглосуточная охрана . Также парковка и вход в Кондо по магнитной карте",
      },
      {
        type: "text",
        text: "Aquarous включает различные типы квартир и их квадратуру : Квартиры с 1 спальней (1 бедрум) начинаются от 34 до 77 м² Также есть 2 бедрум площадью от 80 до 142 м² И квартиры с 3 спальнями площадью до 316 м²",
      },
      {
        type: "text",
        text: "Aquarous Jomtien - отличный кондоминиум, где можно расслабиться и насладиться жизнью в Паттайе",
      },
    ],
    roomType: "Квартира, 1 bedroom",
  },
  {
    id: "zenith",
    route: "/objects/zenith",
    images: [
      "zenith1.webp",
      "zenith2.webp",
      "zenith3.webp",
      "zenith4.webp",  
      "zenith5.webp",
    ],
    title: "Zenith",
    price: "2,990,000",
  },
  {
    id: "grand-solaire-noble",
    images: [
      "noble1.webp",
      "noble2.webp",
      "noble3.webp",
      "noble4.webp",
      "noble5.webp",
    ],
    title: "Grand Solaire Noble",
    price: "3,199,000",
  },
  {
    images: [
      "aromW1.webp",
      "aromW2.webp",
      "aromW3.webp",
      "aromW4.webp",
      "aromW5.webp",
    ],
    title: "Arom Wongamat",
    price: "16,057,000",
  },
  {
    images: ["aromJ1.webp", "aromJ2.webp", "aromJ3.webp", "aromJ4.webp"],
    title: "Arom Jomtien",
    price: "6,745,000",
  },
  {
    images: [
      "aquarous1.webp",
      "aquarous2.webp",
      "aquarous3.webp",
      "aquarous4.webp",
    ],
    title: "Aquarous",
    price: "5,422,000",
  },
  {
    images: ["beverly1.webp", "beverly2.webp", "beverly3.webp"],
    title: "Riviera Beverly Hills",
    price: "3,200,000",
  },
  {
    images: [
      "california1.webp",
      "california2.webp",
      "california3.webp",
      "california4.webp",
      "california5.webp",
    ],
    title: "Riviera California",
    price: "3,900,000",
  },
  {
    images: ["monica1.webp", "monica2.webp", "monica3.webp"],
    title: "Riviera Santa Monica",
    price: "4,312,000",
  },
  {
    images: [
      "lucean1.webp",
      "lucean2.webp",
      "lucean3.webp",
      "lucean4.webp",
      "lucean5.webp",
    ],
    title: "Sky Park Lucean",
    price: "3,900,000",
  },
  {
    images: [
      "carnival1.webp",
      "carnival2.webp",
      "carnival3.webp",
      "carnival4.webp",
    ],
    title: "Seven Seas Le Carnival",
    price: "2,767,000",
  },
  {
    images: [
      "embassy1.webp",
      "embassy2.webp",
      "embassy3.webp",
      "embassy4.webp",
      "embassy5.webp",
    ],
    title: "Embassy Life",
    price: "2,490,000",
  },
  {
    images: [
      "pristine1.webp",
      "pristine2.webp",
      "pristine3.webp",
      "pristine4.webp",
      "pristine5.webp",
    ],
    title: "Pristine Park 3",
    price: "1.859.000",
  },
  {
    images: [
      "reef1.webp",
      "reef2.webp",
      "reef3.webp",
      "reef4.webp",
      "reef5.webp",
    ],
    title: "Copacabanna Coral Reef",
    price: "3,619,000",
  },
  {
    images: ["spire1.webp", "spire2.webp", "spire3.webp", "spire4.webp"],
    title: "Sea Spire",
    price: "4,418,000",
  },
  {
    images: [
      "oasis1.webp",
      "oasis2.webp",
      "oasis3.webp",
      "oasis4.webp",
      "oasis5.webp",
    ],
    title: "Siam Oriental Oasis",
    price: "2,844,000",
  },
  {
    images: [
      "harmonia1.webp",
      "harmonia2.webp",
      "harmonia3.webp",
      "harmonia4.webp",
      "harmonia5.webp",
    ],
    title: "Harmonia City Garden",
    price: "2,494,000",
  },
];

export default salesData;
