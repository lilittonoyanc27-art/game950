export interface VerbTheory {
  verb: string;
  meaning: string;
  conjugations: { subject: string; form: string }[];
}

export interface Question {
  id: string;
  prompt: string;
  choices: string[];
  target: string;
  translation: string;
  type: 'work' | 'senses';
}

export const VERB_THEORY: VerbTheory[] = [
  {
    verb: 'Trabajar (People)',
    meaning: 'Used when people are working at a job or on a task.',
    conjugations: [
      { subject: 'Yo', form: 'trabajo' },
      { subject: 'Tú', form: 'trabajas' },
      { subject: 'Él/Ella/Usted', form: 'trabaja' },
      { subject: 'Nosotros', form: 'trabajamos' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'trabajan' }
    ]
  },
  {
    verb: 'Funcionar (Objects)',
    meaning: 'Used for machines, plans, or systems that are working/functioning.',
    conjugations: [
      { subject: 'Yo', form: 'funciono' },
      { subject: 'Tú', form: 'funcionas' },
      { subject: 'Él/Ella/Usted', form: 'funciona' },
      { subject: 'Nosotros', form: 'funcionamos' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'funcionan' }
    ]
  },
  {
    verb: 'Oír (To Hear)',
    meaning: 'An irregular verb used for the sense of hearing.',
    conjugations: [
      { subject: 'Yo', form: 'oigo' },
      { subject: 'Tú', form: 'oyes' },
      { subject: 'Él/Ella/Usted', form: 'oye' },
      { subject: 'Nosotros', form: 'oímos' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'oyen' }
    ]
  },
  {
    verb: 'Escribir (To Write)',
    meaning: 'A regular -ir verb for the action of writing.',
    conjugations: [
      { subject: 'Yo', form: 'escribo' },
      { subject: 'Tú', form: 'escribes' },
      { subject: 'Él/Ella/Usted', form: 'escribe' },
      { subject: 'Nosotros', form: 'escribimos' },
      { subject: 'Ellos/Ellas/Ustedes', form: 'escriben' }
    ]
  }
];

export const GAME_1_QUESTIONS: Question[] = [
  { id: '1', prompt: 'Usted ___ mucho en la oficina.', choices: ['trabaja', 'funciona'], target: 'trabaja', translation: 'Դուք շատ եք աշխատում գրասենյակում:' , type: 'work'},
  { id: '2', prompt: 'El ascensor no ___ hoy.', choices: ['trabaja', 'funciona'], target: 'funciona', translation: 'Վերելակն այսօր չի աշխատում:' , type: 'work'},
  { id: '3', prompt: 'Ustedes ___ en el gimnasio.', choices: ['trabajan', 'funcionan'], target: 'trabajan', translation: 'Դուք աշխատում եք մարզասրահում:' , type: 'work'},
  { id: '4', prompt: 'Mi reloj nuevo ___ bien.', choices: ['trabaja', 'funciona'], target: 'funciona', translation: 'Իմ նոր ժամացույցը լավ է աշխատում:' , type: 'work'},
  { id: '5', prompt: 'Pedro y yo ___ aquí.', choices: ['trabajamos', 'funcionamos'], target: 'trabajamos', translation: 'Պեդրոն և ես աշխատում ենք այստեղ:' , type: 'work'},
  { id: '6', prompt: 'Ese plan no ___ nunca.', choices: ['trabaja', 'funciona'], target: 'funciona', translation: 'Այդ պլանը երբեք չի աշխատում (արդյունավետ չէ):' , type: 'work'},
  { id: '7', prompt: '¿Usted ___ como médico?', choices: ['trabaja', 'funciona'], target: 'trabaja', translation: 'Դուք աշխատո՞ւմ եք որպես բժիշկ:' , type: 'work'},
  { id: '8', prompt: 'Las luces ___ ahora.', choices: ['trabajan', 'funcionan'], target: 'funcionan', translation: 'Լույսերն այժմ աշխատում են:' , type: 'work'}
];

export const GAME_2_QUESTIONS: Question[] = [
  { id: '9', prompt: 'Yo ___ música clásica.', choices: ['oigo', 'escribo'], target: 'oigo', translation: 'Ես դասական երաժշտություն եմ լսում:' , type: 'senses'},
  { id: '10', prompt: '¿Usted ___ una carta?', choices: ['oye', 'escribe'], target: 'escribe', translation: 'Դուք նամա՞կ եք գրում:' , type: 'senses'},
  { id: '11', prompt: 'Ustedes ___ el ruido.', choices: ['oyen', 'escriben'], target: 'oyen', translation: 'Դուք լսում եք աղմուկը:' , type: 'senses'},
  { id: '12', prompt: 'Nosotros ___ en español.', choices: ['oímos', 'escribimos'], target: 'escribimos', translation: 'Մենք գրում ենք իսպաներենով:' , type: 'senses'},
  { id: '13', prompt: '¿Tú ___ a los pájaros?', choices: ['oyes', 'escribes'], target: 'oyes', translation: 'Դու լսո՞ւմ ես թռչուններին:' , type: 'senses'},
  { id: '14', prompt: 'Ella ___ un libro nuevo.', choices: ['oye', 'escribe'], target: 'escribe', translation: 'Նա նոր գիրք է գրում:' , type: 'senses'},
  { id: '15', prompt: 'Yo ___ mi nombre.', choices: ['oigo', 'escribo'], target: 'escribo', translation: 'Ես գրում եմ իմ անունը:' , type: 'senses'}
];

export const ASSETS = {
  ERNESTO: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop',
  KITTEN: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=800&auto=format&fit=crop'
};
