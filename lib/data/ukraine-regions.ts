export type UkraineCity = {
  slug: string;
  name: string;
  nameGen: string;
  nameLoc: string;
};

export type UkraineRegion = {
  slug: string;
  name: string;
  nameGen: string;
  nameLoc: string;
  center: UkraineCity;
  cities: UkraineCity[];
  active: boolean;
};

export const ukraineRegions: UkraineRegion[] = [
  {
    slug: "lvivska-oblast",
    name: "Львівська область",
    nameGen: "Львівської області",
    nameLoc: "Львівській області",
    active: true,
    center: { slug: "lviv", name: "Львів", nameGen: "Львова", nameLoc: "Львові" },
    cities: [
      { slug: "truskavets",   name: "Трускавець",  nameGen: "Трускавця",   nameLoc: "Трускавці"   },
      { slug: "drohobych",    name: "Дрогобич",    nameGen: "Дрогобича",   nameLoc: "Дрогобичі"   },
      { slug: "stryi",        name: "Стрий",       nameGen: "Стрия",       nameLoc: "Стрию"       },
      { slug: "chervonohrad", name: "Червоноград", nameGen: "Червонограда",nameLoc: "Червонограді"},
      { slug: "sambir",       name: "Самбір",      nameGen: "Самбора",     nameLoc: "Самборі"     },
    ],
  },
  {
    slug: "vinnytska-oblast",
    name: "Вінницька область",
    nameGen: "Вінницької області",
    nameLoc: "Вінницькій області",
    active: true,
    center: { slug: "vinnytsia", name: "Вінниця", nameGen: "Вінниці", nameLoc: "Вінниці" },
    cities: [
      { slug: "zhmerynka",         name: "Жмеринка",           nameGen: "Жмеринки",            nameLoc: "Жмеринці"           },
      { slug: "bar",               name: "Бар",                 nameGen: "Бара",                nameLoc: "Барі"               },
      { slug: "koziatyn",          name: "Козятин",             nameGen: "Козятина",            nameLoc: "Козятині"           },
      { slug: "mohyliv-podilskyi", name: "Могилів-Подільський", nameGen: "Могилева-Подільського",nameLoc: "Могилеві-Подільському"},
    ],
  },
  {
    slug: "dnipropetrovska-oblast",
    name: "Дніпропетровська область",
    nameGen: "Дніпропетровської області",
    nameLoc: "Дніпропетровській області",
    active: true,
    center: { slug: "dnipro", name: "Дніпро", nameGen: "Дніпра", nameLoc: "Дніпрі" },
    cities: [
      { slug: "kryvyi-rih", name: "Кривий Ріг",  nameGen: "Кривого Рогу", nameLoc: "Кривому Розі" },
      { slug: "kamianske",  name: "Кам'янське",  nameGen: "Кам'янського", nameLoc: "Кам'янському" },
      { slug: "nikopol",    name: "Нікополь",    nameGen: "Нікополя",     nameLoc: "Нікополі"     },
      { slug: "pavlohrad",  name: "Павлоград",   nameGen: "Павлограда",   nameLoc: "Павлограді"   },
    ],
  },
  {
    slug: "ivano-frankivska-oblast",
    name: "Івано-Франківська область",
    nameGen: "Івано-Франківської області",
    nameLoc: "Івано-Франківській області",
    active: true,
    center: { slug: "ivano-frankivsk", name: "Івано-Франківськ", nameGen: "Івано-Франківська", nameLoc: "Івано-Франківську" },
    cities: [
      { slug: "kolomyia", name: "Коломия",  nameGen: "Коломиї",  nameLoc: "Коломиї"  },
      { slug: "kalush",   name: "Калуш",    nameGen: "Калуша",   nameLoc: "Калуші"   },
      { slug: "nadvirna", name: "Надвірна", nameGen: "Надвірної",nameLoc: "Надвірній"},
    ],
  },

  {
    slug: "odeska-oblast",
    name: "Одеська область",
    nameGen: "Одеської області",
    nameLoc: "Одеській області",
    active: true,
    center: { slug: "odesa", name: "Одеса", nameGen: "Одеси", nameLoc: "Одесі" },
    cities: [
      { slug: "chornomorsk",           name: "Чорноморськ",           nameGen: "Чорноморська",           nameLoc: "Чорноморську"           },
      { slug: "izmail",                name: "Ізмаїл",                nameGen: "Ізмаїла",                nameLoc: "Ізмаїлі"                },
      { slug: "bilhorod-dnistrovskyi", name: "Білгород-Дністровський", nameGen: "Білгорода-Дністровського",nameLoc: "Білгороді-Дністровському"},
      { slug: "yuzhne",                name: "Южне",                  nameGen: "Южного",                 nameLoc: "Южному"                 },
    ],
  },
 
  {
    slug: "rivnenska-oblast",
    name: "Рівненська область",
    nameGen: "Рівненської області",
    nameLoc: "Рівненській області",
    active: true,
    center: { slug: "rivne", name: "Рівне", nameGen: "Рівного", nameLoc: "Рівному" },
    cities: [
      { slug: "dubno",  name: "Дубно",  nameGen: "Дубна", nameLoc: "Дубні"  },
      { slug: "korets", name: "Корець", nameGen: "Корця", nameLoc: "Корці"  },
      { slug: "sarny",  name: "Сарни",  nameGen: "Сарн",  nameLoc: "Сарнах" },
    ],
  },
  {
    slug: "ternopilska-oblast",
    name: "Тернопільська область",
    nameGen: "Тернопільської області",
    nameLoc: "Тернопільській області",
    active: true,
    center: { slug: "ternopil", name: "Тернопіль", nameGen: "Тернополя", nameLoc: "Тернополі" },
    cities: [
      { slug: "chortkiv",  name: "Чортків",   nameGen: "Чорткова", nameLoc: "Чорткові"  },
      { slug: "kremenets", name: "Кременець", nameGen: "Кременця", nameLoc: "Кременці"  },
    ],
  },
  {
    slug: "kharkivska-oblast",
    name: "Харківська область",
    nameGen: "Харківської області",
    nameLoc: "Харківській області",
    active: true,
    center: { slug: "kharkiv", name: "Харків", nameGen: "Харкова", nameLoc: "Харкові" },
    cities: [
      { slug: "lozova",  name: "Лозова", nameGen: "Лозової", nameLoc: "Лозовій" },
      { slug: "chuhuiv", name: "Чугуїв", nameGen: "Чугуєва", nameLoc: "Чугуєві" },
    ],
    },
  
  {
    slug: "khmelnytska-oblast",
    name: "Хмельницька область",
    nameGen: "Хмельницької області",
    nameLoc: "Хмельницькій області",
    active: true,
    center: { slug: "khmelnytskyi", name: "Хмельницький", nameGen: "Хмельницького", nameLoc: "Хмельницькому" },
    cities: [
      { slug: "kamianets-podilskyi", name: "Кам'янець-Подільський", nameGen: "Кам'янця-Подільського", nameLoc: "Кам'янці-Подільському" },
      { slug: "shepetivka",          name: "Шепетівка",             nameGen: "Шепетівки",            nameLoc: "Шепетівці"            },
    ],
  },
  {
    slug: "cherkaska-oblast",
    name: "Черкаська область",
    nameGen: "Черкаської області",
    nameLoc: "Черкаській області",
    active: true,
    center: { slug: "cherkasy", name: "Черкаси", nameGen: "Черкас", nameLoc: "Черкасах" },
    cities: [
      { slug: "uman",       name: "Умань",      nameGen: "Умані",       nameLoc: "Умані"       },
      { slug: "smila",      name: "Сміла",      nameGen: "Сміли",       nameLoc: "Смілі"       },
      { slug: "zolotonosha",name: "Золотоноша", nameGen: "Золотоноші",  nameLoc: "Золотоноші"  },
    ],
  },
  {
    slug: "chernihivska-oblast",
    name: "Чернігівська область",
    nameGen: "Чернігівської області",
    nameLoc: "Чернігівській області",
    active: true,
    center: { slug: "chernihiv", name: "Чернігів", nameGen: "Чернігова", nameLoc: "Чернігові" },
    cities: [
      { slug: "nizhyn",   name: "Ніжин",   nameGen: "Ніжина",  nameLoc: "Ніжині"  },
      { slug: "pryluky",  name: "Прилуки", nameGen: "Прилук",  nameLoc: "Прилуках"},
    ],
  },
  {
    slug: "chernivetska-oblast",
    name: "Чернівецька область",
    nameGen: "Чернівецької області",
    nameLoc: "Чернівецькій області",
    active: true,
    center: { slug: "chernivtsi", name: "Чернівці", nameGen: "Чернівців", nameLoc: "Чернівцях" },
    cities: [
      { slug: "khotyn",       name: "Хотин",       nameGen: "Хотина",      nameLoc: "Хотині"      },
      { slug: "storozhynets", name: "Сторожинець", nameGen: "Сторожинця",  nameLoc: "Сторожинці"  },
    ],
  },
  {
    slug: "volynska-oblast",
    name: "Волинська область",
    nameGen: "Волинської області",
    nameLoc: "Волинській області",
    active: true,
    center: { slug: "lutsk", name: "Луцьк", nameGen: "Луцька", nameLoc: "Луцьку" },
    cities: [
      { slug: "novovolynsk", name: "Нововолинськ", nameGen: "Нововолинська", nameLoc: "Нововолинську" },
      { slug: "kovel",       name: "Ковель",       nameGen: "Ковеля",        nameLoc: "Ковелі"        },
    ],
  },
  {
    slug: "zhytomyrska-oblast",
    name: "Житомирська область",
    nameGen: "Житомирської області",
    nameLoc: "Житомирській області",
    active: true,
    center: { slug: "zhytomyr", name: "Житомир", nameGen: "Житомира", nameLoc: "Житомирі" },
    cities: [
      { slug: "berdychiv",         name: "Бердичів",           nameGen: "Бердичева",          nameLoc: "Бердичеві"          },
      { slug: "korosten",          name: "Коростень",          nameGen: "Коростеня",          nameLoc: "Коростені"          },
      { slug: "novograd-volynsky", name: "Новоград-Волинський",nameGen: "Новограда-Волинського",nameLoc: "Новограді-Волинському"},
    ],
  },
  {
    slug: "kirovohradska-oblast",
    name: "Кіровоградська область",
    nameGen: "Кіровоградської області",
    nameLoc: "Кіровоградській області",
    active: true,
    center: { slug: "kropyvnytskyi", name: "Кропивницький", nameGen: "Кропивницького", nameLoc: "Кропивницькому" },
    cities: [
      { slug: "oleksandriia", name: "Олександрія", nameGen: "Олександрії", nameLoc: "Олександрії" },
      { slug: "znamianka",    name: "Знам'янка",   nameGen: "Знам'янки",   nameLoc: "Знам'янці"   },
    ],
  },
];