import { Component, OnInit, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { fadeInStagger,fadeSlide } from '../animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-cultural',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
 FooterComponent,
    HeaderComponent 
  ],
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css'],
  animations: [fadeSlide, fadeInStagger]
})
export class CulturalComponent {
  isDarkMode = false;
isPlaying = false;

 
isMuted = false;

togglePlay(video: HTMLVideoElement) {
  if (video.paused) {
    video.play();
    this.isPlaying = true;
  } else {
    video.pause();
    this.isPlaying = false;
  }
}

toggleMute(video: HTMLVideoElement) {
  video.muted = !video.muted;
  this.isMuted = video.muted;
}



greetings = [
  { language: 'Mokpwe', text: 'Elela gbwamu', translation: 'Good morning' },
  { language: 'Bafaw', text: 'Mbɔndɛ', translation: 'Hello' },
  { language: 'Bakossi', text: 'Nyambɛ', translation: 'Peace be with you' },
  { language: 'Balong', text: 'Fɔkɛ', translation: 'Welcome' }
];

toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
}

toggleAudio() {
  const audio: HTMLAudioElement = document.querySelector('audio')!;
  this.isPlaying = !this.isPlaying;
  this.isPlaying ? audio.play() : audio.pause();
}

   bgImages = [
    'assets/bg1.jpg',
    'assets/bg2.jpg',
    'assets/bg3.jpg'
  ];

  bakweriTopics = [
  {
    title: 'Mokpwe Language',
    image: 'assets/mbando pictures fix/200A5045.jpg',
    description: 'The native tongue of the Bakweri people is Mokpwe.',
    expanded: false,
    details: [
      'Includes greetings like "Elela gbwamu" (Good morning)',
      'Passed down orally from elders',
      'Still spoken during traditional gatherings'
    ]
  },
  {
    title: 'Traditional Attire',
    image: 'assets/Mbando/3D4A9609.JPG',
    description: 'Colorful regalia reflect pride and heritage.',
    expanded: false,
    details: [
      'Men wear Sanja,shirt and woven hats',
      'Women wear "Kaba ngondo" with beads',
      'Often worn during festivals and weddings'
    ]
  },
  {
    title: 'Cultural Dances',
    image: 'assets/mbando small size pix/DSC04353.jpg',
    description: 'Dance expresses spirit, joy, and strength.',
    expanded: false,
    details: [
      'Famous dances include "Chacha" and "Marlle Dance"',
      'Performed during Mbando and installations',
      'Accompanied by drums and traditional songs'
    ]
  },
  {
    title: 'Cuisine & Dishes',
    image: 'assets/mbando small size pix/DSC04393.jpg',
    description: 'Known for flavorful dishes rooted in tradition.',
    expanded: false,
    details: [
      'Ndole with plantains',
      'Palm nut soup (Mbanga)',
      'Roasted fish with herbs and pepper'
    ]
  },
  {
    title: 'Marriage Customs',
    image: 'assets/mbando small size pix/DSC04345.jpg',
    description: 'Marriages involve deep-rooted traditional rites.',
    expanded: false,
    details: [
      'Bride price negotiation is sacred',
      'Blessings from elders are crucial',
      'Ceremony blends modern and ancestral customs'
    ]
  },
  {
    title: 'Naming Traditions',
    image: 'assets/mbando pictures fix/DSC04315.jpg',
    description: 'Names often reflect events, ancestors, or spirits.',
    expanded: false,
    details: [
      'Child naming is spiritual and celebratory',
      'Names like Ewili, Esuka, Wasa are common',
      'Ceremony involves entire community'
    ]
  },
  {
    title: 'Spiritual Practices',
    image: 'assets/mbando small size pix/DSC04446.jpg',
    description: 'Belief in ancestral spirits and nature guardians.',
    expanded: false,
    details: [
      'Shrines are common in sacred lands',
      'Libation rituals done to ancestors',
      'Spiritual cleansing during crises'
    ]
  },
  {
    title: 'Palm Wine Culture',
    image: 'assets/mbando pictures fix/DSC04421.jpg',
    description: 'Tapping and sharing palm wine is a tradition.',
    expanded: false,
    details: [
      'Palm wine is offered to guests',
      'Used in rituals and celebrations',
      'Tapping is a skilled heritage practice'
    ]
  },
  {
    title: 'Bakweri Proverbs',
    image: 'assets/mbando pictures fix/DSC04377.jpg',
    description: 'Wisdom passed through generations in sayings.',
    expanded: false,
    details: [
      '"A tree never forgets its roots"',
      '"Even the smallest drum has a rhythm"',
      '"Where elders sit, the future listens"'
    ]
  },
  {
    title: 'Mbando Ya Hvako Festival',
    image: 'assets/mabado cultural.PNG',
    description: 'A majestic cultural festival for unity and pride.',
    expanded: false,
    details: [
      'Features all Bakweri clans',
      'Includes dancing, wrestling, exhibitions',
      'Held annually in Buea and Limbe'
    ]
  }
];

fakoLegends = [
   {
    name: 'Chief Robert Esuka Enderly',
    role: 'Paramount Chief of Buea',
    image: 'assets/paramountBuea.PNG',
    bio: 'A revered custodian of Bakweri heritage, HRH Robert Esuka Endeley has dedicated his reign to preserving tradition while guiding his people toward modern progress. Known for his unifying spirit and visionary leadership, he has become a symbol of cultural pride and resilience for the Buea community and beyond.'
  },
  {
    name: 'HRH Epupa Ekum Victor',
    role: 'Paramount Chief of Limbe',
    image: 'assets/chiefLimbe.jpeg',
    bio: 'HRH Epupa Ekum Victor stands as a guardian of coastal heritage, upholding the ancestral customs of the Limbe clans with dignity and wisdom. Through his leadership, he fosters harmony, cultural growth, and a deep-rooted connection to the traditions that define the soul of Fako.'
  },

  {
    name: 'Chief Ewili Moka',
    role: 'Warlord & Diplomat',
    image: 'assets/legends/ewili.jpg',
    bio: 'Chief Ewili was a fearless leader who defended the Bakweri territory and negotiated peacefully with colonial forces. His wisdom and strength inspired generations.'
  },
  {
    name: 'Queen Anna Manga',
    role: 'Matriarch & Herbalist',
    image: 'assets/legends/anna.jpg',
    bio: 'Known for her deep knowledge of herbs and spiritual guidance, Queen Anna was a pillar of the Fako community, preserving medicinal knowledge and healing traditions.'
  },
  {
    name: 'Pa Solomon Ndumbe',
    role: 'Historian & Educator',
    image: 'assets/legends/solomon.jpg',
    bio: 'A respected elder who documented the oral histories of Fako. His works have kept Bakweri stories alive and taught youths the values of their ancestry.'
  },
  {
    name: 'Warrior Mbando',
    role: 'Hero of Resistance',
    image: 'assets/legends/mbando.jpg',
    bio: 'Mbando led numerous resistances against external threats and was instrumental in organizing the unity festival now known as Mbando Ya Hvako.'
  }
];


  chiefs = [
    {
      name: 'HRH Robert Esuka Endeley',
      image: 'assets/paramountBuea.PNG',
      title: 'Custodian of the Bakweri legacy'
    },
    {
      name: 'HRH Epupa Ekum Victor',
      image: 'assets/paramountLimbe.PNG',
      title: 'Protector of coastland traditions'
    }
  ];

 
 Legends = [
    {
       image: 'assets/paramountLimbe.PNG',
      name: 'HRH Robert Esuka Endeley',
      Bio: 'very good man',
     
    },
    {
      image: 'assets/paramountLimbe.PNG',
      name: 'King Ndumbe Lobe Bell',
      Bio: 'very good man',
    }
  ];

  mbandoImages = [
    'assets/esuka.PNG',
    'assets/festival1.jpg',
    'assets/festival2.jpg'
  ];

  proverbs = [
    { quote: 'Even the smallest drum has a rhythm.', origin: 'Buea' },
    { quote: 'Where elders sit, the future listens.', origin: 'Limbe' },
    { quote: 'A tree never forgets its roots.', origin: 'Tiko' }
  ];

  testimonials = [
    'This place brings our culture to life!',
    'A beautiful preservation of our roots.',
    'Educational and inspiring for the younger generation.'
  ];

}
  

