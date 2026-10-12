export const skills = [
  {id:'safety',en:'Safety awareness',uk:'Увага до безпеки',x:24,y:23},
  {id:'reasoning',en:'Technical reasoning',uk:'Технічне міркування',x:67,y:18},
  {id:'planning',en:'Planning',uk:'Планування',x:83,y:48},
  {id:'communication',en:'Communication',uk:'Комунікація',x:64,y:80},
  {id:'empathy',en:'Empathy',uk:'Емпатія',x:27,y:76},
  {id:'adaptability',en:'Adaptability',uk:'Адаптивність',x:13,y:49}
];

// Narrow bilingual phrase rules. Matches are observations of words, never skill scores.
export const rules = [
  {skill:'safety', pattern:/\b(stop|pause|isolate|unsafe|hazard|safe)\b|зупин|небезпеч|безпеч|ізолю/giu, en:'Names a safety or pause consideration.',uk:'Згадує безпеку або призупинення.'},
  {skill:'reasoning',pattern:/\b(check|inspect|verify|cause|evidence|unknown|diagnos\w*)\b|перевір|огляд|причин|доказ|невідом/giu,en:'Names checking, evidence or an unknown.',uk:'Згадує перевірку, докази або невідоме.'},
  {skill:'planning',pattern:/\b(prioriti\w*|first|schedule|route|deadline|plan)\b|пріоритет|спочатку|графік|маршрут|термін|план/giu,en:'Names a sequence, priority or plan.',uk:'Згадує послідовність, пріоритет або план.'},
  {skill:'communication',pattern:/\b(tell|notify|explain|ask|inform|contact|listen)\b|повідом|поясн|запита|зв[’']?яж|слух/giu,en:'Names asking, listening or communicating.',uk:'Згадує запитання, слухання або комунікацію.'},
  {skill:'empathy',pattern:/\b(feel\w*|concern\w*|understand|reassure|consent|respect)\b|почут|хвилю|зрозум|заспок|згод|поваг/giu,en:'Names concern, consent or understanding.',uk:'Згадує турботу, згоду або розуміння.'},
  {skill:'adaptability',pattern:/\b(change|adapt|instead|alternative|revis\w*|adjust|backup)\b|змін|адапт|натомість|альтернатив|переглян|кориг|резерв/giu,en:'Names a change or alternative.',uk:'Згадує зміну або альтернативу.'}
];

export const scenarios = [
 {id:'production',icon:'01',accent:'mint',focus:['safety','reasoning','communication'],
  title:{en:'The unexpected signal',uk:'Несподіваний сигнал'},
  category:{en:'Production • Safety & reasoning',uk:'Виробництво • Безпека й міркування'},
  summary:{en:'A strange sound. A tight deadline. What deserves your attention first?',uk:'Дивний звук. Стислий термін. Що потребує уваги насамперед?'},
  initial:{en:'You are helping on a fictional packaging line. A conveyor makes an unfamiliar grinding sound and a warning light flickers. The shift lead wants to finish an urgent order. You are not authorised to repair equipment. What would you do first, and why?',uk:'Ви допомагаєте на вигаданій пакувальній лінії. Конвеєр видає незвичний скрегіт, блимає сигнальна лампа. Керівник зміни хоче завершити термінове замовлення. Ви не маєте повноважень ремонтувати обладнання. Що зробите спочатку і чому?'},
  clarification:{en:'What is still unknown, and how would you communicate it to an authorised person without trying to repair the machine yourself?',uk:'Що залишається невідомим і як ви повідомите це уповноваженій особі, не намагаючись ремонтувати машину самостійно?'},
  missing:{en:'How would you account for safety before the deadline? Describe your decision, without giving repair instructions.',uk:'Як ви врахуєте безпеку попри термін? Опишіть рішення без інструкцій із ремонту.'},
  perspective:{en:'Second Perspective: the authorised technician is delayed, and the shift lead says the noise may be normal. Another colleague feels pressured to continue. How would you adapt your plan, and what would you refuse to assume?',uk:'Другий погляд: уповноважений технік затримується, а керівник каже, що шум може бути нормальним. Колега відчуває тиск продовжувати. Як зміните план і чого не будете припускати?'},
  practice:{en:'Practise explaining an uncertain safety concern using observations and questions, with a qualified supervisor.',uk:'Попрактикуйте пояснення невизначеного ризику через спостереження й запитання разом із кваліфікованим керівником.'},
  examples:{en:['I would pause work using the approved site procedure, keep people safe and notify the authorised supervisor. I cannot know the cause from a sound.','I would ask the technician to check the warning and explain what I observed, without touching the machinery.','I would revise the plan, tell the colleague not to assume it is safe, and ask the authorised lead for a safe alternative.'],uk:['Я призупиню роботу за затвердженою процедурою, подбаю про безпеку та повідомлю уповноваженого керівника. Причина шуму невідома.','Я запитаю техніка, чи може він перевірити сигнал, і поясню спостереження, не торкаючись обладнання.','Я зміню план, повідомлю колезі, що безпека не підтверджена, і запитаю керівника про безпечну альтернативу.']}},
 {id:'logistics',icon:'02',accent:'gold',focus:['planning','communication','adaptability'],
  title:{en:'Three stops, one promise',uk:'Три зупинки, одна обіцянка'},
  category:{en:'Logistics • Planning & uncertainty',uk:'Логістика • Планування й невизначеність'},
  summary:{en:'Competing deliveries need a plan that can survive a change.',uk:'Конкуруючим доставкам потрібен план, який витримає зміни.'},
  initial:{en:'You coordinate fictional deliveries. Stop A needs supplies before 11:00 (30 minutes away); B closes at 12:00 (20 minutes away); C has a flexible afternoon window (15 minutes away). It is 10:00, and there is one driver. Travel times between stops are unknown. How would you plan without promising what you cannot verify?',uk:'Ви координуєте вигадані доставки. Пункт A потребує запасів до 11:00 (30 хвилин у дорозі); B зачиняється о 12:00 (20 хвилин); C має гнучке післяобіднє вікно (15 хвилин). Зараз 10:00, водій один. Час між пунктами невідомий. Як сплануєте, не обіцяючи неперевіреного?'},
  clarification:{en:'Which missing information would you check before committing to the route, and whom would you notify about uncertainty?',uk:'Які відсутні дані перевірите перед погодженням маршруту і кому повідомите про невизначеність?'},
  missing:{en:'What would you prioritise first, and why? Include the assumptions you need to check.',uk:'Що поставите в пріоритет і чому? Назвіть припущення, які потрібно перевірити.'},
  perspective:{en:'Second Perspective: a road closure adds 40 minutes to A, and B now says its package is urgently needed. A second driver might become available, but this is unconfirmed. How would you revise the plan and communicate the trade-off?',uk:'Другий погляд: перекриття дороги додає 40 хвилин до A, а B повідомляє про нагальну потребу. Може з’явитися другий водій, але це не підтверджено. Як переглянете план і поясните компроміс?'},
  practice:{en:'Practise a delivery plan with explicit travel assumptions and one fallback route.',uk:'Попрактикуйте план доставки з явними припущеннями щодо часу й одним резервним маршрутом.'},
  examples:{en:['First I would prioritise A, check travel times between stops and notify B that the schedule is provisional.','I would ask the driver to verify the route and contact A and B about unloading times.','I would adjust the route, contact both customers and use a backup driver only after availability is confirmed.'],uk:['Спочатку я визначу пріоритет A, перевірю час між пунктами та повідомлю B, що графік попередній.','Я запитаю водія про маршрут і зв’яжуся з A та B щодо часу розвантаження.','Я зміню маршрут, повідомлю обом клієнтам і залучу резервного водія лише після підтвердження.']}},
 {id:'care',icon:'03',accent:'lilac',focus:['empathy','communication','adaptability'],
  title:{en:'Behind the request',uk:'Що стоїть за проханням'},
  category:{en:'Customer support • Human connection',uk:'Підтримка клієнтів • Людяність'},
  summary:{en:'A frustrated person needs more than a quick answer.',uk:'Засмученій людині потрібно більше, ніж швидка відповідь.'},
  initial:{en:'At a fictional community support desk, a visitor is frustrated because a booking disappeared. They speak quietly, the queue is growing, and you cannot immediately find the record. What would you say and do while respecting their privacy?',uk:'На вигаданій стійці громадської підтримки відвідувач засмучений: бронювання зникло. Він говорить тихо, черга росте, а запису поки немає. Що скажете й зробите, поважаючи приватність?'},
  clarification:{en:'How would you check what the person needs without assuming their feelings or asking for sensitive details in the queue?',uk:'Як перевірите потреби людини, не припускаючи її почуттів і не запитуючи конфіденційні дані в черзі?'},
  missing:{en:'How would you acknowledge the concern and ask what support they prefer?',uk:'Як визнаєте занепокоєння та запитаєте, яку підтримку людина воліє отримати?'},
  perspective:{en:'Second Perspective: the visitor asks to continue in Ukrainian and does not want to discuss the booking in public. A private space is busy. How would you adapt while preserving their choice and keeping the queue informed?',uk:'Другий погляд: відвідувач просить продовжити українською і не хоче обговорювати бронювання публічно. Окреме приміщення зайняте. Як адаптуєтесь, зберігаючи право вибору та інформуючи чергу?'},
  practice:{en:'Practise asking for preferences and explaining realistic options without promising an outcome.',uk:'Попрактикуйте запитання про побажання та пояснення реалістичних варіантів без обіцянок результату.'},
  examples:{en:['I would acknowledge the concern, listen and ask what they prefer. I would check the booking privately with consent.','I would ask what support would help, respect their choice and explain the options without requesting personal details aloud.','I would adapt the conversation to Ukrainian, ask their consent to wait for a private space and inform the queue without sharing details.'],uk:['Я визнаю занепокоєння, вислухаю та запитаю про побажання. Перевірю бронювання приватно за згодою.','Я запитаю, яка підтримка допоможе, поважатиму вибір і поясню варіанти без запиту особистих даних уголос.','Я зміню мову на українську, запитаю згоду почекати на окреме приміщення та повідомлю черзі без розкриття деталей.']}}
];
