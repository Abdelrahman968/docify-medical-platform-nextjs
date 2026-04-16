import Avatar from '@/assets/homePage/customers/avatar1.jpg';
import { StaticImageData } from 'next/image';

interface ICustomer {
  id: number;
  image: StaticImageData;
  type: {
    en: string;
    ar: string;
  };
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}

export const customers: ICustomer[] = [
  {
    id: 1,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميل',
    },
    name: {
      en: 'Ibrahim Mohamed',
      ar: 'إبراهيم محمد',
    },
    description: {
      en: 'At first, I wasn’t confident about home care, but I quickly felt comfortable and well-informed. Receiving treatment at home has significantly improved my quality of life.',
      ar: 'في البداية لم أكن واثقًا من الرعاية المنزلية، لكنني سرعان ما شعرت بالراحة والثقة. تلقي العلاج في المنزل حسّن بشكل كبير من جودة حياتي.',
    },
  },
  {
    id: 2,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميل',
    },
    name: {
      en: 'Ahmed Ali',
      ar: 'أحمد علي',
    },
    description: {
      en: 'The service was excellent and very professional. I highly recommend it to anyone looking for quality home care.',
      ar: 'كانت الخدمة ممتازة واحترافية للغاية. أنصح بها بشدة لأي شخص يبحث عن رعاية منزلية عالية الجودة.',
    },
  },
  {
    id: 3,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميل',
    },
    name: {
      en: 'Sara Hassan',
      ar: 'سارة حسن',
    },
    description: {
      en: 'Everything was smooth and well organized. The medical team was supportive and caring.',
      ar: 'كان كل شيء سلسًا ومنظمًا بشكل جيد. الفريق الطبي كان داعمًا ومهتمًا للغاية.',
    },
  },
  {
    id: 4,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميل',
    },
    name: {
      en: 'Mohammed Al Mansouri',
      ar: 'محمد المنصوري',
    },
    description: {
      en: 'The nursing staff was very professional and punctual. Home care saved me a lot of time and effort.',
      ar: 'كان فريق التمريض محترفًا جدًا وملتزمًا بالمواعيد. وفرت لي الرعاية المنزلية الكثير من الوقت والجهد.',
    },
  },
  {
    id: 5,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميل',
    },
    name: {
      en: 'Fatima Al Zahra',
      ar: 'فاطمة الزهراء',
    },
    description: {
      en: "I was hesitant at first, but now I can't imagine going back to the hospital. Thank you for this wonderful service.",
      ar: 'كنت مترددة في البداية، لكنني الآن لا أتخيل العودة إلى المستشفى. شكراً لكم على هذه الخدمة الرائعة.',
    },
  },
  {
    id: 6,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميل',
    },
    name: {
      en: 'Omar Farouk',
      ar: 'عمر فاروق',
    },
    description: {
      en: 'The medical team explained every step to me in detail. I felt safe and well taken care of throughout the entire journey.',
      ar: 'شرح لي الفريق الطبي كل خطوة بالتفصيل. شعرت بالأمان والرعاية الجيدة طوال الرحلة بأكملها.',
    },
  },
  {
    id: 7,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميلة',
    },
    name: {
      en: 'Layla Ahmed',
      ar: 'ليلى أحمد',
    },
    description: {
      en: 'A wonderful experience from start to finish. The staff was compassionate and the equipment was modern and clean.',
      ar: 'تجربة رائعة من البداية حتى النهاية. كان الموظفون متعاطفين والمعدات حديثة ونظيفة.',
    },
  },
  {
    id: 8,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميل',
    },
    name: {
      en: 'Khaled Al Rashid',
      ar: 'خالد الراشد',
    },
    description: {
      en: 'This service is a game changer for elderly care. My father is much happier and more comfortable at home.',
      ar: 'هذه الخدمة تغير قواعد اللعبة في رعاية المسنين. والدي أصبح أكثر سعادة وراحة في المنزل.',
    },
  },
  {
    id: 9,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميلة',
    },
    name: {
      en: 'Nour El Din',
      ar: 'نور الدين',
    },
    description: {
      en: 'Quick response time and very professional follow-ups. Highly recommended for post-surgery care.',
      ar: 'وقت استجابة سريع ومتابعات احترافية للغاية. موصى به بشدة للرعاية بعد العمليات الجراحية.',
    },
  },
  {
    id: 10,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميل',
    },
    name: {
      en: 'Youssef Hatem',
      ar: 'يوسف حاتم',
    },
    description: {
      en: 'The physical therapy sessions at home made a huge difference in my recovery speed. Thank you!',
      ar: 'جلسات العلاج الطبيعي في المنزل أحدثت فرقًا كبيرًا في سرعة تعافيي. شكراً لكم!',
    },
  },
  {
    id: 11,
    image: Avatar,
    type: {
      en: 'Customer',
      ar: 'عميلة',
    },
    name: {
      en: 'Mariam Nabil',
      ar: 'مريم نبيل',
    },
    description: {
      en: "I've tried multiple home care providers, and this is by far the best. Professional, reliable, and compassionate.",
      ar: 'لقد جربت عدة مقدمي رعاية منزلية، وهذه هي الأفضل بلا منازع. محترفون وموثوقون ومتعاطفون.',
    },
  },
];
